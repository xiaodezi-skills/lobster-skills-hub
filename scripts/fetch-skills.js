/**
 * 技能数据抓取脚本
 * 自动从各平台抓取技能信息并更新到本地数据库
 */

const fs = require('fs');
const path = require('path');

// 配置
const CONFIG = {
  dataPath: path.join(__dirname, '../public/data/skills.json'),
  backupPath: path.join(__dirname, '../public/data/skills-backup.json'),
  platforms: {
    openclaw: {
      name: 'OpenClaw',
      apiUrl: 'https://openclawmp.cc/api/assets',
      type: 'skill'
    },
    github: {
      name: 'GitHub',
      searchQuery: 'openclaw skill OR agent skill',
      perPage: 100
    },
    coze: {
      name: 'Coze',
      storeUrl: 'https://coze.cn/store/agent'
    }
  }
};

// 日志
function log(message, type = 'info') {
  const timestamp = new Date().toISOString();
  const prefix = {
    info: '📘',
    success: '✅',
    warning: '⚠️',
    error: '❌'
  }[type] || '📘';
  
  console.log(`${prefix} [${timestamp}] ${message}`);
}

// 读取现有数据
function loadExistingData() {
  try {
    const data = fs.readFileSync(CONFIG.dataPath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    log('未找到现有数据，创建新数据库', 'warning');
    return {
      metadata: {
        version: '1.0.0',
        lastUpdated: new Date().toISOString().split('T')[0],
        totalSkills: 0,
        totalPlatforms: 0,
        totalCategories: 0
      },
      categories: [],
      platforms: [],
      skills: []
    };
  }
}

// 保存数据
function saveData(data) {
  try {
    // 备份现有数据
    if (fs.existsSync(CONFIG.dataPath)) {
      fs.copyFileSync(CONFIG.dataPath, CONFIG.backupPath);
    }
    
    // 更新元数据
    data.metadata.lastUpdated = new Date().toISOString().split('T')[0];
    data.metadata.totalSkills = data.skills.length;
    data.metadata.totalPlatforms = data.platforms.length;
    data.metadata.totalCategories = data.categories.length;
    
    // 保存
    fs.writeFileSync(CONFIG.dataPath, JSON.stringify(data, null, 2));
    log(`数据已保存: ${data.skills.length} 个技能`, 'success');
    return true;
  } catch (error) {
    log(`保存数据失败: ${error.message}`, 'error');
    return false;
  }
}

// 模拟从OpenClaw抓取
async function fetchOpenClawSkills() {
  log('正在抓取 OpenClaw 技能...');
  
  // 这里应该是实际的API调用
  // 示例返回
  const mockSkills = [
    {
      id: `oc-${Date.now()}-1`,
      name: '示例技能 ' + Math.floor(Math.random() * 1000),
      platform: 'openclaw',
      category: 'productivity',
      description: '这是一个示例技能描述',
      tags: ['示例', '测试'],
      downloads: Math.floor(Math.random() * 5000),
      rating: (3 + Math.random() * 2).toFixed(1),
      author: 'OpenClaw用户',
      verified: false,
      warning: '⚠️ 未经验证'
    }
  ];
  
  log(`从 OpenClaw 获取了 ${mockSkills.length} 个技能`, 'success');
  return mockSkills;
}

// 模拟从GitHub抓取
async function fetchGitHubSkills() {
  log('正在抓取 GitHub 技能...');
  
  // 这里应该是实际的GitHub API调用
  const mockSkills = [
    {
      id: `gh-${Date.now()}-1`,
      name: 'GitHub示例技能 ' + Math.floor(Math.random() * 1000),
      platform: 'github',
      category: 'coding',
      description: 'GitHub上的示例技能',
      tags: ['GitHub', '开源'],
      downloads: Math.floor(Math.random() * 10000),
      rating: (3.5 + Math.random() * 1.5).toFixed(1),
      author: 'GitHub用户',
      verified: true,
      warning: null
    }
  ];
  
  log(`从 GitHub 获取了 ${mockSkills.length} 个技能`, 'success');
  return mockSkills;
}

// 模拟从Coze抓取
async function fetchCozeSkills() {
  log('正在抓取 Coze 技能...');
  
  // 这里应该是实际的Coze API调用或页面抓取
  const mockSkills = [
    {
      id: `cz-${Date.now()}-1`,
      name: 'Coze示例技能 ' + Math.floor(Math.random() * 1000),
      platform: 'coze',
      category: 'automation',
      description: 'Coze平台上的示例技能',
      tags: ['Coze', 'Bot'],
      downloads: Math.floor(Math.random() * 3000),
      rating: (3 + Math.random() * 2).toFixed(1),
      author: 'Coze用户',
      verified: false,
      warning: '⚠️ 需要API密钥'
    }
  ];
  
  log(`从 Coze 获取了 ${mockSkills.length} 个技能`, 'success');
  return mockSkills;
}

// 去重
function deduplicateSkills(skills) {
  const seen = new Set();
  return skills.filter(skill => {
    const key = `${skill.platform}-${skill.name}`;
    if (seen.has(key)) {
      return false;
    }
    seen.add(key);
    return true;
  });
}

// 合并数据
function mergeSkills(existingSkills, newSkills) {
  const skillMap = new Map(existingSkills.map(s => [`${s.platform}-${s.name}`, s]));
  
  newSkills.forEach(skill => {
    const key = `${skill.platform}-${skill.name}`;
    if (skillMap.has(key)) {
      // 更新现有技能
      const existing = skillMap.get(key);
      skillMap.set(key, { ...existing, ...skill, id: existing.id });
    } else {
      // 添加新技能
      skillMap.set(key, skill);
    }
  });
  
  return Array.from(skillMap.values());
}

// 主函数
async function main() {
  log('开始抓取技能数据...');
  
  // 加载现有数据
  const data = loadExistingData();
  
  // 从各平台抓取
  const newSkills = [];
  
  try {
    const openclawSkills = await fetchOpenClawSkills();
    newSkills.push(...openclawSkills);
  } catch (error) {
    log(`抓取 OpenClaw 失败: ${error.message}`, 'error');
  }
  
  try {
    const githubSkills = await fetchGitHubSkills();
    newSkills.push(...githubSkills);
  } catch (error) {
    log(`抓取 GitHub 失败: ${error.message}`, 'error');
  }
  
  try {
    const cozeSkills = await fetchCozeSkills();
    newSkills.push(...cozeSkills);
  } catch (error) {
    log(`抓取 Coze 失败: ${error.message}`, 'error');
  }
  
  // 去重
  const uniqueNewSkills = deduplicateSkills(newSkills);
  log(`去重后新技能: ${uniqueNewSkills.length} 个`);
  
  // 合并数据
  data.skills = mergeSkills(data.skills, uniqueNewSkills);
  
  // 保存
  if (saveData(data)) {
    log('数据更新完成！', 'success');
    log(`总计技能数: ${data.skills.length}`);
  }
}

// 运行
main().catch(error => {
  log(`程序执行失败: ${error.message}`, 'error');
  process.exit(1);
});

// 导出供其他脚本使用
module.exports = {
  loadExistingData,
  saveData,
  fetchOpenClawSkills,
  fetchGitHubSkills,
  fetchCozeSkills
};

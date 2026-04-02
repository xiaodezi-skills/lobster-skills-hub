/**
 * 技能详情页脚本
 */

// 技能数据（与app.js共享）
const skillsData = [
  {
    id: 'skill-001',
    name: 'PDF批量处理器',
    platform: 'openclaw',
    category: 'productivity',
    description: '批量处理PDF文件，支持合并、拆分、压缩、转换格式等功能，大幅提升文档处理效率。支持命令行和图形界面两种操作方式，可处理上千个文件。',
    tags: ['PDF', '文档处理', '批量操作', '办公自动化'],
    downloads: 2341,
    rating: 4.8,
    author: '小德子',
    verified: false,
    warning: '未经验证，请谨慎使用',
    installCommand: 'openclaw install pdf-batch-processor',
    downloadUrl: 'https://github.com/xiaodezi-skills/pdf-batch-processor/archive/refs/heads/main.zip',
    githubUrl: 'https://github.com/xiaodezi-skills/pdf-batch-processor',
    readme: `# PDF批量处理器

## 功能特性
- 批量合并PDF文件
- 按页数拆分PDF
- 压缩PDF文件大小
- 转换PDF为Word/Excel
- 批量添加水印

## 安装
\`\`\`bash
openclaw install pdf-batch-processor
\`\`\`

## 使用
\`\`\`bash
# 合并PDF
pdf-batch merge *.pdf output.pdf

# 拆分PDF
pdf-batch split input.pdf --pages 10

# 压缩PDF
pdf-batch compress input.pdf --quality medium
\`\`\``
  },
  {
    id: 'skill-002',
    name: '智能写作助手',
    platform: 'github',
    category: 'writing',
    description: '基于GPT的智能写作辅助工具，支持多种文体，提供写作建议和内容优化。可生成文章大纲、润色文字、检查语法错误。',
    tags: ['AI写作', '内容生成', '文本优化', 'GPT'],
    downloads: 5623,
    rating: 4.6,
    author: 'AI-Lab',
    verified: true,
    warning: null,
    installCommand: 'pip install ai-writing-assistant',
    downloadUrl: 'https://github.com/ai-lab/writing-assistant/archive/refs/heads/main.zip',
    githubUrl: 'https://github.com/ai-lab/writing-assistant',
    readme: `# 智能写作助手

## 功能
- 文章大纲生成
- 内容续写
- 语法检查
- 风格润色

## 安装
\`\`\`bash
pip install ai-writing-assistant
\`\`\``
  },
  {
    id: 'skill-003',
    name: '代码审查助手',
    platform: 'coze',
    category: 'coding',
    description: '自动审查代码质量，发现潜在bug和安全漏洞，提供优化建议。支持Python、JavaScript、Java等多种语言。',
    tags: ['代码审查', '质量检测', '安全扫描', '静态分析'],
    downloads: 1892,
    rating: 4.5,
    author: 'CodeMaster',
    verified: false,
    warning: '需要访问代码仓库权限',
    installCommand: '在扣子Coze平台搜索"代码审查助手"',
    downloadUrl: null,
    githubUrl: null,
    readme: `# 代码审查助手

## 支持语言
- Python
- JavaScript/TypeScript
- Java
- Go
- Rust

## 功能
- Bug检测
- 安全漏洞扫描
- 性能优化建议
- 代码规范检查`
  },
  {
    id: 'skill-004',
    name: '小红书内容生成器',
    platform: 'openclaw',
    category: 'marketing',
    description: '专为小红书平台优化的内容生成工具，支持标题、正文、标签一键生成。内置热门话题库和爆款文案模板。',
    tags: ['小红书', '内容营销', '社交媒体', '文案生成'],
    downloads: 4521,
    rating: 4.7,
    author: 'SocialPro',
    verified: true,
    warning: null,
    installCommand: 'openclaw install xhs-content-creator',
    downloadUrl: 'https://github.com/xiaodezi-skills/xhs-content-creator/archive/refs/heads/main.zip',
    githubUrl: 'https://github.com/xiaodezi-skills/xhs-content-creator',
    readme: `# 小红书内容生成器

## 功能
- 爆款标题生成
- 正文内容创作
- 热门标签推荐
- 封面文案优化

## 安装
\`\`\`bash
openclaw install xhs-content-creator
\`\`\``
  },
  {
    id: 'skill-005',
    name: '数据分析可视化',
    platform: 'github',
    category: 'data',
    description: '将复杂数据转换为直观图表，支持多种图表类型和自定义样式。可导出为图片、PDF或交互式HTML。',
    tags: ['数据可视化', '图表', '报表', '数据分析'],
    downloads: 3245,
    rating: 4.4,
    author: 'DataViz',
    verified: false,
    warning: '需要上传数据文件',
    installCommand: 'pip install data-viz-tool',
    downloadUrl: 'https://github.com/dataviz/tool/archive/refs/heads/main.zip',
    githubUrl: 'https://github.com/dataviz/tool',
    readme: `# 数据分析可视化

## 支持图表
- 柱状图/条形图
- 折线图/面积图
- 饼图/环形图
- 散点图/气泡图
- 热力图
- 地图可视化`
  },
  {
    id: 'skill-006',
    name: '智能客服机器人',
    platform: 'dify',
    category: 'automation',
    description: '基于知识库的智能客服系统，支持多轮对话和意图识别。可对接微信、钉钉、企业微信等平台。',
    tags: ['客服', '聊天机器人', 'NLP', '知识库'],
    downloads: 2134,
    rating: 4.3,
    author: 'BotBuilder',
    verified: true,
    warning: null,
    installCommand: '在Dify平台导入模板',
    downloadUrl: null,
    githubUrl: null,
    readme: `# 智能客服机器人

## 功能
- 多轮对话
- 意图识别
- 知识库问答
- 人工转接
- 数据分析`
  }
];

// 平台配置
const platformConfig = {
  openclaw: { name: 'OpenClaw', icon: '🦞', color: '#ff6b35', installGuide: '使用OpenClaw CLI安装' },
  github: { name: 'GitHub', icon: '🐙', color: '#333', installGuide: '克隆仓库或使用GitHub CLI' },
  coze: { name: '扣子Coze', icon: '🤖', color: '#4caf50', installGuide: '在Coze平台搜索安装' },
  dify: { name: 'Dify', icon: '🔧', color: '#2196f3', installGuide: '在Dify平台导入' },
  langchain: { name: 'LangChain', icon: '⛓️', color: '#1e3a8a', installGuide: 'pip install' },
  autogen: { name: 'AutoGen', icon: '👥', color: '#10b981', installGuide: 'pip install' },
  crewai: { name: 'CrewAI', icon: '👨‍✈️', color: '#f59e0b', installGuide: 'pip install' },
  other: { name: '其他', icon: '📦', color: '#6b7280', installGuide: '按说明安装' }
};

// 分类配置
const categoryConfig = {
  productivity: '效率工具',
  writing: '写作辅助',
  coding: '编程开发',
  design: '设计创意',
  data: '数据分析',
  marketing: '营销推广',
  research: '研究学术',
  life: '生活助手',
  finance: '财务金融',
  security: '安全检测',
  automation: '自动化',
  integration: '系统集成'
};

// 获取URL参数
function getUrlParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// 获取技能数据
function getSkillById(id) {
  return skillsData.find(skill => skill.id === id);
}

// 获取相关技能
function getRelatedSkills(currentSkill, limit = 3) {
  return skillsData
    .filter(skill => skill.id !== currentSkill.id && skill.category === currentSkill.category)
    .slice(0, limit);
}

// 格式化数字
function formatNumber(num) {
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'k';
  }
  return num.toString();
}

// 渲染技能详情
function renderSkillDetail() {
  const skillId = getUrlParam('id');
  
  if (!skillId) {
    showError('未指定技能ID');
    return;
  }
  
  const skill = getSkillById(skillId);
  
  if (!skill) {
    showError('技能不存在');
    return;
  }
  
  // 更新页面标题
  document.title = `${skill.name} - 龙虾技能库`;
  
  // 渲染基本信息
  document.getElementById('skillName').textContent = skill.name;
  document.getElementById('skillDescription').textContent = skill.description;
  document.getElementById('skillDownloads').textContent = formatNumber(skill.downloads);
  document.getElementById('skillRating').textContent = skill.rating;
  document.getElementById('skillAuthor').textContent = skill.author;
  
  // 平台标签
  const platform = platformConfig[skill.platform] || platformConfig.other;
  const platformBadge = document.getElementById('skillPlatform');
  platformBadge.textContent = platform.name;
  platformBadge.style.background = platform.color;
  
  // 分类标签
  document.getElementById('skillCategory').textContent = categoryConfig[skill.category] || '其他';
  
  // 验证标签
  const verifiedBadge = document.getElementById('skillVerified');
  if (skill.verified) {
    verifiedBadge.textContent = '✅ 已验证';
    verifiedBadge.className = 'verified-badge verified';
  } else {
    verifiedBadge.textContent = '⚠️ 未验证';
    verifiedBadge.className = 'verified-badge unverified';
  }
  
  // 标签
  const tagsContainer = document.getElementById('skillTags');
  tagsContainer.innerHTML = skill.tags.map(tag => 
    `<span class="tag">${tag}</span>`
  ).join('');
  
  // 安全警告
  const warningBox = document.getElementById('skillWarning');
  if (skill.warning) {
    warningBox.innerHTML = `
      <p><strong>⚠️ ${skill.warning}</strong></p>
      <ul>
        <li>建议在隔离环境中测试</li>
        <li>仔细阅读技能说明和权限要求</li>
        <li>不要授予不必要的权限</li>
        <li>如有异常请立即停止使用</li>
      </ul>
    `;
  } else {
    warningBox.innerHTML = `
      <p>✅ 此技能已通过基础验证，但仍建议谨慎使用。</p>
      <ul>
        <li>建议在隔离环境中测试</li>
        <li>仔细阅读技能说明</li>
        <li>如有异常请立即停止使用</li>
      </ul>
    `;
  }
  
  // 下载按钮
  const downloadBtn = document.getElementById('downloadBtn');
  if (skill.downloadUrl) {
    downloadBtn.onclick = () => downloadSkill(skill);
  } else {
    downloadBtn.innerHTML = '<span class="btn-icon">🔗</span><span class="btn-text">前往平台安装</span>';
    downloadBtn.onclick = () => {
      if (skill.githubUrl) {
        window.open(skill.githubUrl, '_blank');
      } else {
        alert(`请在${platform.name}平台搜索"${skill.name}"进行安装`);
      }
    };
  }
  
  // 平台列表
  const platformList = document.getElementById('platformList');
  platformList.innerHTML = `
    <div class="platform-item">
      <span class="platform-icon">${platform.icon}</span>
      <div class="platform-info">
        <div class="platform-name">${platform.name}</div>
        <div class="platform-guide">${platform.installGuide}</div>
      </div>
    </div>
    ${skill.installCommand ? `
    <div class="install-command">
      <code>${skill.installCommand}</code>
      <button class="copy-btn" onclick="copyToClipboard('${skill.installCommand}')">📋</button>
    </div>
    ` : ''}
  `;
  
  // 相关技能
  const relatedSkills = getRelatedSkills(skill);
  const relatedContainer = document.getElementById('relatedSkills');
  relatedContainer.innerHTML = relatedSkills.map(s => `
    <a href="/skill-detail.html?id=${s.id}" class="related-item">
      <div class="related-name">${s.name}</div>
      <div class="related-meta">⭐ ${s.rating} · ⬇️ ${formatNumber(s.downloads)}</div>
    </a>
  `).join('');
}

// 下载技能
function downloadSkill(skill) {
  if (!skill.downloadUrl) {
    alert('此技能暂无直接下载，请前往平台安装');
    return;
  }
  
  // 创建下载链接
  const link = document.createElement('a');
  link.href = skill.downloadUrl;
  link.download = `${skill.name.replace(/\s+/g, '-')}.zip`;
  link.target = '_blank';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  // 更新下载计数
  skill.downloads++;
  document.getElementById('skillDownloads').textContent = formatNumber(skill.downloads);
  
  // 显示提示
  showToast('下载已开始，请查看下载文件夹');
}

// 复制到剪贴板
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    showToast('已复制到剪贴板');
  }).catch(err => {
    console.error('复制失败:', err);
    showToast('复制失败，请手动复制');
  });
}

// 显示错误
function showError(message) {
  document.querySelector('.detail-layout').innerHTML = `
    <div class="error-message">
      <h2>😕 ${message}</h2>
      <p>请返回 <a href="/skills">技能列表</a> 浏览其他技能</p>
    </div>
  `;
}

// 显示提示
function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.classList.add('show');
  }, 100);
  
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      document.body.removeChild(toast);
    }, 300);
  }, 3000);
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
  renderSkillDetail();
  console.log('🦞 技能详情页已加载');
});

/**
 * 龙虾技能库 - 主应用脚本
 * Lobster Skills Hub - Main Application
 */

// 技能数据管理
const SkillsData = {
  // 分类数据
  categories: [
    { id: 'productivity', name: '效率工具', icon: '⚡', count: 156 },
    { id: 'writing', name: '写作辅助', icon: '✍️', count: 128 },
    { id: 'coding', name: '编程开发', icon: '💻', count: 203 },
    { id: 'design', name: '设计创意', icon: '🎨', count: 89 },
    { id: 'data', name: '数据分析', icon: '📊', count: 76 },
    { id: 'marketing', name: '营销推广', icon: '📢', count: 94 },
    { id: 'research', name: '研究学术', icon: '🔬', count: 67 },
    { id: 'life', name: '生活助手', icon: '🏠', count: 112 },
    { id: 'finance', name: '财务金融', icon: '💰', count: 45 },
    { id: 'security', name: '安全检测', icon: '🔒', count: 38 },
    { id: 'automation', name: '自动化', icon: '🤖', count: 178 },
    { id: 'integration', name: '系统集成', icon: '🔌', count: 61 }
  ],

  // 平台数据
  platforms: [
    { id: 'openclaw', name: 'OpenClaw', icon: '🦞', count: 423, color: '#ff6b35' },
    { id: 'github', name: 'GitHub', icon: '🐙', count: 312, color: '#333' },
    { id: 'coze', name: '扣子Coze', icon: '🤖', count: 287, color: '#4caf50' },
    { id: 'dify', name: 'Dify', icon: '🔧', count: 89, color: '#2196f3' },
    { id: 'langchain', name: 'LangChain', icon: '⛓️', count: 67, color: '#1e3a8a' },
    { id: 'autogen', name: 'AutoGen', icon: '👥', count: 45, color: '#10b981' },
    { id: 'crewai', name: 'CrewAI', icon: '👨‍✈️', count: 34, color: '#f59e0b' },
    { id: 'other', name: '其他', icon: '📦', count: 156, color: '#6b7280' }
  ],

  // 示例技能数据
  skills: [
    {
      id: 'skill-001',
      name: 'PDF批量处理器',
      platform: 'openclaw',
      category: 'productivity',
      description: '批量处理PDF文件，支持合并、拆分、压缩、转换格式等功能，大幅提升文档处理效率。',
      tags: ['PDF', '文档处理', '批量操作'],
      downloads: 2341,
      rating: 4.8,
      author: '小德子',
      verified: false,
      warning: '未经验证，请谨慎使用'
    },
    {
      id: 'skill-002',
      name: '智能写作助手',
      platform: 'github',
      category: 'writing',
      description: '基于GPT的智能写作辅助工具，支持多种文体，提供写作建议和内容优化。',
      tags: ['AI写作', '内容生成', '文本优化'],
      downloads: 5623,
      rating: 4.6,
      author: 'AI-Lab',
      verified: true,
      warning: null
    },
    {
      id: 'skill-003',
      name: '代码审查助手',
      platform: 'coze',
      category: 'coding',
      description: '自动审查代码质量，发现潜在bug和安全漏洞，提供优化建议。',
      tags: ['代码审查', '质量检测', '安全扫描'],
      downloads: 1892,
      rating: 4.5,
      author: 'CodeMaster',
      verified: false,
      warning: '需要访问代码仓库权限'
    },
    {
      id: 'skill-004',
      name: '小红书内容生成器',
      platform: 'openclaw',
      category: 'marketing',
      description: '专为小红书平台优化的内容生成工具，支持标题、正文、标签一键生成。',
      tags: ['小红书', '内容营销', '社交媒体'],
      downloads: 4521,
      rating: 4.7,
      author: 'SocialPro',
      verified: true,
      warning: null
    },
    {
      id: 'skill-005',
      name: '数据分析可视化',
      platform: 'github',
      category: 'data',
      description: '将复杂数据转换为直观图表，支持多种图表类型和自定义样式。',
      tags: ['数据可视化', '图表', '报表'],
      downloads: 3245,
      rating: 4.4,
      author: 'DataViz',
      verified: false,
      warning: '需要上传数据文件'
    },
    {
      id: 'skill-006',
      name: '智能客服机器人',
      platform: 'dify',
      category: 'automation',
      description: '基于知识库的智能客服系统，支持多轮对话和意图识别。',
      tags: ['客服', '聊天机器人', 'NLP'],
      downloads: 2134,
      rating: 4.3,
      author: 'BotBuilder',
      verified: true,
      warning: null
    }
  ],

  // 获取分类
  getCategories() {
    return this.categories;
  },

  // 获取平台
  getPlatforms() {
    return this.platforms;
  },

  // 获取热门技能
  getPopularSkills(limit = 6) {
    return [...this.skills]
      .sort((a, b) => b.downloads - a.downloads)
      .slice(0, limit);
  },

  // 获取最新技能
  getNewestSkills(limit = 6) {
    return [...this.skills]
      .sort((a, b) => b.id.localeCompare(a.id))
      .slice(0, limit);
  },

  // 搜索技能
  searchSkills(query) {
    const lowerQuery = query.toLowerCase();
    return this.skills.filter(skill =>
      skill.name.toLowerCase().includes(lowerQuery) ||
      skill.description.toLowerCase().includes(lowerQuery) ||
      skill.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
    );
  },

  // 按分类筛选
  filterByCategory(categoryId) {
    return this.skills.filter(skill => skill.category === categoryId);
  },

  // 按平台筛选
  filterByPlatform(platformId) {
    return this.skills.filter(skill => skill.platform === platformId);
  }
};

// UI渲染器
const UIRenderer = {
  // 渲染分类卡片
  renderCategories() {
    const container = document.getElementById('categoriesGrid');
    if (!container) return;

    const categories = SkillsData.getCategories();
    container.innerHTML = categories.map(cat => `
      <div class="category-card" onclick="window.location.href='/skills?category=${cat.id}'">
        <div class="category-icon">${cat.icon}</div>
        <div class="category-name">${cat.name}</div>
        <div class="category-count">${cat.count} 个技能</div>
      </div>
    `).join('');
  },

  // 渲染平台卡片
  renderPlatforms() {
    const container = document.getElementById('platformsGrid');
    if (!container) return;

    const platforms = SkillsData.getPlatforms();
    container.innerHTML = platforms.map(platform => `
      <div class="platform-card" onclick="window.location.href='/skills?platform=${platform.id}'">
        <div class="platform-logo" style="background: ${platform.color}">
          ${platform.icon}
        </div>
        <div class="platform-name">${platform.name}</div>
        <div class="platform-count">${platform.count} 个技能</div>
      </div>
    `).join('');
  },

  // 渲染技能卡片
  renderSkillCard(skill) {
    const platformConfig = {
      openclaw: { class: 'platform-openclaw', label: 'OpenClaw' },
      github: { class: 'platform-github', label: 'GitHub' },
      coze: { class: 'platform-coze', label: 'Coze' },
      dify: { class: 'platform-other', label: 'Dify' },
      langchain: { class: 'platform-other', label: 'LangChain' },
      autogen: { class: 'platform-other', label: 'AutoGen' },
      crewai: { class: 'platform-other', label: 'CrewAI' },
      other: { class: 'platform-other', label: '其他' }
    };

    const platform = platformConfig[skill.platform] || platformConfig.other;
    const warningIcon = skill.warning ? `<span class="skill-warning" title="${skill.warning}">⚠️</span>` : '';
    const verifiedIcon = skill.verified ? '✅' : '';

    return `
      <div class="skill-card" onclick="window.location.href='/skill-detail.html?id=${skill.id}'" style="cursor: pointer;">
        <div class="skill-header">
          <h3 class="skill-title">
            ${skill.name}
            ${verifiedIcon}
            ${warningIcon}
          </h3>
          <span class="skill-platform ${platform.class}">${platform.label}</span>
        </div>
        <div class="skill-body">
          <p class="skill-desc">${skill.description}</p>
          <div class="skill-tags">
            ${skill.tags.map(tag => `<span class="skill-tag">${tag}</span>`).join('')}
          </div>
        </div>
        <div class="skill-footer">
          <div class="skill-stats">
            <span class="skill-stat">⬇️ ${this.formatNumber(skill.downloads)}</span>
            <span class="skill-stat">⭐ ${skill.rating}</span>
          </div>
          <span class="skill-author">@${skill.author}</span>
        </div>
      </div>
    `;
  },

  // 渲染热门技能
  renderPopularSkills() {
    const container = document.getElementById('popularSkills');
    if (!container) return;

    const skills = SkillsData.getPopularSkills();
    container.innerHTML = skills.map(skill => this.renderSkillCard(skill)).join('');
  },

  // 渲染最新技能
  renderNewestSkills() {
    const container = document.getElementById('newestSkills');
    if (!container) return;

    const skills = SkillsData.getNewestSkills();
    container.innerHTML = skills.map(skill => this.renderSkillCard(skill)).join('');
  },

  // 格式化数字
  formatNumber(num) {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
  }
};

// 搜索功能
const SearchManager = {
  init() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;

    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        this.performSearch(searchInput.value);
      }
    });
  },

  performSearch(query) {
    if (!query.trim()) return;
    window.location.href = `/search?q=${encodeURIComponent(query)}`;
  }
};

// 移动端菜单
const MobileMenu = {
  init() {
    const toggle = document.getElementById('menuToggle');
    const nav = document.querySelector('.main-nav');
    
    if (!toggle || !nav) return;

    toggle.addEventListener('click', () => {
      nav.classList.toggle('active');
    });
  }
};

// 广告管理器 (Monetag集成)
const AdManager = {
  // 广告位配置
  adSlots: {
    top: { id: 'ad-top', size: '728x90' },
    sidebar: { id: 'ad-sidebar', size: '300x250' },
    content1: { id: 'ad-content-1', size: '728x90' },
    content2: { id: 'ad-content-2', size: '300x600' },
    bottom: { id: 'ad-bottom', size: '728x90' }
  },

  // 初始化广告
  init() {
    // 检查是否已加载Monetag脚本
    if (typeof monetag !== 'undefined') {
      this.loadAds();
    } else {
      console.log('Monetag not loaded yet - using placeholders');
    }
  },

  // 加载广告
  loadAds() {
    Object.values(this.adSlots).forEach(slot => {
      const container = document.getElementById(slot.id);
      if (container) {
        // 这里插入Monetag广告代码
        // container.innerHTML = `<div id="${slot.id}-ad"></div>`;
        // monetag.displayAd(slot.id + '-ad');
      }
    });
  },

  // 刷新广告
  refreshAds() {
    if (typeof monetag !== 'undefined') {
      monetag.refresh();
    }
  }
};

// 分析追踪
const Analytics = {
  // 页面浏览追踪
  trackPageView(page) {
    console.log(`Page view: ${page}`);
    // 这里可以集成Google Analytics或其他分析工具
  },

  // 事件追踪
  trackEvent(category, action, label) {
    console.log(`Event: ${category} - ${action} - ${label}`);
  },

  // 技能点击追踪
  trackSkillClick(skillId) {
    this.trackEvent('Skill', 'Click', skillId);
  },

  // 搜索追踪
  trackSearch(query) {
    this.trackEvent('Search', 'Query', query);
  }
};

// SEO优化
const SEOOptimizer = {
  // 更新页面标题
  setTitle(title) {
    document.title = `${title} - 龙虾技能库`;
  },

  // 更新Meta描述
  setMetaDescription(desc) {
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.content = desc;
    }
  },

  // 更新Canonical URL
  setCanonical(url) {
    const link = document.querySelector('link[rel="canonical"]');
    if (link) {
      link.href = url;
    }
  },

  // 结构化数据
  setStructuredData(data) {
    const script = document.querySelector('script[type="application/ld+json"]');
    if (script) {
      script.textContent = JSON.stringify(data);
    }
  }
};

// 初始化应用
document.addEventListener('DOMContentLoaded', () => {
  // 渲染UI
  UIRenderer.renderCategories();
  UIRenderer.renderPlatforms();
  UIRenderer.renderPopularSkills();
  UIRenderer.renderNewestSkills();

  // 初始化功能
  SearchManager.init();
  MobileMenu.init();
  AdManager.init();

  // 追踪页面浏览
  Analytics.trackPageView(window.location.pathname);

  console.log('🦞 龙虾技能库已加载完成');
});

// 导出模块 (用于测试)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SkillsData, UIRenderer, SearchManager, AdManager, Analytics };
}

// 分类页面脚本
const categoriesData = [
  { id: 'productivity', name: '效率工具', icon: '⚡', count: 156, desc: '提升工作效率的各类工具' },
  { id: 'writing', name: '写作辅助', icon: '✍️', count: 128, desc: 'AI写作和内容生成工具' },
  { id: 'coding', name: '编程开发', icon: '💻', count: 203, desc: '代码生成和开发辅助工具' },
  { id: 'design', name: '设计创意', icon: '🎨', count: 89, desc: '设计和创意生成工具' },
  { id: 'data', name: '数据分析', icon: '📊', count: 76, desc: '数据处理和可视化工具' },
  { id: 'marketing', name: '营销推广', icon: '📢', count: 94, desc: '营销和社交媒体工具' },
  { id: 'research', name: '研究学术', icon: '🔬', count: 67, desc: '学术研究和文献工具' },
  { id: 'life', name: '生活助手', icon: '🏠', count: 112, desc: '日常生活辅助工具' },
  { id: 'finance', name: '财务金融', icon: '💰', count: 45, desc: '财务分析和金融工具' },
  { id: 'security', name: '安全检测', icon: '🔒', count: 38, desc: '安全和漏洞检测工具' },
  { id: 'automation', name: '自动化', icon: '🤖', count: 178, desc: '流程自动化和RPA工具' },
  { id: 'integration', name: '系统集成', icon: '🔌', count: 61, desc: '系统集成和API工具' }
];

function renderCategories() {
  const container = document.getElementById('categoriesGrid');
  if (!container) return;

  container.innerHTML = categoriesData.map(cat => `
    <div class="category-card-large" onclick="window.location.href='/skills?category=${cat.id}'">
      <div class="category-icon-large">${cat.icon}</div>
      <div class="category-info">
        <h3>${cat.name}</h3>
        <p class="category-desc">${cat.desc}</p>
        <span class="category-count">${cat.count} 个技能 →</span>
      </div>
    </div>
  `).join('');
}

document.addEventListener('DOMContentLoaded', renderCategories);

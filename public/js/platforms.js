// 平台页面脚本
const platformsData = [
  { id: 'openclaw', name: 'OpenClaw', icon: '🦞', count: 423, color: '#ff6b35', desc: 'OpenClaw官方技能市场' },
  { id: 'github', name: 'GitHub', icon: '🐙', count: 312, color: '#333', desc: 'GitHub开源技能仓库' },
  { id: 'coze', name: '扣子Coze', icon: '🤖', count: 287, color: '#4caf50', desc: '字节跳动Coze平台' },
  { id: 'dify', name: 'Dify', icon: '🔧', count: 89, color: '#2196f3', desc: 'Dify AI应用开发平台' },
  { id: 'langchain', name: 'LangChain', icon: '⛓️', count: 67, color: '#1e3a8a', desc: 'LangChain框架生态' },
  { id: 'autogen', name: 'AutoGen', icon: '👥', count: 45, color: '#10b981', desc: '微软AutoGen多代理框架' },
  { id: 'crewai', name: 'CrewAI', icon: '👨‍✈️', count: 34, color: '#f59e0b', desc: 'CrewAI代理协作框架' },
  { id: 'other', name: '其他平台', icon: '📦', count: 156, color: '#6b7280', desc: '其他各类平台技能' }
];

function renderPlatforms() {
  const container = document.getElementById('platformsGrid');
  if (!container) return;

  container.innerHTML = platformsData.map(platform => `
    <div class="platform-card-large" onclick="window.location.href='/skills?platform=${platform.id}'">
      <div class="platform-header" style="background: ${platform.color}">
        <span class="platform-icon-large">${platform.icon}</span>
        <h3>${platform.name}</h3>
      </div>
      <div class="platform-body">
        <p class="platform-desc">${platform.desc}</p>
        <div class="platform-stats">
          <span class="platform-count">${platform.count} 个技能</span>
          <span class="platform-arrow">→</span>
        </div>
      </div>
    </div>
  `).join('');
}

document.addEventListener('DOMContentLoaded', renderPlatforms);

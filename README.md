# 🦞 龙虾技能库 (Lobster Skills Hub)

> 全球最大的AI Agent技能聚合平台

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Skills](https://img.shields.io/badge/skills-1200+-orange.svg)](https://lobsterskills.com)
[![Platforms](https://img.shields.io/badge/platforms-8-green.svg)](https://lobsterskills.com/platforms)

## 🌟 项目简介

龙虾技能库是一个聚合多平台AI Agent技能的开源项目，旨在帮助用户发现、评估和使用最好的AI技能。

**支持平台：**
- 🦞 OpenClaw
- 🐙 GitHub
- 🤖 扣子Coze
- 🔧 Dify
- ⛓️ LangChain
- 👥 AutoGen
- 👨‍✈️ CrewAI
- 📦 其他平台

## 🚀 快速开始

### 本地开发

```bash
# 克隆项目
git clone https://github.com/lobsterskills/hub.git
cd lobster-skills-hub

# 启动本地服务器
cd public
python -m http.server 8080

# 访问 http://localhost:8080
```

### 部署到Vercel

```bash
# 安装Vercel CLI
npm i -g vercel

# 部署
vercel --prod
```

## 📁 项目结构

```
lobster-skills-hub/
├── public/                 # 静态资源
│   ├── index.html         # 首页
│   ├── css/
│   │   └── style.css      # 主样式
│   ├── js/
│   │   └── app.js         # 主应用脚本
│   ├── data/
│   │   └── skills.json    # 技能数据
│   └── images/            # 图片资源
├── docs/                  # 文档
│   ├── seo-strategy.md    # SEO策略
│   └── monetag-requirements.md  # 广告要求
├── scripts/               # 工具脚本
│   └── fetch-skills.js    # 技能抓取脚本
└── README.md
```

## 🎯 核心功能

- ✅ **技能聚合** - 汇集8大平台1200+技能
- ✅ **分类检索** - 12大分类，快速定位
- ✅ **安全警示** - 未经验证技能明确标注
- ✅ **一键安装** - 复制命令即可安装
- ✅ **评分系统** - 用户评分，质量参考
- ✅ **搜索功能** - 支持关键词搜索
- ✅ **响应式设计** - 完美适配移动端
- ✅ **SEO优化** - 结构化数据，利于收录
- ✅ **广告预留** - Monetag广告位已配置

## 🛡️ 安全提示

⚠️ **重要声明：**

本站聚合的技能来自第三方平台，**未经过独立安全验证**。使用前请注意：

1. 建议在隔离环境中测试
2. 仔细审查代码后再使用
3. 不要授权访问敏感数据
4. 关注安全警告标识

## 📊 数据更新

技能数据通过自动化脚本定期更新：

```bash
# 手动更新数据
node scripts/fetch-skills.js

# 定时更新（每天凌晨2点）
0 2 * * * cd /path/to/lobster-skills-hub && node scripts/fetch-skills.js
```

## 🎨 自定义主题

修改 `public/css/style.css` 中的CSS变量：

```css
:root {
  --primary: #ff6b35;        /* 主色调 */
  --secondary: #667eea;      /* 次色调 */
  --gradient-lobster: linear-gradient(135deg, #ff6b35 0%, #f093fb 100%);
}
```

## 📝 添加新技能

1. 编辑 `public/data/skills.json`
2. 添加技能对象到 `skills` 数组
3. 提交PR

技能对象格式：

```json
{
  "id": "unique-id",
  "name": "技能名称",
  "platform": "openclaw|github|coze|...",
  "category": "productivity|coding|...",
  "description": "技能描述",
  "tags": ["标签1", "标签2"],
  "downloads": 100,
  "rating": 4.5,
  "author": "作者名",
  "verified": false,
  "warning": "安全警告信息"
}
```

## 💰 广告配置

### Monetag集成

1. 注册 [Monetag](https://monetag.com) 账号
2. 添加网站 `lobsterskills.com`
3. 等待审核通过
4. 获取广告代码
5. 替换 `public/index.html` 中的广告占位符

广告位已预留：
- 顶部横幅 (728x90)
- 侧边栏 (300x250)
- 内容区 (728x90)
- 底部横幅 (728x90)

## 🔍 SEO优化

查看 [docs/seo-strategy.md](docs/seo-strategy.md) 了解详细的SEO策略。

关键优化点：
- ✅ 语义化HTML
- ✅ 结构化数据
- ✅ 网站地图
- ✅ 规范URL
- ✅ 移动适配
- ✅ 快速加载

## 🤝 贡献指南

欢迎提交PR！请遵循以下规范：

1. Fork项目
2. 创建分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送分支 (`git push origin feature/AmazingFeature`)
5. 创建PR

## 📄 许可证

[MIT](LICENSE) © 2026 龙虾技能库

## 📮 联系我们

- GitHub: [@lobsterskills](https://github.com/lobsterskills)
- Twitter: [@lobsterskills](https://twitter.com/lobsterskills)
- Email: contact@lobsterskills.com

---

<p align="center">
  <sub>Built with ❤️ by the Lobster Skills Team</sub>
</p>

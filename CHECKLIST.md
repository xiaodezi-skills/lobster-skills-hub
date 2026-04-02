# ✅ 部署检查清单

## 自动化完成 ✓

- [x] 网站开发完成
  - [x] 首页 (index.html)
  - [x] 技能列表页 (skills.html)
  - [x] 关于页面 (about.html)
  - [x] 隐私政策 (privacy.html)
  - [x] 服务条款 (terms.html)
  - [x] CSS样式
  - [x] JavaScript应用
  - [x] 技能数据
  - [x] SEO配置

- [x] Git仓库
  - [x] 初始化
  - [x] .gitignore
  - [x] 首次提交

- [x] 文档
  - [x] 部署指南 (DEPLOY-GUIDE.md)
  - [x] 快速开始 (QUICK-START.md)
  - [x] 部署脚本 (scripts/deploy.ps1)

---

## 需要手动完成

### 1. GitHub仓库 (5分钟)

- [ ] 访问 https://github.com/new
- [ ] 创建仓库 `lobster-skills-hub`
- [ ] 设置为 Public
- [ ] 运行 `scripts/deploy.ps1` 推送代码

### 2. Cloudflare Pages (5分钟)

- [ ] 访问 https://dash.cloudflare.com
- [ ] Pages → Create project
- [ ] Connect to Git
- [ ] 选择 `lobster-skills-hub` 仓库
- [ ] Build output directory: `public`
- [ ] 保存并部署

### 3. 域名绑定 (3分钟)

- [ ] 在Cloudflare Pages中添加自定义域名
- [ ] 配置DNS CNAME记录
- [ ] 等待SSL证书颁发

### 4. Monetag广告 (10分钟)

- [ ] 登录 https://monetag.com
- [ ] Sites → Add site
- [ ] 输入你的域名
- [ ] 等待审核通过
- [ ] 创建广告位
- [ ] 复制广告代码
- [ ] 替换 `public/index.html` 中的占位符
- [ ] 提交更新

### 5. 搜索引擎 (10分钟)

- [ ] Google Search Console
  - [ ] 添加网站
  - [ ] 验证所有权
  - [ ] 提交 sitemap.xml
- [ ] Bing Webmaster Tools
  - [ ] 添加网站
  - [ ] 验证所有权
  - [ ] 提交 sitemap
- [ ] 百度搜索资源平台
  - [ ] 添加网站
  - [ ] 验证所有权

---

## 验证清单

部署完成后检查：

- [ ] 网站能正常访问
- [ ] HTTPS证书有效
- [ ] 所有页面加载正常
- [ ] 移动端显示正常
- [ ] 广告位显示正常
- [ ] 搜索引擎已收录

---

## 预计总时间

| 步骤 | 时间 |
|------|------|
| GitHub仓库 | 5分钟 |
| Cloudflare Pages | 5分钟 |
| 域名绑定 | 3分钟 |
| Monetag广告 | 10分钟 |
| 搜索引擎 | 10分钟 |
| **总计** | **33分钟** |

---

## 完成后

- [ ] 查看 DEPLOY-GUIDE.md 详细说明
- [ ] 查看 docs/monetization-plan.md 盈利计划
- [ ] 开始监控收益

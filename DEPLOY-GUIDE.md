# 🚀 龙虾技能库 - 完整部署指南

> 本指南包含所有自动化步骤和手动操作说明

---

## ✅ 已完成（自动化）

### 1. 网站开发完成
- [x] 首页 (index.html) - SEO优化
- [x] 技能列表页 (skills.html)
- [x] 关于页面 (about.html)
- [x] 隐私政策 (privacy.html)
- [x] 服务条款 (terms.html)
- [x] CSS样式 (13KB)
- [x] JavaScript应用 (12KB)
- [x] 技能数据 (10KB)
- [x] 网站地图 (sitemap.xml)
- [x] 爬虫规则 (robots.txt)

### 2. Git仓库初始化
- [x] Git初始化
- [x] .gitignore配置
- [x] 首次提交 (commit: 4245d0a)

---

## 📋 需要你手动完成的步骤

### 步骤1: 创建GitHub仓库并推送代码 (5分钟)

#### 1.1 在GitHub创建仓库
1. 访问 https://github.com/new
2. 填写信息：
   - Repository name: `lobster-skills-hub`
   - Description: `AI Agent技能聚合平台`
   - 选择 `Public`
   - 勾选 `Add a README file`
3. 点击 `Create repository`

#### 1.2 推送本地代码
打开 PowerShell，执行：

```powershell
# 进入项目目录
cd C:\Users\ASUS\.stepclaw\workspace\projects\lobster-skills-hub

# 添加远程仓库（替换YOUR_USERNAME为你的GitHub用户名）
git remote add origin https://github.com/YOUR_USERNAME/lobster-skills-hub.git

# 推送代码
git branch -M main
git push -u origin main
```

如果遇到冲突：
```powershell
# 强制推送（首次）
git push -u origin main --force
```

---

### 步骤2: Cloudflare Pages部署 (5分钟)

#### 2.1 登录Cloudflare
1. 访问 https://dash.cloudflare.com
2. 登录你的账号（如果没有，注册一个）

#### 2.2 创建Pages项目
1. 左侧菜单点击 `Pages`
2. 点击 `Create a project`
3. 选择 `Connect to Git`
4. 点击 `Add account` 授权GitHub
5. 选择 `lobster-skills-hub` 仓库
6. 点击 `Begin setup`

#### 2.3 配置构建设置
填写以下信息：

| 设置项 | 值 |
|--------|-----|
| Project name | lobster-skills-hub |
| Production branch | main |
| Framework preset | None |
| Build command | （留空） |
| Build output directory | public |

点击 `Save and Deploy`

等待部署完成，会获得一个 `xxx.pages.dev` 的域名

---

### 步骤3: 绑定你的域名 (3分钟)

#### 3.1 添加自定义域名
1. 在Cloudflare Pages项目页面
2. 点击 `Custom domains` 标签
3. 点击 `Set up a custom domain`
4. 输入你的域名（如：lobsterskills.com）
5. 点击 `Continue`

#### 3.2 配置DNS
Cloudflare会提示你添加DNS记录：

**方法一：使用Cloudflare DNS（推荐）**
1. 在Cloudflare控制台，点击你的域名
2. 点击 `DNS` 标签
3. 添加记录：
   - Type: CNAME
   - Name: @
   - Target: 你的pages.dev域名（如：lobster-skills-hub.pages.dev）
   - TTL: Auto
   - Proxy status: 橙色云朵（已代理）

4. 再添加一条：
   - Type: CNAME
   - Name: www
   - Target: 你的pages.dev域名
   - TTL: Auto
   - Proxy status: 橙色云朵

**方法二：域名在其他平台**
如果域名不在Cloudflare，需要在域名管理平台添加CNAME记录指向你的pages.dev域名

#### 3.3 等待生效
- SSL证书自动颁发（通常几分钟到几小时）
- DNS传播（通常几分钟到24小时）

---

### 步骤4: Monetag广告接入 (10分钟)

#### 4.1 获取广告代码
1. 登录 https://monetag.com
2. 点击左侧 `Sites`
3. 点击 `Add site`
4. 输入你的域名（如：https://lobsterskills.com）
5. 选择类别：`Technology`
6. 点击 `Add`

等待审核通过（通常24-48小时）

#### 4.2 创建广告位
审核通过后：
1. 点击 `Ad codes`
2. 点击 `New ad code`
3. 选择广告格式：
   - 顶部横幅：Display Banner 728x90
   - 侧边栏：Display Banner 300x250
   - 内容区：Display Banner 728x90
4. 复制生成的代码

#### 4.3 插入广告代码
编辑 `public/index.html`，替换广告占位符：

找到以下代码（约第45行）：
```html
<!-- 广告位：顶部横幅 728x90 -->
<div class="ad-placeholder" id="ad-top">
  <span>📢 广告位 - 728x90</span>
</div>
```

替换为Monetag代码：
```html
<!-- Monetag广告：顶部横幅 -->
<script src="//你的-monetag-代码.js"></script>
```

对其他广告位重复此操作：
- `ad-sidebar` - 侧边栏广告
- `ad-content-1` - 内容区广告1
- `ad-content-2` - 内容区广告2
- `ad-bottom` - 底部广告

#### 4.4 提交更新
```powershell
git add .
git commit -m "Add Monetag ads"
git push
```

Cloudflare会自动重新部署

---

### 步骤5: 搜索引擎提交 (10分钟)

#### 5.1 Google搜索控制台
1. 访问 https://search.google.com/search-console
2. 点击 `添加资源` → `网址前缀`
3. 输入你的域名（如：https://lobsterskills.com）
4. 验证方式选择 `HTML标记`
5. 复制验证代码（如：`<meta name="google-site-verification" content="xxx" />`）
6. 粘贴到 `public/index.html` 的 `<head>` 中
7. 提交验证

#### 5.2 提交网站地图
1. 在Google Search Console中，点击 `网站地图`
2. 输入：`sitemap.xml`
3. 点击 `提交`

#### 5.3 Bing网站管理员工具
1. 访问 https://www.bing.com/webmasters
2. 登录Microsoft账号
3. 添加网站
4. 验证方式选择 `HTML文件` 或 `Meta标记`
5. 提交网站地图

#### 5.4 百度搜索资源平台
1. 访问 https://ziyuan.baidu.com
2. 登录百度账号
3. 添加网站
4. 验证网站所有权
5. 提交网站地图

---

### 步骤6: 更新代码并推送 (3分钟)

完成上述修改后：

```powershell
cd C:\Users\ASUS\.stepclaw\workspace\projects\lobster-skills-hub

git add .
git commit -m "Add verification codes and optimize SEO"
git push
```

Cloudflare会自动重新部署（约1-2分钟）

---

## 📊 验证部署成功

### 检查清单

- [ ] 访问 https://你的域名 能正常打开
- [ ] 访问 https://你的域名/skills 技能列表页正常
- [ ] 页面加载速度 < 3秒
- [ ] 移动端显示正常
- [ ] 广告位显示正常（审核通过后）
- [ ] HTTPS证书有效

### 测试工具

| 工具 | 用途 | 链接 |
|------|------|------|
| PageSpeed Insights | 速度测试 | https://pagespeed.web.dev |
| GTmetrix | 性能分析 | https://gtmetrix.com |
| Mobile-Friendly Test | 移动端测试 | https://search.google.com/test/mobile-friendly |
| SSL Labs | SSL检测 | https://www.ssllabs.com/ssltest |

---

## 🔄 后续维护

### 自动更新技能数据

```powershell
# 手动更新
node scripts/fetch-skills.js

# 设置定时任务（Windows）
# 打开任务计划程序，创建新任务
# 触发器：每天凌晨2点
# 操作：运行 node scripts/fetch-skills.js
```

### 监控收益

1. 登录 Monetag 后台查看收益
2. 使用 Google Analytics 监控流量
3. 使用 Cloudflare Analytics 查看访问数据

---

## 🆘 常见问题

### Q: 推送代码时提示权限错误
A: 检查GitHub仓库是否设置为Public，或配置SSH密钥

### Q: Cloudflare部署失败
A: 检查构建设置：
- Build command 留空
- Build output directory 填 `public`

### Q: 域名无法访问
A: 检查DNS记录：
- CNAME记录指向正确
- 等待DNS传播（最长24小时）

### Q: Monetag广告不显示
A: 可能原因：
- 审核未通过
- 代码插入位置错误
- 广告被浏览器拦截

### Q: 如何更新网站内容
A: 修改本地文件 → git add → git commit → git push，Cloudflare自动部署

---

## 📞 需要帮助？

- 查看 `QUICK-START.md` 快速参考
- 查看 `docs/deployment-strategy.md` 详细策略
- 查看 `docs/monetization-plan.md` 盈利计划

---

**预计总耗时：30-40分钟**

完成后你的网站就可以开始产生广告收益了！

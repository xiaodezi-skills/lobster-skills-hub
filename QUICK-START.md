# 🚀 快速开始指南

## 5分钟部署你的第一个网站

### 步骤1: 准备GitHub仓库 (1分钟)

```bash
# 在GitHub创建新仓库 (如: lobster-skills-hub)
# 然后本地执行:

cd lobster-skills-hub/public
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_NAME/lobster-skills-hub.git
git push -u origin main
```

### 步骤2: 部署到Cloudflare Pages (2分钟)

1. 访问 [dash.cloudflare.com](https://dash.cloudflare.com)
2. 登录/注册账号 (免费)
3. 点击左侧菜单 "Pages"
4. 点击 "Create a project"
5. 选择 "Connect to Git"
6. 授权GitHub，选择你的仓库
7. 构建设置:
   - Framework preset: `None`
   - Build command: (留空)
   - Build output directory: `public`
8. 点击 "Save and Deploy"

✅ 部署完成！获得 `xxx.pages.dev` 域名

### 步骤3: 绑定自定义域名 (2分钟)

1. 在Cloudflare Pages项目页面
2. 点击 "Custom domains" 标签
3. 点击 "Set up a custom domain"
4. 输入你的域名 (如: lobsterskills.com)
5. 按提示添加DNS记录
6. 等待SSL证书自动颁发 (通常几分钟)

✅ 完成！访问你的域名

---

## 💰 申请Monetag广告 (10分钟)

### 注册账号

1. 访问 [monetag.com](https://monetag.com)
2. 点击 "Sign Up" 注册
3. 填写信息，选择 "Publisher"
4. 验证邮箱

### 添加网站

1. 登录后点击 "Sites" → "Add Site"
2. 输入你的网站URL
3. 选择类别: "Technology"
4. 提交审核

### 获取广告代码

审核通过后 (通常24-48小时):

1. 进入 "Ad Codes"
2. 创建新的广告位
3. 选择格式 (推荐: Display Banner)
4. 复制广告代码

### 插入广告代码

编辑 `public/index.html`，替换广告占位符:

```html
<!-- 替换前 -->
<div class="ad-placeholder">
  <span>📢 广告位 - 728x90</span>
</div>

<!-- 替换后 -->
<script src="//your-monetag-code.js"></script>
```

---

## 📊 监控收益

### Monetag后台

- 实时收入统计
- 流量来源分析
- 广告效果报告

### 推荐工具

| 工具 | 用途 | 成本 |
|------|------|------|
| Google Analytics | 流量分析 | 免费 |
| Google Search Console | SEO监控 | 免费 |
| Cloudflare Analytics | 性能监控 | 免费 |

---

## 🎯 下一步行动

### 本周完成

- [ ] 部署网站上线
- [ ] 申请Monetag账号
- [ ] 提交搜索引擎收录
  - [Google](https://search.google.com/search-console)
  - [Bing](https://www.bing.com/webmasters)
  - [百度](https://ziyuan.baidu.com)

### 下周完成

- [ ] 填充更多技能数据
- [ ] 优化SEO关键词
- [ ] 社交媒体推广
- [ ] 监控广告收益

### 本月目标

- [ ] 日流量达到 1000+
- [ ] 月广告收入 ¥200+
- [ ] 开始开发第二个站点

---

## 🆘 常见问题

### Q: 域名在哪里买最便宜?
A: 推荐:
- 阿里云: ¥60-80/年 (.com)
- 腾讯云: ¥60-80/年 (.com)
- Namecheap: $10-15/年

### Q: 需要备案吗?
A: 使用Cloudflare Pages + 海外域名，无需备案

### Q: 广告审核不通过怎么办?
A: 确保:
- 网站内容原创
- 有隐私政策页面
- 无违规内容
- 流量真实

### Q: 如何快速获取流量?
A: 方法:
1. SEO优化 (长期)
2. Reddit/论坛分享 (短期)
3. 社交媒体推广
4. 内容营销

---

## 📞 获取帮助

- GitHub Issues: [提交问题](https://github.com/yourname/lobster-skills-hub/issues)
- Email: your-email@example.com
- Discord: [加入社区](https://discord.gg/xxx)

---

**🎉 祝你建站成功，收益满满！**

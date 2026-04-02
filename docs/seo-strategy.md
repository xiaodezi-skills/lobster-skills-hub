# 龙虾技能库 - SEO优化策略

## 1. 关键词策略

### 核心关键词
- AI技能
- Agent技能
- OpenClaw技能
- AI工具库
- 自动化技能
- 扣子Coze技能
- GitHub AI技能

### 长尾关键词
- OpenClaw技能推荐
- AI Agent技能下载
- 免费AI工具合集
- 自动化工作流技能
- 小红书AI内容生成器
- PDF批量处理AI技能
- 代码审查AI助手

### 地域关键词
- 中文AI技能库
- 国内AI工具平台
- 中国Agent技能市场

## 2. 页面SEO优化

### 首页 (index.html)
```html
<title>龙虾技能库 - 全球最大的AI Agent技能聚合平台</title>
<meta name="description" content="聚合OpenClaw、GitHub、扣子Coze等平台的AI Agent技能，提供安全验证、分类检索、一键安装服务。发现、分享、使用最好的AI技能。">
<meta name="keywords" content="AI技能,Agent技能,OpenClaw,扣子Coze,GitHub Skills,AI工具,自动化技能">
```

### 技能列表页 (/skills)
- 动态生成标题："{分类名}技能 - 龙虾技能库"
- 分页URL：/skills?page=2&category=productivity
- 规范标签避免重复内容

### 技能详情页 (/skill/{id})
```html
<title>{技能名} - {平台} | 龙虾技能库</title>
<meta name="description" content="{技能描述}">
```

## 3. 技术SEO

### URL结构
- 简洁、语义化
- 使用连字符分隔
- 避免动态参数

示例：
- ✅ /skills/pdf-batch-processor
- ✅ /categories/productivity
- ✅ /platforms/openclaw
- ❌ /skill.php?id=123

### 网站地图
创建 sitemap.xml：
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://lobsterskills.com/</loc>
    <lastmod>2026-04-02</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <!-- 动态生成技能页面 -->
</urlset>
```

### Robots.txt
```
User-agent: *
Allow: /
Allow: /skills/
Allow: /categories/
Allow: /platforms/
Disallow: /admin/
Disallow: /api/

Sitemap: https://lobsterskills.com/sitemap.xml
```

## 4. 内容SEO

### 内容策略
1. **技能描述优化**
   - 150-200字详细描述
   - 包含核心关键词
   - 突出功能特点

2. **标签系统**
   - 每个技能3-5个标签
   - 标签页可索引
   - 标签云导航

3. **分类页面**
   - 每个分类独立页面
   - 分类描述+技能列表
   - 相关分类推荐

### 内容更新频率
- 每日新增技能：5-10个
- 每周更新分类：1-2个
- 每月发布报告：1篇

## 5. 结构化数据

### 网站结构化数据
```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "龙虾技能库",
  "url": "https://lobsterskills.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://lobsterskills.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
```

### 技能结构化数据
```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "PDF批量处理器",
  "applicationCategory": "Productivity",
  "operatingSystem": "Any",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "CNY"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "156"
  }
}
```

## 6. 性能优化

### 加载速度
- 目标：首屏 < 1.5秒
- 完整加载 < 3秒

### 优化措施
1. **图片优化**
   - WebP格式
   - 懒加载
   - 响应式图片

2. **代码优化**
   - CSS/JS压缩
   - 代码分割
   - Tree shaking

3. **缓存策略**
   - CDN加速
   - 浏览器缓存
   - Service Worker

## 7. 外链建设

### 高质量外链来源
1. GitHub README链接
2. 技术博客推荐
3. 开发者社区分享
4. 社交媒体推广
5. 行业目录提交

### 内链策略
- 相关技能推荐
- 分类交叉链接
- 面包屑导航
- 标签云链接

## 8. 社交媒体优化

### Open Graph标签
```html
<meta property="og:title" content="龙虾技能库 - 全球最大的AI Agent技能聚合平台">
<meta property="og:description" content="聚合OpenClaw、GitHub、扣子Coze等平台的AI Agent技能">
<meta property="og:image" content="https://lobsterskills.com/og-image.jpg">
<meta property="og:url" content="https://lobsterskills.com">
```

### Twitter Card
```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="龙虾技能库">
<meta name="twitter:description" content="发现最好的AI Agent技能">
<meta name="twitter:image" content="https://lobsterskills.com/twitter-card.jpg">
```

## 9. 移动端优化

### 响应式设计
- 移动优先
- 触控友好
- 快速加载

### AMP页面
- 技能详情页AMP版本
- 更快的移动体验
- 更好的搜索排名

## 10. 监控与分析

### 关键指标
- 有机搜索流量
- 关键词排名
- 页面加载速度
- 跳出率
- 平均停留时间

### 工具
- Google Search Console
- Google Analytics
- 百度统计
- 站长工具

## 11. 本地化SEO

### 中文优化
- 简体中文内容
- 中文关键词
- 百度收录

### 多语言支持（未来）
- 英文版本
- 日文版本
- 韩文版本

## 12. 安全与信任

### HTTPS
- 全站SSL
- HSTS头部
- 安全证书

### 隐私政策
- GDPR合规
- 隐私政策页面
- Cookie同意

## 执行计划

### 第一阶段（上线前）
- [ ] 基础SEO设置
- [ ] 结构化数据
- [ ] 网站地图
- [ ] 性能优化

### 第二阶段（上线后1个月）
- [ ] 内容优化
- [ ] 外链建设
- [ ] 社交媒体
- [ ] 数据分析

### 第三阶段（持续）
- [ ] 内容更新
- [ ] 排名监控
- [ ] 竞品分析
- [ ] 策略调整

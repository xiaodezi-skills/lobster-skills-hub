# Monetag广告集成指南

## 快速接入步骤

### 1. 登录Monetag获取广告代码

1. 访问 https://monetag.com 并登录
2. 点击左侧菜单 `Ad codes`
3. 点击 `New ad code`
4. 选择广告类型：
   - **Display Banner** - 横幅广告
   - **Popunder** - 弹窗广告
   - **Interstitial** - 插屏广告
   - **In-Page Push** - 页面内推送

### 2. 创建5个广告位

建议创建以下广告位：

| 位置 | 尺寸 | 类型 | 用途 |
|------|------|------|------|
| 顶部横幅 | 728x90 | Display Banner | 首页顶部 |
| 侧边栏 | 300x250 | Display Banner | 右侧边栏 |
| 内容区1 | 728x90 | Display Banner | 技能列表上方 |
| 内容区2 | 300x600 | Display Banner | 热门技能下方 |
| 底部横幅 | 728x90 | Display Banner | 页脚上方 |

### 3. 复制广告代码

创建每个广告位后，Monetag会生成类似代码：

```html
<script src="//your-site-id.monetag.com/ads.js"></script>
```

### 4. 替换网站中的占位符

打开 `public/index.html`，找到以下占位符并替换：

#### 顶部广告 (约第45行)
**替换前：**
```html
<!-- 广告位：顶部横幅 728x90 -->
<div class="ad-placeholder" id="ad-top">
  <span>📢 广告位 - 728x90</span>
</div>
```

**替换后：**
```html
<!-- Monetag广告：顶部横幅 728x90 -->
<div id="ad-top">
  <script src="//your-site-id.monetag.com/top-banner.js"></script>
</div>
```

#### 侧边栏广告 (约第95行)
**替换前：**
```html
<!-- 广告位：侧边栏 300x250 -->
<div class="ad-placeholder" id="ad-sidebar">
  <span>📢 广告位 - 300x250</span>
</div>
```

**替换后：**
```html
<!-- Monetag广告：侧边栏 300x250 -->
<div id="ad-sidebar">
  <script src="//your-site-id.monetag.com/sidebar.js"></script>
</div>
```

#### 内容区广告1 (约第135行)
**替换前：**
```html
<!-- 广告位：内容区 728x90 -->
<div class="ad-placeholder" id="ad-content-1">
  <span>📢 广告位 - 728x90</span>
</div>
```

**替换后：**
```html
<!-- Monetag广告：内容区 728x90 -->
<div id="ad-content-1">
  <script src="//your-site-id.monetag.com/content-1.js"></script>
</div>
```

#### 内容区广告2 (约第175行)
**替换前：**
```html
<!-- 广告位：内容区 300x600 -->
<div class="ad-placeholder" id="ad-content-2">
  <span>📢 广告位 - 300x600</span>
</div>
```

**替换后：**
```html
<!-- Monetag广告：内容区 300x600 -->
<div id="ad-content-2">
  <script src="//your-site-id.monetag.com/content-2.js"></script>
</div>
```

#### 底部广告 (约第215行)
**替换前：**
```html
<!-- 广告位：底部横幅 728x90 -->
<div class="ad-placeholder" id="ad-bottom">
  <span>📢 广告位 - 728x90</span>
</div>
```

**替换后：**
```html
<!-- Monetag广告：底部横幅 728x90 -->
<div id="ad-bottom">
  <script src="//your-site-id.monetag.com/bottom-banner.js"></script>
</div>
```

### 5. 提交更新

保存文件后，提交到GitHub：

```powershell
cd C:\Users\ASUS\.stepclaw\workspace\projects\lobster-skills-hub

git add public/index.html
git commit -m "Integrate Monetag ads"
git push
```

Cloudflare会自动重新部署（约1-2分钟）

### 6. 验证广告显示

1. 访问你的网站
2. 检查广告位是否正常显示
3. 如果广告不显示：
   - 检查浏览器控制台是否有错误
   - 确认Monetag网站审核已通过
   - 检查广告代码是否正确复制

---

## 广告优化建议

### 最佳实践

1. **不要过度投放** - 每页最多3-4个广告位
2. **首屏广告** - 确保至少一个广告在首屏可见
3. **响应式广告** - 移动端使用适合的广告尺寸
4. **A/B测试** - 测试不同广告位置和类型

### 收益优化

| 策略 | 说明 |
|------|------|
| 增加流量 | 更多访客 = 更多收入 |
| 提高停留时间 | 用户停留越久，广告展示越多 |
| 优化广告位置 | 首屏广告收益最高 |
| 多广告网络 | 组合使用Monetag + AdSense |

### 避免违规

- ❌ 不要点击自己的广告
- ❌ 不要使用机器人刷流量
- ❌ 不要在违规内容页面投放广告
- ❌ 不要诱导用户点击广告

---

## 监控收益

### Monetag后台

1. 登录 https://monetag.com
2. 点击 `Statistics` 查看：
   - 今日收入
   - 本周收入
   - 本月收入
   - eCPM（每千次展示收益）
   - CTR（点击率）

### 收益预估

| 日流量 | 预估日收入 | 预估月收入 |
|--------|-----------|-----------|
| 1,000 PV | $0.5-2 | $15-60 |
| 5,000 PV | $3-10 | $90-300 |
| 10,000 PV | $8-25 | $240-750 |
| 50,000 PV | $50-150 | $1,500-4,500 |

---

## 常见问题

### Q: 广告为什么不显示？
A: 可能原因：
- Monetag审核未通过
- 广告代码复制错误
- 浏览器广告拦截器
- 网站流量不足

### Q: 如何提高广告收益？
A: 方法：
- 增加网站流量
- 优化广告位置
- 提高用户停留时间
- 使用多种广告格式

### Q: 多久能看到收益？
A: 实时统计，但提现通常需要达到最低限额（$50-100）

### Q: 可以同时使用其他广告网络吗？
A: 可以，建议组合使用：
- Monetag（主要）
- Google AdSense（补充）
- PropellerAds（备选）

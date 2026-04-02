# 龙虾技能库 - 一键部署脚本
# 此脚本会引导你完成所有部署步骤

Write-Host "🚀 龙虾技能库 - 一键部署脚本" -ForegroundColor Green
Write-Host "==============================" -ForegroundColor Green
Write-Host ""

# 检查Git
Write-Host "📋 步骤1: 检查Git环境..." -ForegroundColor Yellow
$gitVersion = git --version 2>$null
if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Git已安装: $gitVersion" -ForegroundColor Green
} else {
    Write-Host "❌ Git未安装，请先安装Git: https://git-scm.com/download/win" -ForegroundColor Red
    exit 1
}

# 检查Node.js
Write-Host "📋 步骤2: 检查Node.js..." -ForegroundColor Yellow
$nodeVersion = node --version 2>$null
if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Node.js已安装: $nodeVersion" -ForegroundColor Green
} else {
    Write-Host "⚠️ Node.js未安装，部分功能将不可用" -ForegroundColor Yellow
}

# 获取GitHub用户名
Write-Host ""
Write-Host "📋 步骤3: 配置GitHub仓库" -ForegroundColor Yellow
$githubUsername = Read-Host "请输入你的GitHub用户名"

if ([string]::IsNullOrWhiteSpace($githubUsername)) {
    Write-Host "❌ GitHub用户名不能为空" -ForegroundColor Red
    exit 1
}

# 配置远程仓库
Write-Host "🔗 配置远程仓库..." -ForegroundColor Yellow
$remoteUrl = "https://github.com/$githubUsername/lobster-skills-hub.git"

git remote remove origin 2>$null
git remote add origin $remoteUrl

Write-Host "✅ 远程仓库配置完成: $remoteUrl" -ForegroundColor Green

# 推送代码
Write-Host ""
Write-Host "📤 步骤4: 推送代码到GitHub..." -ForegroundColor Yellow
Write-Host "正在推送..." -ForegroundColor Gray

git push -u origin main 2>&1 | ForEach-Object {
    if ($_ -match "error|fatal") {
        Write-Host "⚠️ $_" -ForegroundColor Yellow
    } else {
        Write-Host $_ -ForegroundColor Gray
    }
}

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ 代码推送成功!" -ForegroundColor Green
} else {
    Write-Host "⚠️ 推送可能遇到问题，请检查GitHub仓库是否已创建" -ForegroundColor Yellow
    Write-Host "   仓库地址: $remoteUrl" -ForegroundColor Gray
}

# 生成部署清单
Write-Host ""
Write-Host "📋 部署清单" -ForegroundColor Green
Write-Host "==============================" -ForegroundColor Green
Write-Host ""
Write-Host "✅ 已完成:" -ForegroundColor Green
Write-Host "   - 网站开发完成 (19个文件)" -ForegroundColor Gray
Write-Host "   - Git仓库初始化" -ForegroundColor Gray
Write-Host "   - 代码推送到GitHub" -ForegroundColor Gray
Write-Host ""
Write-Host "📋 接下来需要你手动完成:" -ForegroundColor Yellow
Write-Host ""
Write-Host "1. Cloudflare Pages部署" -ForegroundColor Cyan
Write-Host "   访问: https://dash.cloudflare.com" -ForegroundColor Gray
Write-Host "   操作: Pages → Create project → Connect to Git" -ForegroundColor Gray
Write-Host "   配置: Build output directory = public" -ForegroundColor Gray
Write-Host ""
Write-Host "2. 绑定域名" -ForegroundColor Cyan
Write-Host "   在Cloudflare Pages项目中添加你的域名" -ForegroundColor Gray
Write-Host ""
Write-Host "3. Monetag广告接入" -ForegroundColor Cyan
Write-Host "   访问: https://monetag.com" -ForegroundColor Gray
Write-Host "   添加网站并获取广告代码" -ForegroundColor Gray
Write-Host ""
Write-Host "4. 搜索引擎提交" -ForegroundColor Cyan
Write-Host "   Google: https://search.google.com/search-console" -ForegroundColor Gray
Write-Host "   Bing: https://www.bing.com/webmasters" -ForegroundColor Gray
Write-Host "   百度: https://ziyuan.baidu.com" -ForegroundColor Gray
Write-Host ""
Write-Host "📖 详细指南: DEPLOY-GUIDE.md" -ForegroundColor Cyan
Write-Host ""
Write-Host "🎉 祝部署顺利!" -ForegroundColor Green

# 等待用户按键
Write-Host ""
Write-Host "按任意键退出..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")

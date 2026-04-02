@echo off
chcp 65001 >nul
echo 🚀 龙虾技能库 - GitHub仓库设置助手
echo =================================
echo.

set /p username="请输入你的GitHub用户名: "

if "%username%"=="" (
    echo ❌ 用户名不能为空
    pause
    exit /b 1
)

echo.
echo 📋 请按以下步骤操作:
echo.
echo 1. 访问: https://github.com/new
echo 2. 填写信息:
echo    - Repository name: lobster-skills-hub
echo    - Description: AI Agent技能聚合平台
echo    - 选择 Public
echo    - 勾选 Add a README file
echo 3. 点击 Create repository
echo.
pause

echo.
echo 🔗 配置远程仓库...
cd /d C:\Users\ASUS\.stepclaw\workspace\projects\lobster-skills-hub
git remote remove origin 2>nul
git remote add origin https://github.com/%username%/lobster-skills-hub.git

echo ✅ 远程仓库配置完成
echo.
echo 📤 推送代码到GitHub...
git push -u origin main

if %errorlevel% == 0 (
    echo.
    echo ✅ 代码推送成功!
    echo 🌐 仓库地址: https://github.com/%username%/lobster-skills-hub
) else (
    echo.
    echo ⚠️ 推送遇到问题
    echo 请确认GitHub仓库已创建
)

echo.
pause

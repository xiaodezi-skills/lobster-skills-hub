@echo off
chcp 65001 >nul
echo 🚀 上传到GitHub - 一键脚本
echo =========================
echo.

set /p token="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 "

if "%token%"=="" (
    echo ❌ Token不能为空
    echo.
    echo 如何获取Token:
    echo 1. 访问 https://github.com/settings/tokens
    echo 2. 点击 Generate new token (classic)
    echo 3. 勾选 repo 权限
    echo 4. 复制生成的token
    pause
    exit /b 1
)

cd /d C:\Users\ASUS\.stepclaw\workspace\projects\lobster-skills-hub

echo.
echo 🔗 配置远程仓库...
git remote remove origin 2>nul
git remote add origin https://%token%@github.com/xiaodezi-skills/lobster-skills-hub.git

echo.
echo 📤 推送代码到GitHub...
git push -u origin main --force

if %errorlevel% == 0 (
    echo.
    echo ✅ 上传成功！
    echo 🌐 访问: https://github.com/xiaodezi-skills/lobster-skills-hub
) else (
    echo.
    echo ❌ 上传失败
    echo 请检查token是否正确
)

echo.
pause

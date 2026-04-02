# GitHub推送指南

## 问题诊断

Git推送时出现 `repository not found` 或需要身份验证。

## 解决方案

### 方法1：使用GitHub Desktop（推荐，最简单）

1. 下载安装 GitHub Desktop: https://desktop.github.com
2. 登录你的GitHub账号
3. 点击 `File` → `Add local repository`
4. 选择文件夹: `C:\Users\ASUS\.stepclaw\workspace\projects\lobster-skills-hub`
5. 点击 `Publish repository`
6. 选择 `xiaodezi-skills/lobster-skills-hub`
7. 点击 `Publish`

### 方法2：使用Personal Access Token

#### 步骤1：创建Token

1. 访问 https://github.com/settings/tokens
2. 点击 `Generate new token` → `Generate new token (classic)`
3. 填写Note: `Lobster Skills Deploy`
4. 选择有效期: `No expiration`
5. 勾选权限:
   - ✅ repo (完整仓库访问)
6. 点击 `Generate token`
7. **复制生成的token**（只显示一次！）

#### 步骤2：使用Token推送

```powershell
cd C:\Users\ASUS\.stepclaw\workspace\projects\lobster-skills-hub

# 配置远程仓库（使用token）
git remote remove origin
git remote add origin https://YOUR_TOKEN@github.com/xiaodezi-skills/lobster-skills-hub.git

# 推送代码
git push -u origin main --force
```

将 `YOUR_TOKEN` 替换为你刚才复制的token。

### 方法3：使用SSH密钥

#### 步骤1：生成SSH密钥

```powershell
# 生成密钥
ssh-keygen -t ed25519 -C "your-email@example.com"

# 按3次回车使用默认设置
```

#### 步骤2：添加公钥到GitHub

1. 复制公钥内容:
```powershell
cat ~/.ssh/id_ed25519.pub | clip
```

2. 访问 https://github.com/settings/keys
3. 点击 `New SSH key`
4. Title: `My Computer`
5. Key: 粘贴刚才复制的内容
6. 点击 `Add SSH key`

#### 步骤3：使用SSH推送

```powershell
cd C:\Users\ASUS\.stepclaw\workspace\projects\lobster-skills-hub

# 配置远程仓库（使用SSH）
git remote remove origin
git remote add origin git@github.com:xiaodezi-skills/lobster-skills-hub.git

# 推送代码
git push -u origin main --force
```

## 验证推送成功

推送成功后，访问：
https://github.com/xiaodezi-skills/lobster-skills-hub

应该能看到所有文件。

## 下一步

推送成功后，继续按 `DEPLOY-GUIDE.md` 完成Cloudflare部署。

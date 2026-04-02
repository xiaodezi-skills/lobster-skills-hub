# 上传代码到GitHub的三种方法

## 方法1：使用GitHub网页上传（最简单，无需命令行）

### 步骤1：打包本地文件

```powershell
cd C:\Users\ASUS\.stepclaw\workspace\projects\lobster-skills-hub

# 创建zip压缩包
Compress-Archive -Path public,docs,scripts,*.md,.gitignore -DestinationPath lobster-skills-hub.zip -Force
```

### 步骤2：在GitHub网页上传

1. 访问 https://github.com/xiaodezi-skills/lobster-skills-hub
2. 点击 "Add file" → "Upload files"
3. 拖拽或选择刚才创建的 `lobster-skills-hub.zip`
4. 填写提交信息："Add website files"
5. 点击 "Commit changes"

### 步骤3：解压（在GitHub上）

由于GitHub不支持直接解压zip，你需要：

1. 下载并安装 GitHub Desktop: https://desktop.github.com
2. 克隆仓库到本地
3. 解压zip文件到仓库目录
4. 提交推送

---

## 方法2：使用GitHub Desktop（推荐）

### 步骤1：下载安装

1. 访问 https://desktop.github.com
2. 下载并安装
3. 登录你的GitHub账号

### 步骤2：克隆仓库

1. 打开 GitHub Desktop
2. 点击 "File" → "Clone repository"
3. 选择 "xiaodezi-skills/lobster-skills-hub"
4. 选择本地路径（如：C:\Users\ASUS\GitHub\lobster-skills-hub）
5. 点击 "Clone"

### 步骤3：复制文件

1. 打开文件资源管理器
2. 进入本地仓库目录
3. 把 `C:\Users\ASUS\.stepclaw\workspace\projects\lobster-skills-hub` 下的所有文件复制过去
4. 覆盖现有的 README.md

### 步骤4：提交推送

1. 回到 GitHub Desktop
2. 你会看到所有变更的文件
3. 填写提交信息："Initial commit with website files"
4. 点击 "Commit to main"
5. 点击 "Push origin"

---

## 方法3：使用命令行 + Personal Access Token

### 步骤1：创建Token

1. 访问 https://github.com/settings/tokens
2. 点击 "Generate new token (classic)"
3. Note: `Deploy Lobster Skills`
4. Expiration: `No expiration`
5. 勾选 `repo` 权限
6. 点击 "Generate token"
7. **复制token**（只显示一次！）

### 步骤2：配置Git使用Token

```powershell
cd C:\Users\ASUS\.stepclaw\workspace\projects\lobster-skills-hub

# 设置远程仓库（使用token）
# 将 YOUR_TOKEN 替换为你复制的token
git remote remove origin
git remote add origin https://YOUR_TOKEN@github.com/xiaodezi-skills/lobster-skills-hub.git

# 推送代码
git push -u origin main --force
```

---

## 验证上传成功

上传成功后，访问：
https://github.com/xiaodezi-skills/lobster-skills-hub

应该能看到所有文件：
- public/
- docs/
- scripts/
- README.md
- 等等

---

## 下一步

上传成功后，继续按 `DEPLOY-GUIDE.md` 完成Cloudflare Pages部署。

#!/bin/bash
# 快速创建新站点脚本

echo "🚀 网站工厂 - 快速创建新站点"
echo "=============================="

# 读取用户输入
read -p "请输入站点名称 (如: AI工具库): " SITE_NAME
read -p "请输入域名 (如: aitools-hub.com): " DOMAIN
read -p "请输入主题色 (如: #3b82f6): " THEME_COLOR
read -p "请输入Logo表情 (如: 🛠️): " LOGO
read -p "请输入站点描述: " DESCRIPTION

# 生成站点ID
SITE_ID=$(echo "$SITE_NAME" | tr '[:upper:]' '[:lower:]' | tr ' ' '-')

echo ""
echo "📋 站点信息确认:"
echo "  名称: $SITE_NAME"
echo "  ID: $SITE_ID"
echo "  域名: $DOMAIN"
echo "  主题色: $THEME_COLOR"
echo "  Logo: $LOGO"
echo ""

read -p "确认创建? (y/n): " CONFIRM

if [ "$CONFIRM" != "y" ]; then
    echo "❌ 已取消"
    exit 1
fi

# 创建目录
echo "📁 创建站点目录..."
mkdir -p "sites/$SITE_ID"

# 复制模板
echo "📄 复制模板文件..."
cp -r template/public "sites/$SITE_ID/"
cp -r template/scripts "sites/$SITE_ID/"

# 生成配置文件
echo "⚙️ 生成配置文件..."
cat > "sites/$SITE_ID/site.config.js" << EOF
module.exports = {
  name: '$SITE_NAME',
  domain: '$DOMAIN',
  description: '$DESCRIPTION',
  theme: {
    primary: '$THEME_COLOR',
    logo: '$LOGO',
    name: '$SITE_NAME'
  },
  ads: {
    monetag: {
      enabled: true,
      siteId: '' // 申请后填写
    }
  },
  seo: {
    title: '$SITE_NAME - 发现最好的AI工具',
    description: '$DESCRIPTION',
    keywords: 'AI工具,Agent技能,自动化工具'
  }
};
EOF

# 替换模板中的占位符
echo "🔧 替换模板变量..."
sed -i "s/{{SITE_NAME}}/$SITE_NAME/g" sites/$SITE_ID/public/index.html
sed -i "s/{{THEME_COLOR}}/$THEME_COLOR/g" sites/$SITE_ID/public/css/style.css
sed -i "s/{{LOGO}}/$LOGO/g" sites/$SITE_ID/public/index.html

# 创建GitHub Actions工作流
echo "🔨 创建CI/CD配置..."
mkdir -p "sites/$SITE_ID/.github/workflows"
cat > "sites/$SITE_ID/.github/workflows/deploy.yml" << EOF
name: Deploy to Cloudflare Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Deploy to Cloudflare Pages
        uses: cloudflare/pages-action@v1
        with:
          apiToken: \${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: \${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          projectName: $SITE_ID
          directory: public
EOF

# 创建README
cat > "sites/$SITE_ID/README.md" << EOF
# $SITE_NAME

$SITE_NAME - $DESCRIPTION

## 部署

\`\`\`bash
# 部署到Cloudflare Pages
wrangler pages deploy public --project-name="$SITE_ID"
\`\`\`

## 域名

- 生产环境: https://$DOMAIN
- 预览环境: https://$SITE_ID.pages.dev
EOF

echo ""
echo "✅ 站点创建完成!"
echo ""
echo "📂 站点位置: sites/$SITE_ID"
echo ""
echo "📝 下一步:"
echo "  1. cd sites/$SITE_ID"
echo "  2. 修改内容 (编辑 public/ 目录)"
echo "  3. git init && git add . && git commit -m 'Initial'"
echo "  4. git remote add origin https://github.com/yourname/$SITE_ID.git"
echo "  5. git push -u origin main"
echo "  6. 在Cloudflare Pages中导入仓库"
echo "  7. 绑定域名: $DOMAIN"
echo ""
echo "🎉 完成!"

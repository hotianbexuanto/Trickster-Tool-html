#!/bin/bash

echo "安装戏法文档编辑器服务器..."
echo "正在检查Node.js..."

if ! command -v node &> /dev/null; then
    echo "未找到Node.js! 请先安装Node.js: https://nodejs.org/"
    exit 1
fi

echo "Node.js已安装，正在安装依赖..."
npm install

if [ $? -ne 0 ]; then
    echo "安装依赖失败，请检查错误信息。"
    exit 1
fi

echo ""
echo "安装成功! 现在您可以通过以下命令启动服务器:"
echo "npm start"
echo ""
echo "或者执行 ./start.sh 脚本。"

# 设置可执行权限
chmod +x start.sh 
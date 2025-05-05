#!/bin/bash

echo "启动戏法文档编辑器服务器..."

node server.js
 
if [ $? -ne 0 ]; then
    echo "服务器启动失败，请检查错误信息。"
    exit 1
fi 
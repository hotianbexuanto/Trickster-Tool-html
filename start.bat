@echo off
echo 启动戏法文档编辑器服务器...

node server.js

if %errorlevel% neq 0 (
    echo 服务器启动失败，请检查错误信息。
    pause
    exit /b 1
)

pause 
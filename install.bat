@echo off
echo 安装戏法文档编辑器服务器...
echo 正在检查Node.js...

where node >nul 2>nul
if %errorlevel% neq 0 (
    echo 未找到Node.js! 请先安装Node.js: https://nodejs.org/
    pause
    exit /b 1
)

echo Node.js已安装，正在安装依赖...
npm install

if %errorlevel% neq 0 (
    echo 安装依赖失败，请检查错误信息。
    pause
    exit /b 1
)

echo.
echo 安装成功! 现在您可以通过以下命令启动服务器:
echo npm start
echo.
echo 或者双击 start.bat 文件。

pause 
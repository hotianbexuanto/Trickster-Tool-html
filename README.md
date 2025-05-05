# 戏法文档编辑器

这是一个展示戏法图案的静态网站，附带图案编辑器功能。编辑器支持在有服务器环境下自动保存文件。

## 静态使用方式

直接打开 `index.html` 文件在浏览器中使用。在这种模式下，编辑器提供手动保存功能（复制代码并手动保存到文件）。

## 服务器使用方式

要启用自动保存功能，需要按照以下步骤设置服务器：

### 前提条件

- [Node.js](https://nodejs.org/) (v14 或更高版本)
- npm (通常随 Node.js 一起安装)

### 安装步骤

1. 将所有文件复制到服务器目录
2. 在该目录中打开终端/命令行
3. 安装依赖：

```bash
npm install
```

4. 启动服务器：

```bash
npm start
```

5. 服务器将在 http://localhost:3000 启动
6. 浏览器访问 http://localhost:3000/index.html 使用网站

### 开发模式

如果您正在进行开发，可以使用自动重载功能：

```bash
npm run dev
```

## 服务器 API

编辑器使用以下 API 与服务器通信：

- `GET /api/check-server` - 检查服务器是否在线
- `POST /api/save-document` - 保存文档内容

## 文件结构

- `index.html` - 主页面
- `tricks.html` - 戏法目录
- `tricks/` - 包含各种戏法的 HTML 和 JS 文件
- `tools/` - 包含图案编辑器
- `assets/` - CSS、JS 和其他资源
- `server.js` - 服务器脚本
- `package.json` - Node.js 项目配置

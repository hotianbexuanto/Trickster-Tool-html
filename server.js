/**
 * 戏法文档编辑器服务器
 * 
 * 提供API支持编辑器的自动保存功能
 */

const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// 中间件设置
app.use(express.json()); // 用于解析JSON请求
app.use(express.static('.')); // 将当前目录作为静态文件目录

// 服务器检测API
app.head('/api/check-server', (req, res) => {
  res.status(200).end();
});

app.get('/api/check-server', (req, res) => {
  res.json({ status: 'online', version: '1.0.0' });
});

// 保存文档API
app.post('/api/save-document', async (req, res) => {
  try {
    const { filename, content } = req.body;
    
    if (!filename || !content) {
      return res.status(400).json({ 
        success: false, 
        error: '缺少必要参数(文件名或内容)' 
      });
    }
    
    // 验证文件名以防止目录遍历攻击
    const safePath = path.normalize(filename).replace(/^(\.\.[\/\\])+/, '');
    const fullPath = path.join(__dirname, safePath);
    
    // 确保目录存在
    const directory = path.dirname(fullPath);
    await fs.mkdir(directory, { recursive: true });
    
    // 写入文件
    await fs.writeFile(fullPath, content, 'utf8');
    
    console.log(`文件已保存: ${safePath}`);
    
    res.json({ 
      success: true, 
      message: `文件 ${safePath} 已成功保存` 
    });
  } catch (error) {
    console.error('保存文件时出错:', error);
    res.status(500).json({ 
      success: false, 
      error: `保存失败: ${error.message}` 
    });
  }
});

// 添加一个API端点用于获取目录下的所有文件
app.get('/api/list-files', async (req, res) => {
    const dir = req.query.dir;
    const ext = req.query.ext;
    
    if (!dir) {
        return res.status(400).json({ error: '必须指定目录' });
    }
    
    // 构建目录路径（相对于项目根目录）
    const dirPath = path.join(__dirname, dir);
    
    try {
        const files = await fs.readdir(dirPath);
        
        // 如果指定了扩展名，则过滤文件
        let filteredFiles = files;
        if (ext) {
            filteredFiles = files.filter(file => file.endsWith(`.${ext}`));
        }
        
        res.json(filteredFiles);
    } catch (err) {
        console.error('读取目录失败:', err);
        return res.status(500).json({ error: '无法读取目录' });
    }
});

// 启动服务器
app.listen(PORT, () => {
  console.log(`服务器运行在 http://localhost:${PORT}`);
  console.log(`可通过浏览器访问 http://localhost:${PORT}/index.html`);
}); 
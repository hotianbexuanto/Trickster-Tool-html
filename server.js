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

// 添加额外的静态路径映射
app.use('/tricks', express.static('tome_of_tomfoolery/tricks'));
app.use('/delusions_ingresses', express.static('tome_of_tomfoolery/delusions_ingresses'));

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
    
    // 检查是否需要添加tome_of_tomfoolery前缀
    let processedPath = safePath;
    if (safePath.startsWith('delusions_ingresses/') || 
        safePath.startsWith('delusions_ingresses\\') || 
        safePath.startsWith('tricks/') || 
        safePath.startsWith('tricks\\')) {
      processedPath = `tome_of_tomfoolery/${safePath}`;
    }
    
    const fullPath = path.join(__dirname, processedPath);
    
    // 确保目录存在
    const directory = path.dirname(fullPath);
    await fs.mkdir(directory, { recursive: true });
    
    // 写入文件
    await fs.writeFile(fullPath, content, 'utf8');
    
    console.log(`文件已保存: ${processedPath}`);
    
    res.json({ 
      success: true, 
      message: `文件 ${processedPath} 已成功保存` 
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
    const recursive = req.query.recursive === 'true';
    
    if (!dir) {
        return res.status(400).json({ error: '必须指定目录' });
    }
    
    // 构建目录路径（相对于项目根目录）
    const dirPath = path.join(__dirname, dir);
    
    try {
        // 存储所有文件路径
        let allFiles = [];
        
        // 递归扫描目录的函数
        async function scanDirectory(currentPath, basePath) {
            const entries = await fs.readdir(currentPath, { withFileTypes: true });
            
            for (const entry of entries) {
                const fullPath = path.join(currentPath, entry.name);
                // 计算相对于basePath的路径
                const relativePath = path.relative(basePath, fullPath);
                
                if (entry.isDirectory() && recursive) {
                    // 递归扫描子目录
                    await scanDirectory(fullPath, basePath);
                } else if (entry.isFile()) {
                    // 如果指定了扩展名，检查文件扩展名
                    if (!ext || entry.name.endsWith(`.${ext}`)) {
                        // 添加相对路径（使用正斜杠以统一路径格式）
                        allFiles.push(relativePath.replace(/\\/g, '/'));
                    }
                }
            }
        }
        
        // 开始扫描
        await scanDirectory(dirPath, path.join(__dirname, dir));
        
        res.json(allFiles);
    } catch (err) {
        console.error('读取目录失败:', err);
        return res.status(500).json({ error: '无法读取目录', details: err.message });
    }
});

// 启动服务器
app.listen(PORT, () => {
  console.log(`服务器运行在 http://localhost:${PORT}`);
  console.log(`可通过浏览器访问 http://localhost:${PORT}/index.html`);
}); 
/**
 * 戏法图案绘制工具函数
 */

// 根据给定的配置和画布绘制图案
function drawPattern(canvas, patternConfig) {
    const ctx = canvas.getContext('2d');
    
    // 设置画布背景色与页面背景一致
    ctx.fillStyle = '#f9f7e8';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    const center = patternConfig.center || { x: canvas.width/2, y: canvas.height/2 };
    const radius = patternConfig.radius || 70;
    
    // 定义9个点的位置，以圆形排列
    const points = [];
    
    // 围绕中心的8个点
    for (let i = 0; i < 8; i++) {
        const angle = (i * Math.PI / 4);
        const x = center.x + radius * Math.sin(angle);
        const y = center.y - radius * Math.cos(angle);
        
        points.push({ x, y, active: false, index: i });
    }
    
    // 中心点（放在第9个位置）
    points.push({ x: center.x, y: center.y, active: true, index: 8 });
    
    // 应用激活点配置
    if (patternConfig.activePoints) {
        patternConfig.activePoints.forEach(pointIndex => {
            if (pointIndex >= 0 && pointIndex < points.length) {
                points[pointIndex].active = true;
            }
        });
    }
    
    // 绘制连接线
    ctx.strokeStyle = patternConfig.lineColor || '#000';
    ctx.lineWidth = patternConfig.lineWidth || 2;
    
    if (patternConfig.connections) {
        patternConfig.connections.forEach(conn => {
            const startPoint = points[conn[0]];
            const endPoint = points[conn[1]];
            
            ctx.beginPath();
            ctx.moveTo(startPoint.x, startPoint.y);
            ctx.lineTo(endPoint.x, endPoint.y);
            ctx.stroke();
        });
    }
    
    // 绘制所有点
    points.forEach(point => {
        // 小方块表示非激活点
        if (!point.active) {
            ctx.fillStyle = patternConfig.inactivePointColor || '#aaa';
            ctx.fillRect(point.x - 4, point.y - 4, 8, 8);
        } 
        // 大圆点表示激活的点
        else {
            ctx.fillStyle = patternConfig.activePointColor || '#000';
            ctx.beginPath();
            ctx.arc(point.x, point.y, 6, 0, Math.PI * 2);
            ctx.fill();
        }
    });
} 
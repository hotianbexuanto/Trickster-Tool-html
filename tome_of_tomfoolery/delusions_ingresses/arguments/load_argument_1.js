document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('patternCanvas');
    
    // 定义图案配置
    const patternConfig = {
        center: { x: 150, y: 150 },
        radius: 70,
        activePoints: [0, 8],
        connections: [
            [0, 8]
        ]
    };
    
    // 使用工具函数绘制图案
    drawPattern(canvas, patternConfig);
}); 
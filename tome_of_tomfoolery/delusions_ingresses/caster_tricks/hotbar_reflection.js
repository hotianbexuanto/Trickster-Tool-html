document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('patternCanvas');
    
    // 定义图案配置
    const patternConfig = {
        center: { x: 150, y: 150 },
        radius: 70,
        activePoints: [2, 3, 5, 6, 8],
        connections: [
            [3, 2],
            [2, 8],
            [8, 6],
            [6, 5],
            [5, 3],
            [3, 8],
            [8, 5]
        ]
    };
    
    // 使用工具函数绘制图案
    drawPattern(canvas, patternConfig);
});
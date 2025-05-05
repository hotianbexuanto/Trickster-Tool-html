document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('patternCanvas');
    
    // 定义图案配置
    const patternConfig = {
        center: { x: 150, y: 150 },
        radius: 70,
        activePoints: [0, 1, 2, 4, 6, 7, 8],
        connections: [
            [8, 0],
            [2, 8],
            [8, 6],
            [8, 4],
            [2, 1],
            [1, 0],
            [0, 7],
            [7, 6]
        ]
    };
    
    // 使用工具函数绘制图案
    drawPattern(canvas, patternConfig);
});
document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('patternCanvas');
    
    // 定义图案配置
    const patternConfig = {
        center: { x: 150, y: 150 },
        radius: 70,
        activePoints: [0, 1, 2, 3, 5, 6, 7, 8],
        connections: [
            [3, 8],
            [8, 7],
            [7, 6],
            [6, 5],
            [5, 8],
            [8, 1],
            [1, 0],
            [0, 7],
            [1, 2],
            [2, 3]
        ]
    };
    
    // 使用工具函数绘制图案
    drawPattern(canvas, patternConfig);
});
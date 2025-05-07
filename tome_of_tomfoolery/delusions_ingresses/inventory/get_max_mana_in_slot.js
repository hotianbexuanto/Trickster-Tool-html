document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('patternCanvas');
    
    // 定义图案配置
    const patternConfig = {
        center: { x: 150, y: 150 },
        radius: 70,
        activePoints: [0, 1, 2, 3, 5, 6, 7, 8],
        connections: [
            [6, 8],
            [0, 2],
            [3, 5],
            [5, 6],
            [3, 2],
            [2, 1],
            [1, 0],
            [8, 1],
            [1, 7],
            [7, 8],
            [8, 2],
            [6, 7],
            [6, 1]
        ]
    };
    
    // 使用工具函数绘制图案
    drawPattern(canvas, patternConfig);
});
document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('patternCanvas');
    
    // 定义图案配置
    const patternConfig = {
        center: { x: 150, y: 150 },
        radius: 70,
        activePoints: [0, 1, 2, 4, 6, 7, 8],
        connections: [
            [6, 8],
            [0, 2],
            [2, 4],
            [4, 6],
            [6, 0],
            [2, 8],
            [8, 1],
            [8, 7],
            [7, 6],
            [7, 0],
            [0, 1],
            [1, 2]
        ]
    };
    
    // 使用工具函数绘制图案
    drawPattern(canvas, patternConfig);
});
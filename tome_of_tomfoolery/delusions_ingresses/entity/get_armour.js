document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('patternCanvas');
    
    // 定义图案配置
    const patternConfig = {
        center: { x: 150, y: 150 },
        radius: 70,
        activePoints: [0, 1, 2, 3, 4, 5, 6, 7, 8],
        connections: [
            [8, 0],
            [8, 1],
            [8, 3],
            [8, 5],
            [8, 7],
            [3, 4],
            [5, 4],
            [4, 8],
            [8, 2],
            [8, 6],
            [6, 4],
            [4, 2],
            [2, 0],
            [0, 6],
            [6, 7],
            [1, 2]
        ]
    };
    
    // 使用工具函数绘制图案
    drawPattern(canvas, patternConfig);
});
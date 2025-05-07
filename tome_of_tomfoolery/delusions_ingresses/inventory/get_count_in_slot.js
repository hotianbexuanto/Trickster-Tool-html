document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('patternCanvas');
    
    // 定义图案配置
    const patternConfig = {
        center: { x: 150, y: 150 },
        radius: 70,
        activePoints: [0, 1, 2, 3, 4, 5, 6, 7, 8],
        connections: [
            [4, 2],
            [0, 6],
            [5, 6],
            [5, 4],
            [2, 1],
            [1, 0],
            [7, 5],
            [5, 3],
            [3, 4],
            [6, 7],
            [6, 8],
            [8, 4]
        ]
    };
    
    // 使用工具函数绘制图案
    drawPattern(canvas, patternConfig);
});
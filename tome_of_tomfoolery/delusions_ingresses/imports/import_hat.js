document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('patternCanvas');
    
    // 定义图案配置
    const patternConfig = {
        center: { x: 150, y: 150 },
        radius: 70,
        activePoints: [0, 1, 2, 3, 4, 5, 6, 7],
        connections: [
            [0, 2],
            [2, 4],
            [4, 6],
            [6, 0],
            [3, 6],
            [5, 2],
            [5, 6],
            [3, 2],
            [1, 2],
            [7, 6],
            [7, 2],
            [1, 6]
        ]
    };
    
    // 使用工具函数绘制图案
    drawPattern(canvas, patternConfig);
});
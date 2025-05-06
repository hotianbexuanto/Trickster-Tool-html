document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('patternCanvas');
    
    // 定义图案配置
    const patternConfig = {
        center: { x: 150, y: 150 },
        radius: 70,
        activePoints: [0, 1, 2, 3, 5, 7, 8],
        connections: [
            [8, 0],
            [1, 3],
            [3, 5],
            [5, 7],
            [1, 7],
            [0, 1],
            [1, 2],
            [2, 8]
        ]
    };
    
    // 使用工具函数绘制图案
    drawPattern(canvas, patternConfig);
});
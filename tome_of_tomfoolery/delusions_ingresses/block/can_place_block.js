document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('patternCanvas');
    
    // 定义图案配置
    const patternConfig = {
        center: { x: 150, y: 150 },
        radius: 70,
        activePoints: [1, 2, 3, 5, 6, 7, 8],
        connections: [
            [7, 8],
            [7, 5],
            [8, 1],
            [1, 3],
            [3, 5],
            [7, 1],
            [2, 3],
            [2, 1],
            [6, 5],
            [6, 7],
            [3, 8],
            [8, 5]
        ]
    };
    
    // 使用工具函数绘制图案
    drawPattern(canvas, patternConfig);
});
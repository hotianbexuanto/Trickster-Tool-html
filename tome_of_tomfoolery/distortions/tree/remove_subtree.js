document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('patternCanvas');
    
    // 定义图案配置
    const patternConfig = {
        center: { x: 150, y: 150 },
        radius: 70,
        activePoints: [1, 2, 3, 4, 5, 6, 7, 8],
        connections: [
            [3, 8],
            [8, 5],
            [5, 6],
            [6, 7],
            [7, 8],
            [8, 1],
            [1, 2],
            [2, 3],
            [3, 4],
            [4, 5]
        ]
    };
    
    // 使用工具函数绘制图案
    drawPattern(canvas, patternConfig);
});
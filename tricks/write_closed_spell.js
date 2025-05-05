document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('patternCanvas');
    
    // 定义图案配置
    const patternConfig = {
        center: { x: 150, y: 150 },
        radius: 70,
        activePoints: [0, 2, 3, 4, 5, 6, 8],
        connections: [
            [8, 0],
            [8, 2],
            [8, 6],
            [2, 3],
            [3, 5],
            [5, 6],
            [2, 6],
            [3, 6],
            [5, 2],
            [8, 4],
            [2, 4],
            [6, 4],
            [3, 4],
            [5, 4]
        ]
    };
    
    // 使用工具函数绘制图案
    drawPattern(canvas, patternConfig);
});
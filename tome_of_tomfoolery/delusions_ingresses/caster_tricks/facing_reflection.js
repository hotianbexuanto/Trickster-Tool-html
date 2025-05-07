document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('patternCanvas');
    
    // 定义图案配置
    const patternConfig = {
        center: { x: 150, y: 150 },
        radius: 70,
        activePoints: [0, 1, 2, 4, 5, 6, 8],
        connections: [
            [1, 8],
            [8, 5],
            [5, 6],
            [6, 4],
            [4, 2],
            [2, 0],
            [0, 6],
            [1, 2]
        ]
    };
    
    // 使用工具函数绘制图案
    drawPattern(canvas, patternConfig);
});
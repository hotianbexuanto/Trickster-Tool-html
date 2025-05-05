document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('patternCanvas');
    
    // 定义图案配置
    const patternConfig = {
        center: { x: 150, y: 150 },
        radius: 70,
        activePoints: [0, 2, 3, 4, 5, 6, 8],
        connections: [
            [3, 4],
            [4, 5],
            [5, 6],
            [6, 8],
            [8, 2],
            [2, 3],
            [8, 0]
        ]
    };
    
    // 使用工具函数绘制图案
    drawPattern(canvas, patternConfig);
});
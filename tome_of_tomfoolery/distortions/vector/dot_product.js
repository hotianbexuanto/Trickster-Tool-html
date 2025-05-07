document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('patternCanvas');
    
    // 定义图案配置
    const patternConfig = {
        center: { x: 150, y: 150 },
        radius: 70,
        activePoints: [0, 1, 3, 5, 7, 8],
        connections: [
            [0, 1],
            [1, 3],
            [3, 5],
            [5, 7],
            [7, 0],
            [8, 0],
            [8, 3],
            [8, 5]
        ]
    };
    
    // 使用工具函数绘制图案
    drawPattern(canvas, patternConfig);
}); 
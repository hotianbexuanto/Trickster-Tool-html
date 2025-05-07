document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('patternCanvas');
    
    // 定义图案配置
    const patternConfig = {
        center: { x: 150, y: 150 },
        radius: 70,
        activePoints: [0, 2, 4, 6, 7, 8],
        connections: [
            [0, 2],
            [2, 4],
            [4, 6],
            [6, 7],
            [7, 0],
            [8, 0],
            [8, 2],
            [8, 4],
            [8, 6],
            [0, 4],
            [2, 6]
        ]
    };
    
    // 使用工具函数绘制图案
    drawPattern(canvas, patternConfig);
}); 
document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('patternCanvas');
    
    // 定义图案配置
    const patternConfig = {
        center: { x: 150, y: 150 },
        radius: 70,
        activePoints: [1, 3, 4, 5, 7, 8],
        connections: [
            [3, 1],
            [1, 7],
            [7, 5],
            [5, 4],
            [4, 3],
            [3, 8],
            [8, 7]
        ]
    };
    
    // 使用工具函数绘制图案
    drawPattern(canvas, patternConfig);
});
document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('patternCanvas');
    
    // 定义图案配置
    const patternConfig = {
        center: { x: 150, y: 150 },
        radius: 70,
        activePoints: [0, 2, 3, 5, 6],
        inactivePoints: [8],
        connections: [
            [5, 3],
            [3, 2],
            [2, 0],
            [0, 6],
            [6, 5]
        ]
    };
    
    // 使用工具函数绘制图案
    drawPattern(canvas, patternConfig);
});
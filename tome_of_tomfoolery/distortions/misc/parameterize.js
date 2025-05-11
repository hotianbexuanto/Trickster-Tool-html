document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('patternCanvas');
    
    // 定义图案配置
    const patternConfig = {
        center: { x: 150, y: 150 },
        radius: 70,
        activePoints: [0, 3, 4, 5, 8],
        connections: [
            [8, 0],
            [8, 3],
            [8, 4],
            [8, 5],
            [0, 3],
            [3, 4],
            [4, 5],
            [5, 0]
        ]
    };
    
    // 使用工具函数绘制图案
    drawPattern(canvas, patternConfig);
}); 
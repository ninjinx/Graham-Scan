var w, h;
var canvas, ctx;
var points = [];
var convexPoints = [];

function init(x, y) {
    canvas = document.getElementById('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx = canvas.getContext('2d');
    w = canvas.width;
    h = canvas.height;

    //Make 100 random points
    for (var i = 0; i < 300; i++) {
        points[i] = {
            x: (Math.random() * w / 4) + (3 * w / 8),
            y: (Math.random() * h / 2) + (h / 4)
        };
    }

    //create convex hull using Graham's scan algorithm
    convexPoints = grahamScan(points);

    //Draw the original points in blue
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = "#0000FF";
    for (var i = 0; i < points.length; i++) {
        ctx.beginPath();
        ctx.arc(points[i].x, points[i].y, 2, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }

    //Draw the convex hull in green
    ctx.strokeStyle = "#00FF00";
    ctx.beginPath();
    ctx.moveTo(convexPoints[0].x, convexPoints[0].y);
    for (var i = 1; i < convexPoints.length; i++) {
        ctx.lineTo(convexPoints[i].x, convexPoints[i].y);
    }
    ctx.closePath();
    ctx.stroke();

    for (var i = 0; i < convexPoints.length; i++) {
        ctx.beginPath();
        ctx.arc(convexPoints[i].x, convexPoints[i].y, 6, 0, Math.PI * 2);
        ctx.closePath();
        ctx.stroke();
    }
}
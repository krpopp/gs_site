'use strict';

const MAX_ITER = 17;

let scrollLast = 0;
let scrollCount = 0;

let width = 20;

const body = document.body;
const html = document.documentElement;

const height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
const rate = height / 41;
let toScroll = 0;

/* Simple 2D point class. */
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

/* Creates a new point between two existing points in the given direction. */
function bend(p1, p2, direction) {
    const dx = p2.x - p1.x;
    const dy = p2.y - p1.y;

    const angle = direction * Math.PI / 4;
    const h = Math.sqrt(0.5);
    const s = Math.sin(angle);
    const c = Math.cos(angle);

    const newX = (dx * c - dy * s) * h + p1.x;
    const newY = (dx * s + dy * c) * h + p1.y;

    return new Point(newX, newY);
}

/* Draws a segment of the fractal in the given color. */
function drawSegment(p1, p2, context, color) {
    context.strokeStyle = color || 'rgb(95, 228, 54)';
    context.lineCap = "round";
    context.beginPath();
    context.moveTo(p1.x, p1.y);
    context.lineTo(p2.x, p2.y);
    context.lineWidth = width;
    context.stroke();
}

class DragonFractal {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.points = [
            new Point(0,0),
            new Point(width, height)
        ];
        this.iter = 0;
    }

    /* Progresses the fractal, increasing the detail. */
    step() {
        // Add a new point between every two existing points
        if(width > 3) width-=2;
        this.points = this.points.reduce((newPoints, point, index) => {
            if (index < this.points.length - 1) {
                const dir = index % 2 === 0 ? 1 : -1;
                const newPoint = bend(this.points[index], this.points[index + 1], dir);
                newPoints.push(point, newPoint);
            } else {
                newPoints.push(point);
            }
            return newPoints;
        }, []);

        ++this.iter;
    }

    /* Regresses the fractal, decreasing the detail. */
    stepBack() {
        if(width < 21) width+=2;
        if (this.points.length <= 2) return;

        // Remove every second point from the list.
        this.points = this.points.filter((point, index) => index % 2 === 0);
        --this.iter;
    }

    /* Draws the fractal curve with fancier coloring. */
    drawWithColor(ctx) {
        const colorStep = 255 / this.points.length;

        ctx.clearRect(0, 0, this.width, this.height);
        for (let i = 1; i < this.points.length; i++) {
            let g = Math.min(Math.floor((i - 1) * colorStep + 50), 255)
            let color = 'rgb(0, ' + g + ',0)';
            drawSegment(this.points[i - 1], this.points[i], ctx, color);
        }
        let scrollY = document.documentElement.scrollTop;
        toScroll = Math.round(scrollY/rate);
        if(toScroll > fractal.iter && fractal.iter < MAX_ITER){
            fractal.step();
            fractal.drawWithColor(ctx);
        } else if(toScroll < fractal.iter && fractal.iter > 0){
            fractal.stepBack();
            fractal.drawWithColor(ctx);
        }
    }
}


// Canvas.
const canvas = document.getElementById('dragon');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const fractal = new DragonFractal(canvas.width, canvas.height);
fractal.drawWithColor(ctx);

document.addEventListener('scroll', function(event) {
    let scrollY = document.documentElement.scrollTop;
    toScroll = Math.round(scrollY/rate);
    if(toScroll > fractal.iter && fractal.iter < MAX_ITER){
        fractal.step();
        fractal.drawWithColor(ctx);
    } else if(toScroll < fractal.iter && fractal.iter > 0){
        fractal.stepBack();
        fractal.drawWithColor(ctx);
    }
}, false);

window.onresize = function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    fractal.drawWithColor(ctx);
};


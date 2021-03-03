

class DrawLabel {
    constructor() {
        this.canvas = document.querySelector('canvas');
        console.log(this.canvas)
        this.context = this.canvas.getContext('2d');
    }
    static drawRect() {
        //let context = this.context;
        let context = document.querySelector('canvas').getContext('2d');
        context.beginPath();
        context.rect(100, 100, 200, 100);
        context.strokeStyle = 'orange';
        context.lineWidth = 8;
        context.stroke();
        context.fillStyle = 'purple';
        context.fill()
        context.font = 'italic 20px Calibri';
        context.fillStyle ='red';
        context.fillText('hello canvasText', 100, 120)
    }
}


export { DrawLabel }
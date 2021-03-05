


class theCanvas {
    constructor() {
        let canvas = document.createElement('canvas');
        //let context = canvas.getContext('2d');
        canvas.width = 700;
        canvas.height = 600;
        canvas.style.backgroundColor = '#007eff3d';
        document.body.appendChild(canvas);
        console.log("canvas-----apppend")
        this.context = canvas.getContext('2d');
    }
    __rect(x, y, w, h) {
        console.log("canvas---------------------------rect", x, y, w, h)
        this.context.beginPath();
        this.context.rect(
            x.value,
            y.value,
            w.value,
            h.value);
        /* this.context.rect(
            0,
            0,
            1000,
            50); */
        this.context.strokeStyle = 'orange';
        this.context.lineWidth = 0;
        this.context.stroke();
        //this.context.fillStyle = 'purple';
        this.context.fillStyle = '#' + Math.random().toString(16).substr(2, 6).toUpperCase();;
        this.context.fill();
    }

    __fillText(x, y) {
        console.log("canvas--------------fillText", x, y)
        this.context.beginPath();
        this.context.font = 'italic 20px Calibri';
        this.context.fillStyle = 'gold';
        this.context.fillText("hello loveAsBefor", x.value, y.value + 20,)
    }
}

let example = new theCanvas()

export { example }
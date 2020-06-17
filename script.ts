let drawRectangle = () => {
    let c = <HTMLCanvasElement>document.getElementById("myCanvas");
    let ctx = c.getContext("2d");
    ctx.fillStyle = "red";
    for (let i = 0; i<9; i+=75){
        for (let j = 0; j < 601; j+=75){
            ctx.fillRect(j, i, 75, 75);
            ctx.stroke();
        }
    }
} 
drawRectangle();

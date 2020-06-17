let drawRectangle = () => {
    let c = <HTMLCanvasElement>document.getElementById("myCanvas");
    let ctx = c.getContext("2d");
    ctx.fillStyle = "red";
    for (let i = 0; i <== 600; i+=75){
        ctx.fillRect(i, 0, 75, 75);
        ctx.stroke();
    }
}
drawRectangle();

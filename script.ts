let drawRectangle = () => {
    let c = <HTMLCanvasElement>document.getElementById("myCanvas");
    let ctx = c.getContext("2d");
    ctx.fillStyle = "red";
    ctx.fillRect(300, 300, 80, 80);
    ctx.stroke();
}
drawRectangle();

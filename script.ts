let drawRectangle = () => {
    let c = <HTMLCanvasElement>document.getElementById("myCanvas");
    let ctx = c.getContext("2d");
    ctx.fillStyle = "red";
    ctx.fillRect(10, 10, 150, 80);
    ctx.stroke();
}
drawRectangle();

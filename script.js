var drawRectangle = function () {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.fillStyle = "red";
    ctx.fillRect(20, 20, 150, 80);
    ctx.stroke();
};
drawRectangle();

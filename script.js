var drawRectangle = function () {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.fillStyle = "red";
    ctx.fillRect(10, 10, 150, 80);
};
document.onload = drawRectangle;
//# sourceMappingURL=script.js.map
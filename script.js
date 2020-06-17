var drawRectangle = function () {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.fillStyle = "red";
    for (var i = 0; i < 9; i += 75) {
        for (var j = 0; j < 601; j += 75) {
            ctx.fillRect(j, i, 75, 75);
            ctx.stroke();
        }
    }
};
drawRectangle();
//# sourceMappingURL=script.js.map
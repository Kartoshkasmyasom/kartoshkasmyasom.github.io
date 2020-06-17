var drawRectangle = function () {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.fillStyle = "red";
    for (var i = 0; i < 9; i++) {
        for (var i_1 = 0; i_1 < 601; i_1 += 75) {
            ctx.fillRect(i_1, 0, 75, 75);
            ctx.stroke();
        }
    }
};
drawRectangle();
//# sourceMappingURL=script.js.map
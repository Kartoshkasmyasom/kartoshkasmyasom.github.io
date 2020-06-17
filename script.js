var drawRectangle = function () {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.fillStyle = "red";
    for (var i = 0; i<9; i++){
        for (var i = 0; i < 601; i+=75){
            ctx.fillRect(i, 0, 75, 75);
            ctx.stroke();
        }
    }
};
drawRectangle();

var drawRectangle = function (color, i, j) {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var s = 75;
    ctx.fillStyle = color;
    ctx.fillRect(s * j, s * i, s, s);
    ctx.stroke();
};
var firstQuarter = function () {
    for (var i = 0; i < 2; i++) {
        var array = [];
        for (var j = 0; j < 4; j++) {
            array.push("a");
        }
        board.push(array);
    }
    for (var i = 0; i < 2; i++) {
        for (var j = 0; j < 4; j++) {
            board[3 - i][3 - j] = board[i][j];
        }
    }
};
var otherBoard = function () {
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            drawRectangle(board[i][j], i, j);
            drawRectangle(opp[board[i][j]], i, 7 - j);
            drawRectangle(opp[board[i][j]], 7 - i, j);
            drawRectangle(board[i][j], 4 + i, 4 + j);
        }
    }
};
var board = [["orange", "blue", "purple", "pink"], ["red", "orange", "pink", "green"]];
var opp = { "orange": "brown", "blue": "green", "purple": "red", "pink": "yellow", "yellow": "pink", "red": "purple", "green": "blue", "brown": "orange" };
firstQuarter();
otherBoard();
//# sourceMappingURL=script.js.map
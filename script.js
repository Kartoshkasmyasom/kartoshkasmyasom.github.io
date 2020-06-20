var drawRectangle = function (color, i, j) {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var s = 75;
    ctx.fillStyle = color;
    ctx.fillRect(s * j, s * i, s, s);
    ctx.stroke();
};
var drawBoard = function () {
    for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 8; j++) {
            drawRectangle(board[i][j], i, j);
        }
    }
};
var generateBoard = function () {
    for (var i = 0; i < 6; i++) {
        var array = [];
        for (var j = 0; j < 8; j++) {
            array.push("a");
        }
        board.push(array);
    }
    for (var i = 0; i < 2; i++) {
        for (var j = 0; j < 4; j++) {
            board[3 - i][3 - j] = board[i][j];
        }
    }
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            board[i][7 - j] = opp[board[i][j]];
            board[7 - i][j] = opp[board[i][j]];
            board[4 + i][4 + j] = board[i][j];
        }
    }
};
var drawChip = function (x, y, r, color) {
    var c = document.getElementById("myChip");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.strokeStyle = color;
    ctx.stroke();
};
var Progress = /** @class */ (function () {
    function Progress() {
    }
    Progress.prototype.handleEvent = function (event) {
        switch (event.type) {
            case 'mousedown':
                x = event.clientX;
                y = event.clientY;
                X = Math.floor(x / 75);
                Y = Math.floor(y / 75);
                if (chipLocation[X][Y] !== "n") {
                    if (selected !== true) {
                        selected = true;
                    }
                }
                break;
            case 'mousemove':
                document.getElementById("myChip").style.left = x + 'px';
                document.getElementById("myChip").style.top = y + 'px';
                x = event.clientX;
                y = event.clientY;
                break;
            case 'mouseup':
                selected = false;
                var X1 = Math.floor(event.clientX / 75);
                var Y1 = Math.floor(event.clientY / 75);
                if (Y === Y1 && X !== X1 || Math.abs(Y1 - Y) === Math.abs(X1 - X)) {
                    drawChip(X1 * 75 / 2, Y1 * 75 / 2, 32, "white");
                    drawChip(X1 * 75 / 2, Y1 * 75 / 2, 16, "orange");
                }
                else {
                    drawChip(X * 75 / 2, Y * 75 / 2, 32, "white");
                    drawChip(X * 75 / 2, Y * 75 / 2, 16, "orange");
                }
                break;
        }
    };
    return Progress;
}());
var board = [["orange", "blue", "purple", "pink", "a", "a", "a", "a"], ["red", "orange", "pink", "green", "a", "a", "a", "a"]];
var opp = { "orange": "brown", "blue": "green", "purple": "red", "pink": "yellow", "yellow": "pink", "red": "purple", "green": "blue", "brown": "orange" };
var chipLocation = [];
for (var i = 0; i < 8; i++) {
    var array = [];
    for (var j = 0; j < 8; j++) {
        array.push("n");
    }
    chipLocation.push(array);
}
var selected = false;
var X = -1;
var Y = -1;
var x = -1;
var y = -1;
generateBoard();
drawBoard();
drawChip(32.5, 32.5, 32, "white");
drawChip(32.5, 32.5, 16, "orange");
chipLocation[0][0] = "orange";
var progress = new Progress();
document.addEventListener('mousedown', progress);
document.addEventListener('mousemove', progress);
document.addEventListener('mouseup', progress);
//# sourceMappingURL=script.js.map
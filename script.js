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
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.strokeStyle = color;
    ctx.stroke();
    ctx.closePath();
};
var selectChip = function (X, Y) {
    drawRectangle(board[Y][X], Y, X);
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(X * 75 + 37.5, Y * 75 + 37.5, 32, 0, 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.strokeStyle = "yellow";
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.closePath();
    drawChip(X * 75 + 37.5, Y * 75 + 37.5, 16, "orange");
};
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
var X, Y, x, y;
generateBoard();
drawBoard();
drawChip(37.5, 37.5, 32, "white");
drawChip(37.5, 37.5, 16, "orange");
chipLocation[0][0] = "orange";
var Progress = /** @class */ (function () {
    function Progress() {
    }
    Progress.prototype.handleEvent = function (event) {
        switch (event.type) {
            case 'click':
                var target = event.target;
                if (target.tagName === 'CANVAS') {
                    var help = target.getBoundingClientRect();
                    X = Math.floor((event.clientX - help.left) / 75);
                    Y = Math.floor((event.clientY - help.top) / 75);
                    if (chipLocation[Y][X] !== "n") {
                        if (selected !== true) {
                            selected = true;
                            selectChip(X, Y);
                            x = X;
                            y = Y;
                        }
                    }
                    else if (selected) {
                        if (X === x && Y !== y || Math.abs(Y - y) === Math.abs(X - x)) {
                            drawRectangle(board[y][x], y, x);
                            drawChip(X * 75 + 37.5, Y * 75 + 37.5, 32, "white");
                            drawChip(X * 75 + 37.5, Y * 75 + 37.5, 16, "orange");
                            chipLocation[y][x] = "n";
                            chipLocation[Y][X] = "orange";
                        }
                        selected = false;
                    }
                }
                break;
        }
    };
    return Progress;
}());
var progress = new Progress();
document.addEventListener('click', progress);
//# sourceMappingURL=script.js.map
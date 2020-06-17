let drawRectangle = (color: string, i, j: number) => {
    let c = <HTMLCanvasElement>document.getElementById("myCanvas");
    let ctx = c.getContext("2d");
    const s = 75;
    ctx.fillStyle = color;
    ctx.fillRect(s*j, s*i, s, s);
    ctx.stroke();
}


let firstQuarter = () => {
    for (let i = 0; i<2; i++){
        let array = [];
        for (let j = 0; j<4; j++){
            array.push("a");
        }
        board.push(array);
    }
    for (let i = 0; i<2; i++){
        for (let j = 0; j<4; j++){
            board[3-i][3-j] = board[i][j];
        }
    }
}

let otherBoard= () => {
    for (let i = 0; i<4; i++){
        for (let j = 0; j<4; j++){
            drawRectangle(board[i][j], i, j);
            drawRectangle(opp[board[i][j]], i, 7-j);
            drawRectangle(opp[board[i][j]], 7-i, j);
            drawRectangle(board[i][j], 4+i, 4+j);
        }
    }
}

let board = [["orange", "blue", "purple", "pink"], ["red", "orange", "pink", "green"]];
let opp = {"orange": "brown", "blue": "green", "purple": "red", "pink": "yellow", "yellow": "pink", "red": "purple", "green": "blue", "brown": "orange"}
firstQuarter();
otherBoard();


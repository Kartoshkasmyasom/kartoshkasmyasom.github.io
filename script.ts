let drawRectangle = (color: string, i, j: number) => {
    let c = <HTMLCanvasElement>document.getElementById("myCanvas");
    let ctx = c.getContext("2d");
    const s = 75;
    ctx.fillStyle = color;
    ctx.fillRect(s*j, s*i, s, s);
    ctx.stroke();
}


let drawBoard = () => {
   for (let i = 0; i<8; i++) {
       for (let j = 0; j<8; j++){
           drawRectangle(board[i][j], i, j);
       }
   }
}

let generateBoard = () => {
    for (let i = 0; i<6; i++){
        let array = [];
        for (let j = 0; j<8; j++){
            array.push("a");
        }
        board.push(array);
    }
    for (let i = 0; i<2; i++){
        for (let j = 0; j<4; j++){
            board[3-i][3-j] = board[i][j];
        }
    }
    for (let i = 0; i<4; i++){
        for (let j = 0; j<4; j++){
            board[i][7-j] =  opp[board[i][j]];
            board[7-i][j] = opp[board[i][j]];
            board[4+i][4+j] = board[i][j];
        }
    }
}

let drawChip = (x, y, r: number, color1, color2: string) =>  {
    let c = <HTMLCanvasElement>document.getElementById("myCanvas");
    let ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fillStyle = color1;
    ctx.fill();
    ctx.strokeStyle = color2;
    ctx.stroke();
}

//   let checkCoordinates = ()

let board = [["orange", "blue", "purple", "pink", "a", "a", "a", "a"], ["red", "orange", "pink", "green", "a", "a", "a", "a"]];
let opp = {"orange": "brown", "blue": "green", "purple": "red", "pink": "yellow", "yellow": "pink", "red": "purple", "green": "blue", "brown": "orange"}
let chipLocation = [];
for (let i = 0; i<8; i++){
    let array = [];
    for (let j = 0; j<8; j++){
        array.push("n");
    }
    chipLocation.push(array);
}

let selected = false;
let X, Y, x, y;
generateBoard();
drawBoard();
drawChip(32.5, 32.5, 32, "white", "white");
drawChip(32.5, 32.5, 16, "orange", "orange");
chipLocation[0][0] = "orange";


class Progress {
    handleEvent(event){
        switch (event.type) {
            case 'click':
               let target = event.target;
               if (target.tagName === 'CANVAS'){
                   let help = target.getBoundingClientRect();
                   X = Math.floor((event.clientX - help.left) / 75);
                   Y = Math.floor((event.clientY - help.top) / 75);
                   if (chipLocation[X][Y] !== "n") {
                       if (selected !== true) {
                           selected = true;
                           drawRectangle(board[X][Y], X, Y);
                           drawChip((X + 1) * 75 / 2, (Y + 1) * 75 / 2, 32, "white", "yellow");
                           drawChip((X + 1) * 75 / 2, (Y + 1) * 75 / 2, 16, "orange", "orange");
                           x = X;
                           y = Y;
                       }

                        else if (selected) {
                           if (Y === y && X !== x || Math.abs(Y - y) === Math.abs(X - x)) {
                               drawRectangle(board[x][y], x, y);
                               drawChip((X + 1) * 75 / 2, (Y + 1) * 75 / 2, 32, "white", "white");
                               drawChip((X + 1) * 75 / 2, (Y + 1) * 75 / 2, 16, "orange", "orange");
                           }
                           selected = false;
                       }
                   }
               }

                break;

        }
    }
}

let progress = new Progress();
document.addEventListener('click', progress);

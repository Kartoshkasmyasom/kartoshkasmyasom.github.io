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

let drawChip = (x, y, r: number, color: string) =>  {
    let c = <HTMLCanvasElement>document.getElementById("myCanvas");
    let ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fillStyle = color ;
    ctx.fill();
    ctx.strokeStyle = color;
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
drawChip(32.5, 32.5, 32, "white");
drawChip(32.5, 32.5, 16, "orange");
chipLocation[0][0] = "orange";


class Progress {
    handleEvent(event){
        switch (event.type) {
            case 'click':
               let target = event.target;
               let name = target.tagName;
               if (target.tagName === 'myCanvas'){
                   let help = target.getBoundingClientRect();
                   alert("X: " + (event.clientX - help.left));
                   alert("Y: " + (event.clientY - help.top));
               }

                break;

        }
    }
}

let progress = new Progress();
document.addEventListener('click', progress);

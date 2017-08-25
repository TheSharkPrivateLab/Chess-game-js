function print(p) { console.log(p); }
function ping() { print("ping"); }
function pong() { print("pong"); }

var movehistory = [];

class Player { 
    constructor(color) {
        this.color = color;
        if (color === "white") {
            this.pieces = [
                ["A1", "rook", 1],
                ["B1", "knight", 1],
                ["C1", "bishop", 1],
                ["D1", "queen", 1],
                ["E1", "king", 1],
                ["F1", "bishop", 1],
                ["G1", "knight", 1],
                ["H1", "rook", 1],
                ["A2", "pawn", 1],
                ["B2", "pawn", 1],
                ["C2", "pawn", 1],
                ["D2", "pawn", 1],
                ["E2", "pawn", 1],
                ["F2", "pawn", 1],
                ["G2", "pawn", 1],
                ["H2", "pawn", 1]
            ];
        }
        else if (color === "black")
        {
            this.pieces = [
                ["A8", "rook", 1],
                ["B8", "knight", 1],
                ["C8", "bishop", 1],
                ["D8", "queen", 1],
                ["E8", "king", 1],
                ["F8", "bishop", 1],
                ["G8", "knight", 1],
                ["H8", "rook", 1],
                ["A7", "pawn", 1],
                ["B7", "pawn", 1],
                ["C7", "pawn", 1],
                ["D7", "pawn", 1],
                ["E7", "pawn", 1],
                ["F7", "pawn", 1],
                ["G7", "pawn", 1],
                ["H7", "pawn", 1]
            ];
        }
    }
}

function remove(pos) {
    var i = 0;
    while (i < 16) {
        $("#pos").html("");
        i++;
    }
}

function printPiece(player){
    var i = 0;
    while(i < 16) {
        if (player[i][2] === 1) {
            $("#" + player[i][0]).html(player[i][1]);
        }
    }
    i++;
}
}

function checkIfFree(posA, whitep, blackp)
{
    var i = 0;
    while (whitep.pieces[i]) {
        if (posA === whitep.pieces[i][0]) {
            return 1;
        }
        i++;
    }
    i = 0;
    while (blackp.pieces[i]) {
        if (posA === blackp.pieces[i][0]) {
            return 1;
        }
        i++;
    }
    return 0;
}

function move(posIni,posFinal){
    var i = 0;
    while (whitep.pieces[i]) {
        if (posIni === whitep.pieces[i][0]) {
            if (whitep.pieces[i][2] === 1 && whitep.pieces[i][1] === "pawn"){
                movepawn(whitep.pieces[i],posIni,posFinal);
                return 0;
            }
        }
        i++;
    }
    i = 0;
    while (blackp.pieces[i]) {
        if (posIni === blackp.pieces[i][0]) {

        }
        i++;
    }
    return 0;

}

function movePiece(player, posIni, posFinal) {
    movehistory[movehistory.length] = posIni;
    movehistory[movehistory.length] = posFinal;
    remove(player[0]);
    player[0] = posFinal;
    print("Changement de place");
}

function movePawn(player,posIni,posFinal){
    tab = [
        ["A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8"],
        ["B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8"],
        ["C1", "C2", "C3", "C4", "C5", "C6", "C7", "C8"],
        ["D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8"],
        ["E1", "E2", "E3", "E4", "E5", "E6", "E7", "E8"],
        ["F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8"],
        ["G1", "G2", "G3", "G4", "G5", "G6", "G7", "G8"],
        ["H1", "H2", "H3", "H4", "H5", "H6", "H7", "H8"],
    ];
    var i = 0;
    var y = 0;

    while (i < 8){
        while(y < 8){
                if (posIni === tab[i][y] && y === 1 && posFinal === tab[i][y+2] && checkIfFree(posFinal,whitep,blackp)==0)
                {
                    movePiece(player, posIni, posFinal);
                    break;
                }
                if (posIni === tab[i][y] && posFinal === tab[i][y + 1] && checkIfFree(posFinal, whitep, blackp) === 0) {
                    movePiece(player, posIni, posFinal);
                    break;
                break;
            }
                if ((posIni === tab[i][y] && posFinal === tab[i+1][y+1] && checkIfFree(posFinal,whitep,blackp)==1) || (posIni === tab[i][y] && posFinal === tab[i-1][y+1] && checkIfFree(posFinal,whitep,blackp)==1))
                {
                    movePiece(player, posIni, posFinal);
                    break;
                break;
                }	
            y++;
        }
        y = 0;
        i++;
    }
    printPiece(whitep.pieces);
    printPiece(blackp.pieces);
}










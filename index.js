class playerwhite{ 
	constructor (){

	this.piece	= [
	["A1","rook",1],
	["B1","knight",1],
	["C1","bishop",1],
	["D1","queen",1],
	["E1","king",1],
	["F1","bishop",1],
	["G1","knight",1],
	["H1","rook",1],
	["A2","pawn",1],
	["B2","pawn",1],
	["C2","pawn",1],
	["D2","pawn",1],
	["E2","pawn",1],
	["F2","pawn",1],
	["G2","pawn",1],
	["H2","pawn",1]
				]
	}
}
class playerblack{ 
	constructor (){

	this.piece	= [
	["A8","rook",1],
	["B8","knight",1],
	["C8","bishop",1],
	["D8","queen",1],
	["E8","king",1],
	["F8","bishop",1],
	["G8","knight",1],
	["H8","rook",1],
	["A7","pawn",1],
	["B7","pawn",1],
	["C7","pawn",1],
	["D7","pawn",1],
	["E7","pawn",1],
	["F7","pawn",1],
	["G7","pawn",1],
	["H7","pawn",1]
				]
	}
}

 var movehistory = [];
 
function remove(pos){
	var	i;
	i = 0;
	while(i < 16){
	var oEle = document.getElementById(pos);
	oEle.innerHTML = "";
	i++;
}
}

function printpiece(player){
	var	i;
	i = 0;
	while(i < 16){
		if (player[i][2] == 1) {
	var oEle = document.getElementById(player[i][0]);
	oEle.innerHTML = player[i][1];
	}
	i++;
}
}

function checkIfFree(posA,whitep,blackp)
{
	var i =0;
	while (whitep.piece[i]){
		if (posA == whitep.piece[i][0]) {
			return 1;
		}
		i++;
	}
	i =0;
	while (blackp.piece[i]){
		if (posA == blackp.piece[i][0]) {
			return 1;
		}
		i++;

	}
	return 0;

}
function moovepawn(player,posIni,posFinal){
	tab = [
	["A2","A3","A4","A5","A6","A7","A8"],
	["B2","B3","B4","B5","B6","B7","B8"],
	["C2","C3","C4","C5","C6","C7","C8"],
	["D2","D3","D4","D5","D6","D7","D8"],
	["E2","E3","E4","E5","E6","E7","E8"],
	["F2","F3","F4","F5","F6","F7","F8"],
	["G2","G3","G4","G5","G6","G7","G8"],
	["H2","H3","H4","H5","H6","H7","H8"],
	]
	var i = 0;
	var y = 0;

	while (i < 8){
		while(y < 7){
				if (posIni == tab[i][y] && y == 0 && posFinal == tab[i][y+2] && checkIfFree(posFinal,whitep,blackp)==0)
				{
				movehistory[movehistory.length]=posIni;
				movehistory[movehistory.length]=posFinal;
				remove(player[0]);
				player[0] = posFinal;
				console.log("changement de place");
				break;
				}
				if (posIni == tab[i][y] && posFinal == tab[i][y+1] && checkIfFree(posFinal,whitep,blackp)==0){
				movehistory[movehistory.length]=posIni;
				movehistory[movehistory.length]=posFinal;
				remove(player[0]);
				player[0] = posFinal;
				console.log("changement de place");
				break;
			}
			    if ((posIni == tab[i][y] && posFinal == tab[i+1][y+1] && checkIfFree(posFinal,whitep,blackp)==1) || (posIni == tab[i][y] && posFinal == tab[i-1][y+1] && checkIfFree(posFinal,whitep,blackp)==1))
			    {
			    movehistory[movehistory.length]=posIni;
				movehistory[movehistory.length]=posFinal;
				remove(player[0]);
				player[0] = posFinal;
				console.log("changement de place");
				break;
			    }	
			y++;
		}
		y =0;
		i++;
	}
printpiece(whitep.piece);
printpiece(blackp.piece);
}















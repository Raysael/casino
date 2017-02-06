var inp = document.getElementsByName('r');
var ch = document.getElementsByName('ch');
var cube = document.getElementsByClassName('cube');
var frame = document.getElementsByClassName('frame__cube');
var row = document.getElementsByClassName('row__cube');
		
document.getElementsByClassName('radio')[0].onclick = function() {
	
	if (inp[0].type == "radio" && inp[0].checked) {
		row[0].style.display = 'none';
		row[1].style.display = 'flex';
		row[2].style.display = 'none';
	}
	else if (inp[1].type == "radio" && inp[1].checked) {
		row[0].style.display = 'flex';
		row[1].style.display = 'none';
		row[2].style.display = 'none';
	}
	else if (inp[2].type == "radio" && inp[2].checked) {
		row[0].style.display = 'flex';
		row[1].style.display = 'flex';
		row[2].style.display = 'none';
	}
	else if (inp[3].type == "radio" && inp[3].checked) {
		row[0].style.display = 'flex';
		row[1].style.display = 'none';
		row[2].style.display = 'flex';
	}
	else if (inp[4].type == "radio" && inp[4].checked) {
		row[0].style.display = 'flex';
		row[1].style.display = 'flex';
		row[2].style.display = 'flex';
	}
}

document.getElementsByClassName('random__button')[0].onclick = function random() {
	
	function random2(argument) {

		function game() {
			var x = Math.floor(Math.random()*(5 - 1) + 1) * 90;
			return x
		}

		cube[argument].style.transform = "rotateY(" + game() + "deg) rotateX(" + game() + "deg) rotateZ(" + game() + "deg)"
	}

	for (var i = 0; i <= 4; i++) {
		if (inp[i].type == "radio" && inp[i].checked) {
			for (var j = 0; j <= i; j++) {
				if (!ch[j].checked) {
					if (j == 0 && !ch[2].checked) {
						random2(2)
					}
					if (j == 3 && !ch[4].checked) {
						random2(4)
					}
					random2(j)
				}
			}
		}
	}
}
function stop(n) {
	var side = cube[n].getElementsByClassName('side');

	for (var i = 0; i < side.length; i++) {
		if (!ch[n].checked){
			side[i].style.background = "#444"
		}
		else {
			side[i].style.background = "#000"
		}	
	}
}
function stopPlus(num) {	
	frame[num].onclick = function () {
		stop(num)
	}
}
for (var i = 0; i <= 4; i++) {
	stopPlus(i)
}
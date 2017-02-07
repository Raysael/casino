var inp = document.getElementsByName('r');
var ch = document.getElementsByName('ch');
var cube = document.getElementsByClassName('cube');
var frame = document.getElementsByClassName('frame__cube');
var row = document.getElementsByClassName('row__cube');
		
document.getElementsByClassName('radio')[0].onclick = function() {

	function rowShow(index, show) {
		for (var j = 0; j < 3; j++) {
			if (j == index) {
				row[j].style.display = show;
			}
			else {
				if (show == 'flex') {
					row[j].style.display = 'none';
				}
				else {
					row[j].style.display = 'flex';
				}
			}
		}
	}
	
	for (var i = 0; i < inp.length; i++) {
		if (inp[i].checked) {
				switch (i) {
				case 0:
					rowShow(1, 'flex')
					break;
				case 1:
					rowShow(0, 'flex')
					break;
				case 2:
					rowShow(2, 'none')
					break;
				case 3:
					rowShow(1, 'none')
					break;
				default:
					for (var j = 0; j < 3; j++) {
						row[j].style.display = 'flex';
					}
					break;
			}
		}
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
var inp = document.getElementsByName('r');
var ch = document.getElementsByName('ch');
var cube = document.getElementsByClassName('cube');
var frame = document.getElementsByClassName('frame__cube');

		
document.getElementsByClassName('radio')[0].onclick = function() {
	
	var row = document.getElementsByClassName('row__cube');

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

		var y = Math.floor(Math.random()*4) * 90;
		var x = Math.floor(Math.random()*4) * 90;
		var z = Math.floor(Math.random()*4) * 90;

		cube[argument].style.transform = "rotateY(" + y + "deg) rotateX(" + x + "deg) rotateZ(" + z + "deg)"
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
	var size = cube[n].getElementsByClassName('size');

	for (var i = 0; i < size.length; i++) {
		if (!ch[n].checked){
			size[i].style.background = "#444"
		}
		else {
			size[i].style.background = "#000"
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
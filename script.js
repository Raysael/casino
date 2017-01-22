var inp = document.getElementsByName('r');
		var ch = document.getElementsByName('ch');
		var cube = document.getElementsByClassName('cube');
		var frame = document.getElementsByClassName('frame__cube');
		
		document.getElementsByClassName('radio')[0].onclick = function() {
			
			var w__c = document.getElementsByClassName('wrapper__cube')[0];
			var w__c_d = document.getElementsByClassName('wrapper__cube_down')[0];

			if (inp[0].type == "radio" && inp[0].checked) {
				w__c.style.justifyContent = 'center'
				frame[1].style.display = 'none'
				w__c_d.style.display = 'none'
				frame[4].style.display = 'none'
			}
			else if (inp[1].type == "radio" && inp[1].checked) {
				w__c.style.justifyContent = 'center'
				frame[1].style.display = 'block'
				w__c_d.style.display = 'none'
				frame[4].style.display = 'none'
			}
			else if (inp[2].type == "radio" && inp[2].checked) {
				w__c.style.justifyContent = 'space-around'
				frame[1].style.display = 'block'
				w__c_d.style.display = 'flex'
				w__c_d.style.justifyContent = 'center'
				frame[2].style.display = 'block'
				frame[3].style.display = 'none'
				frame[4].style.display = 'none'
			}
			else if (inp[3].type == "radio" && inp[3].checked) {
				w__c.style.justifyContent = 'space-around'
				frame[1].style.display = 'block'
				w__c_d.style.display = 'flex'
				w__c_d.style.justifyContent = 'space-around'
				frame[2].style.display = 'block'
				frame[3].style.display = 'block'
				frame[4].style.display = 'none'
			}
			else if (inp[4].type == "radio" && inp[4].checked) {
				w__c.style.justifyContent = 'space-around'
				frame[1].style.display = 'block'
				w__c_d.style.display = 'flex'
				w__c_d.style.justifyContent = 'space-around'
				frame[2].style.display = 'block'
				frame[3].style.display = 'block'
				frame[4].style.display = 'block'
			}
		}

		document.getElementsByClassName('random__button')[0].onclick = function random() {
			
			function random2(argument) {

				var y = Math.floor(Math.random()*4) * 90;
				var x = Math.floor(Math.random()*4) * 90;
				var z = Math.floor(Math.random()*4) * 90;

				cube[argument].style.transform = "rotateY(" + y + "deg) rotateX(" + x + "deg) rotateZ(" + z + "deg)"
			}

			if (inp[0].checked) {
				if (!ch[0].checked) {
					random2(0)
				}		

			}
			else if (inp[1].type == "radio" && inp[1].checked) {
				if (!ch[0].checked) {
					random2(0)
				}
				if (!ch[1].checked) {
					random2(1)
				}
				
			}
			else if (inp[2].type == "radio" && inp[2].checked) {
				if (!ch[0].checked) {
					random2(0)
				}
				if (!ch[1].checked) {
					random2(1)
				}
				if (!ch[2].checked) {
					random2(2)
				}
			}
			else if (inp[3].type == "radio" && inp[3].checked) {
				if (!ch[0].checked) {
					random2(0)
				}
				if (!ch[1].checked) {
					random2(1)
				}
				if (!ch[2].checked) {
					random2(2)
				}
				if (!ch[3].checked) {
					random2(3)
				}
			}
			else if (inp[4].type == "radio" && inp[4].checked) {
				if (!ch[0].checked) {
					random2(0)
				}
				if (!ch[1].checked) {
					random2(1)
				}
				if (!ch[2].checked) {
					random2(2)
				}
				if (!ch[3].checked) {
					random2(3)
				}
				if (!ch[4].checked) {
					random2(4)
				}
			}

		}
		function stop(n) {
			var size = cube[n].querySelectorAll('.size');
			var c = document.getElementsByName('ch');
			if (!c[n].checked) {
				c[n].checked = true;
				for (var i = 0; i < size.length; i++) {
					size[i].style.background = "#444"
				}
			}
			else {
				c[n].checked = false;
				for (var i = 0; i < size.length; i++) {
					size[i].style.background = "#000"
				}
			}
		}
		frame[0].onclick = function () {
			stop(0)
		}
		frame[1].onclick = function () {
			stop(1)
		}
		frame[2].onclick = function () {
			stop(2)
		}
		frame[3].onclick = function () {
			stop(3)
		}
		frame[4].onclick = function () {
			stop(4)
		}
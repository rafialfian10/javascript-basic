
var tanya = true;
var angka = 2;

while (tanya ){
	var player = prompt('pilih dari angka 1 sampai 10. Anda mempunyai Kesempatan 3X!');

	var computer = Math.random();
	if(computer < 0.1){
		computer = '1';
		}else if(computer >= 0.1 && computer < 0.2){
			computer = '2';
		}else if(computer >= 0.2 && computer < 0.3){
			computer = '3';
		}else if(computer >= 0.3 && computer < 0.4){
			computer = '4';
		}else if(computer >= 0.4 && computer < 0.5){
			computer = '5';
		}else if(computer >= 0.5 && computer < 0.6){
			computer = '6';
		}else if(computer >= 0.6 && computer < 0.7){
			computer = '7';
		}else if(computer >= 0.7 && computer < 0.8){
			computer = '8';
		}else if(computer >= 0.8 && computer < 0.9){
			computer = '9';
		}else{
			computer = '10';
		}

		var hasil = '';


		
		if(angka > 0){
			tanya = confirm('Kesempatan anda masih ' + angka-- + 'X, mainkan lagi?');
		} else if(angka == 0){
			tanya = confirm('Kesempatan anda sudah habis.\nIngin main lagi?');
		}else{
			alert('Terima kasih sudah bermain!');
		}
		
}

	
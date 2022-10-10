
// var tanya = true;

// while(tanya){
// 	var player = prompt('Masukkan salah satu dari 3 pilihan berikut, \ncontoh : (gajah, manusia, Semut)');

// 	//menangkap bilangan komputer
// 	//Membangkitkan bilangan random
// 	var computer = Math.random(); // Math.random berfungsi untuk memunculkan random angka dari mulai 0 - 1. angka inilah yang digunakan untuk computer dalam menetukan pilihan dari gameSuit (gajah, manusia, dan semut).

// 	if(computer < 0.33){
// 		computer = 'gajah';
// 	} else if (computer >= 0.33 && computer < 0.66){
// 		computer = 'manusia';
// 	} else{
// 		computer = 'semut';
// 	}
	 

// 	//Menentukan rules
// 	var hasil = '';

// 	if(player == computer){
// 		hasil = 'SERI';
// 	}else if (player == 'gajah'){
// 		if (computer == 'manusia'){
// 			hasil = 'MENANG';
// 		} else {
// 			hasil = 'KALAH';
// 		}
// 	} else if (player == 'manusia'){
// 		if(computer == 'gajah'){
// 			hasil = 'KALAH';
// 		} else {
// 			hasil = 'MENANG';
// 		}
// 	} else if (player == 'semut'){
// 		if (computer == 'gajah'){
// 			hasil = 'MENANG';
// 		} else {
// 			hasil = 'KALAH';
// 		}
// 	} else {
// 		hasil = 'Pilihan salah, masukkan (gajah, manusia, atau semut)';
// 	}

// 	//tampilan hasilnya
// 	alert('player memilih ' + player + ', dan computer memilih ' + computer + ', hasilnya adalah ' + hasil);

// //confirm apakah ingin mengulangi permainan, jika ok masuk ke looping, jika cancel masuk ke alert
// 	tanya = confirm('Ingin Main Lagi?');

// }
// alert('Terima kasih sudah bermain!');


let tanya = true;

while(tanya){
	let player = prompt("Masukkan salah satu dari pilihan berikut : (Gajah, Manusia, Semut)");

	let computer = Math.random();
		if(computer < 0.33){
			computer = 'Gajah';
		} else if (computer >= 0.33 && computer < 0.66){
			computer = 'Manusia';
		} else {
			computer = 'Semut';
		}


	let hasil = '';

	if (player === computer){
		hasil = "DRAW";
	} else if (player === "Gajah"){
		if (computer === "Manusia"){
			hasil = "WIN";
		} else {
			hasil = "LOSE";
		}
	} else if (player === 'Manusia'){
		if(computer === "Semut"){
			hasil = "WIN";
		} else {
			hasil = "LOSE";
		}
	} else if (player === "Semut"){
		if (computer === "Gajah"){
			hasil = "WIN";
		} else {
			hasil = "LOSE";
		}
	} else {
		alert("masukkan kata yang telah disediakan (Gajah, Manusia, Semut)!");
	}
	
	alert('Player memilih ' + player + ', Computer memilih ' + computer + ', Hasilnya adalah ' + hasil);

	tanya = confirm("Apaka anda ingin bermain lagi?");
}

alert("Terima kasih sudah bermain!");


	


//Rekursif adalah sebuah fungsi yang memanggil dirinya sendiri

//contoh rekusif

// function test(){
// 	return test();
// }
// test();

//jika fungsi ini dijalankan maka fungs ini akan terus memanggil dirinya sendirinya

//-------------------------------------------------------------------------------------------------------------------------------------------------

//contoh rekursif lain:

// function tampilAngka(n){ //fungsi ini akan menerima parameter

// 	console.log(n);
// 	return tampilAngka(n-1); //nilai 10(parameter) akan terus dikurangi 1
// }
// tampilAngka(10);

//jika fungsi ini dijalankan, maka akan terjadi error karena pengulangannya tidak akan pernah berakhir.
//Untuk mengatasi hal tersebut, kita harus membuat kondisi jika pengulangannya sampai angka 1 maka harus dihentikan pengulangnnya, kondisi tersebut disebut dengan "Base case"(kondisi akhir dari rekursif yang menghasilkan nilai)

//-------------------------------------------------------------------------------------------------------------------------------------------------

//contoh reekursif dengan menggunakan base case

// function cetakAngka(n){

// 	if( n === 0){ //inilah adalah basecase yang berfungsi untuk menghentikan pengulangan. return tidak ada nilai karena return ini berfugsi untuk menghentikan nilai saja.
// 		return;
// 	}

// 	console.log(n);

// 	return cetakAngka(n-1);
// }
// cetakAngka(20);

//-------------------------------------------------------------------------------------------------------------------------------------------------

//contoh lain rekursif. rekursif biasanya digunakan untuk faktorial. contoh: 5! = 5 x 4 x 3 x 2 x 1

// function faktorial(n){

// 	if (n === 0){ 
// 		return 1;
// 	}
	
// 	return n * faktorial( n - 1 );
// }
// console.log(faktorial(5)); //hasil dari faktorial 5 = 120

//Penting : semua looping bisa dibuat rekursif, tapi tidak sebaliknya.
/*Implementasi rekursif
	1.Menggantikan looping
	2.Fibonacci
	3.Pencarian daan penelusuran pada struktur data list dan tree 
	4.Bahasa pemrograman yang tidak memiliki looping seperti Haskell, Erlang, Prolog dll.
*/

//-------------------------------------------------------------------------------------------------------------------------------------------------

//contoh dengan looping

// function factorial(n){

// 	var hasil = 1;
// 	for(var i = n; i > 0; i-- ){
// 		hasil *= i;
// 	}
// 	return hasil;
// }

// console.log(factorial(5));

var tanya = true;

while(tanya === true){
	let player = prompt('Masukkan angka untuk dilakukan factorial:');

	function factorial(player){
		
		if(player === 0){
			return 1;
		}
		return  player * factorial(player - 1);
	}
	alert('factorial dari ' + player + ' adalah ' + player * factorial (player - 1) );

	tanya = confirm('Apakah anda ingin bermain lagi?');
}	

alert('terima kasih sudah bermain!');












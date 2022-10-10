// var jmlMobil = 20;
// var mobilAktif = 5;


// for (var noMobil = 1; noMobil <= jmlMobil; noMobil++ ){

// 	if( noMobil <= 4 && noMobil !== 1 && noMobil !== 2 || noMobil === 20 || noMobil === 16  && noMobil !== 5){
// 		console.log('Mobil nomor ' + noMobil + ' sedang beroperasi');
// 	}else if(noMobil === 5 || noMobil === 6 || noMobil === 8 || noMobil === 9 || noMobil === 10 || noMobil === 18) {
// 		console.log('Mobil nomor ' + noMobil + ' sedang lembur');
// 	}else if(noMobil === 7 || noMobil === 11 || noMobil === 15 || noMobil === 2 || noMobil === 17) {
// 		console.log('Mobil nomor ' + noMobil + ' sedang diperbaiki');
// 	}else{
// 	console.log('Mobil nomor ' + noMobil + ' sedang tidak beroperasi');
// 	}
// }

let jmlMobil = 15;
let mobilAktif = 5;

for (let noMobil = 1; noMobil <= jmlMobil; noMobil++){
	if(noMobil <= 5 && noMobil !== 2 && noMobil !== 5 || noMobil === 14 || noMobil === 12){
		console.log("Gocar " + noMobil + " sedang beroperasi");
	} else if (noMobil === 2) {
		console.log("Gocar " + noMobil + " sedang tidak beroperasi");
	} else if (noMobil === 11 || noMobil === 15 ){
		console.log("Gocar " + noMobil + " sedang diperbaiki");
	} else if (noMobil === 13 || noMobil === 7){
		console.log('Gocar ' + noMobil + ' sedang masuk bengkel');
	} else {
		console.log("Gocar " + noMobil + " sedang tidak beroperasi");
	}
}
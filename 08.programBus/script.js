var penumpang = ['Rafi', 'Ervin', undefined, 'Ali'];
var tambahPenumpang = function(namaPenumpang, penumpang){


	//jika bus/penumpang kosong
	if ( penumpang.length == 0 ) {
		//maka tambah penumpang diawal array
		penumpang.push(namaPenumpang);
		//kembalikan isi array dan keluar dari function
		return penumpang;
	} else {
		//telusuri seluruh kursi dari awal(dengan melakukan looping)
		for (k = 0; k < penumpang.length; k++ ) {// variabel k diibaratkan sebagai kursi
			//jika ada kursi kosong
			if ( penumpang[k] == undefined ) {
				//tambah penumpang di kursi tersebut
				penumpang[k] = namaPenumpang;
				//kembalikan isi array dan keluar dari function
				return penumpang;
			}

			//jika sudah ada nama yang sama
			else if (penumpang[k] == namaPenumpang) {
				//tampilkan pesan kesalahannya 
				console.log(namaPenumpang + ' sudah ada didalam bus.');
				//kembalikan isi array dan keluar dari function
				return penumpang;			
			}

			//jika seluruh kursi terisi
			else if ( k == penumpang.length - 1 ) { // ditelusuri sampai kursi terakhir, jumlah elemen pada array adalah 4 sedangkan indexnya 3 karena dimulai dari 0 karena itu jumlah penumpang - 1
				//tambah penumpang di akhir array
				penumpang.push(namaPenumpang);
				//kembalikan isi array dan keluar dari function
				return penumpang;
			}
		}
	}

}

//-------------------------------------------------------------------------------------------------------------------------------------------------

var hapusPenumpang = function(namaPenumpang, penumpang){

	//jika bus kosong
	if (penumpang.length == 0){
		//tampilkan pesan bahwa bus kosong, dan tidak mungkin ada penumpang turun
		console.log('Bus sedang kosong.');
		//kembalikan isi array dan keluar dari function
		return penumpang;
	} else {
		//telusuri seluruh kursi dari awal
		for (k = 0; k < penumpang.length; k++){
			//jika nama penumpang sesuai
			if ( penumpang[k] == namaPenumpang ){
				//hapus penumpang dengan mengubah namanya menjadi undefined
				penumpang[k] = undefined;
				//kembalikan isi array dan keluar dari function
				return penumpang;
			}
			//jika tidak ada nama yang sesuai 
			else if ( k == penumpang.length - 1 ){ // ditelusuri sampai kursi terakhir
				//tampilkan pesan kesalahan
				console.log(namaPenumpang + ' tidak ada di dalam bus.');
				//kembalikan isi array dan keluar dari function
				return penumpang;
			}
		}
	}
}
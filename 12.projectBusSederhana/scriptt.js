
//Program Bus

function Bus(namaSopir, jurusan, penumpang, pendapatan){

	this.namaSopir = namaSopir;
	this.jurusan =jurusan;
	this.penumpang = penumpang;
	this.pendapatan = pendapatan;

	//Method penumpang naik
	this.penumpangNaik = function (namaPenumpang, pembayaran){
		//jika Bus kosong
		if(this.penumpang.length === 0){
		//maka array akan diisi oleh penumpang
		this.penumpang.push(namaPenumpang);
		//sekaligus memasukkan dan menjumlahkan seluruh pembayaran 
		this.pendapatan = pembayaran;
		//kembalikan nilai dan keluar dari function
		return this.penumpang;
		} else{
			//telusuri seluruh kursi dari awal dengan looping
			for (var k = 0; k < this.penumpang.length; k++){
				//jika terdapat kursi kosong/undefined
				if(this.penumpang[k] == undefined){
					//maka kursi akan diisi terlebih dahulu
					this.penumpang[k] = namaPenumpang;
					//sekaligus memasukkan pembayaran dan melakukan total pendapatan 
					this.pendapatan += pembayaran;
					//kembalikan nilai dan keluar dari function
					return this.penumpang;
				} //jika terdapat penumpang yang sama 
				else if (this.penumpang[k] == namaPenumpang) {
					//tampilkan pesan kesalahan
					console.log(namaPenumpang + ' sudah ada didalam bus.');
					//kembalikan nilai dan keluar dari function 
					return this.penumpang;
				} //jika kursi bus tidak ada yang kosong
				else if (k == this.penumpang.length - 1) {
					//maka penumpang duduk di kursi paling akhir 
					this.penumpang.push(namaPenumpang);
					//sekaligus memasukkan pembayaran dan melakukan total pendapatan 
					this.pendapatan += pembayaran;
					//kembalikan nilai dan keluar dari function 
					return this.penumpang;
			}
		}
	}
}

	this.penumpangTurun = function(namaPenumpang){
		//jika bus kosong
		if (this.penumpang.length === 0){
		//tampilkan pesan kesalahan
		console.log('Bus tidak terdapat penumpang');
		//kembalikan nilai dan keluar dari function
		return this.penumpang;
		} else {
			//telusuri seluruh kursi dari awal dengan looping
			for (k = 0; k < this.penumpang.length; k++){
				//jika terdapat penumpang keluar
				if (this.penumpang[k] == namaPenumpang){
				//maka penumpang diisi dengan undefined
				this.penumpang[k] = undefined;
				//kembalikan nilai dan keluar dadri function
				return this.penumpang; 
				} //jika penumpang yang turun tidak ada didalam bus
				else if (k == this.penumpang.length - 1){
					// maka tampilkan pesan
					console.log(namaPenumpang + ' tidak ada didalam bus.');
					//kembalikan nilai dan keluar dadri function
					return this.penumpang;
				}
			}
		}
	}

}

var bus1 = new Bus('Rafi Alfian', ['Jepara', 'Jakarta'], [], 0);

var bus2 = new Bus('Ervin Alfianto', ['Jepara', 'Bandung'], [], 0);


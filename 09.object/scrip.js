// //Object adalah kumpula nilai yan memiliki nama. Jika array adalah variabel yang lebih sakti, maka objek adalah array yang lebih sakti
// /*Objek pada bahasa pemrograman lain
// 	1. PHP : Assosciative Array
// 	2. Python : Dictionaries
// 	3. C : Hash Tables
// 	4. java : hash Maps 
// 	5. ruby & Perl : Hashes */

// 	//contoh object :

// 	var mahasiswa = { //variabel yang ada didalam objek disebut dengan property sedangkan function yang ada didalam objek disebut method
// 		nama : 'Rafi Alfian', //string 
// 		nim : 'A710170021',
// 		prodi : "Teknik Informatika",
// 		umur : 25, // interger
// 		lulus :true, //bollean
// 		ipSemester : [3.00, 3.40, 3.58, 3.32, 3.82, 3.76], //array
// 		ipKumulatif : function(){ //function didalam objek
// 			var total = 0;
// 			var ip = this.ipSemester;

// 			for(var i = 0; i < ip.length; i++){
// 				total += ip[i];
// 			}
// 			return total / ip.length;
// 		}
// 	} 
// 	//cara memanggilnya
// 	mahasiswa.ipKumulatif();

// 	//contoh objek 2

// 	var ktp = {

// 		nama : "Rafi Alfian",
// 		tglLahir : "24 Agustus 1196",
// 		alamat : { //objek ddalam objek 
// 			jalan : 'Desa Dorang RT 01/RW 02',
// 			kecamatan : 'Nalumsari',
// 			kabupaten : 'Jepara',
// 			provinsi : 'Jawa tengah',
// 		}, 
// 		agama : 'Islam',
// 		negara : 'Indonesia',
// 		cetak : function(){

// 			return 'Halo, nama saya adalah ' + this.nama + ', saya lahir pada ' +  this.tglLahir + ', alamat saya di ' + this.alamat.jalan + ', ' +this.alamat.kecamatan + ', ' + this.alamat.kabupaten + ', ' + this.alamat.provinsi + ', agama saya adalah ' + this.agama + ', dan saya adalah warga negara ' + this.negara;
// 		}
// 	}

// 	//cara memanggilnya
// 	ktp.cetak();



let mahasiswa = {
	nama: 'Rafi Alfian',
	nim: 'A710170021',
	prodi: 'Teknik Informatika',
	lulus: true,
	ipSemester: [3.50, 3.40, 3.15, 2.85, 3.20],
	ipKumulatif: function(i){
		let total = 0;

		let ipTotal = this.ipSemester;

		for(i = 0; i < this.ipSemester.length; i++){
			total += this.ipSemester[i];
		}
		return total / this.ipSemester
	}
}

let mahasiswa1 = {
	nama: 'Rafi Alfian',
	nim: 'A710170021',
	prodi: 'Teknik informatika',
	alamat: { 
				desa: 'Desa Dorang RT 01 / RW 02',
				kecamatan: 'Nalumsari',
				kabupaten: 'Jepara',
				provinsi: 'Jawa tengah'
			},
	agama: 'Islam',
	negara: 'Indonesia',
	
	cetak: function(){
		return `nama saya adalah ${this.nama} <br> nim ${this.nim} <br> prodi ${this.prodi} <br> saya tinggal di desa ${this.alamat.desa} kecamatan ${this.alamat.kecamatan} kabupaten ${this.alamat.kabupaten} provinsi ${this.alamat.provinsi} <br> agama saya adalah ${this.agama} <br> saya adalah warga negara ${this.negara}`;
	}
}






//Object adalah kumpula nilai yan memiliki nama. Jika array adalah variabel yang lebih sakti, maka objek adalah array yang lebih sakti
/*Objek pada bahasa pemrograman lain
	1. PHP : Assosciative Array
	2. Python : Dictionaries
	3. C : Hash Tables
	4. java : hash Maps 
	5. ruby & Perl : Hashes */

//contoh beberapa cara dalam membuat object
	// 1. Object Literal

var mahasiswa1 = { // object mahasiswa yang memiliki 4 property

	nama : 'Rafi Alfian',
	nim : 'A710170021',
	email : 'a710170021@student.ums.ac.id',
	prodi : 'Teknik Informatika'
}

var mahasiswa2 = { // object mahasiswa yang memiliki 4 property

	nama : 'Ervin Alfianto',
	nim : 'A510140115',
	email : 'a710140115@student.ums.ac.id',
	prodi : 'PGSD'
}

	// cara memanggil =
	mahasiswa1;
	mahasiswa2;

//-------------------------------------------------------------------------------------------------------------------------------------------------
	
	// 2. Function Declaration

 function cetakObjekMahasiswa(nama, nim, email, prodi){

	var mahasiswa = {};
	mahasiswa.nama = nama;
	mahasiswa.nim = nim;
	mahasiswa.email = email;
	mahasiswa.prodi =prodi;

	return mahasiswa;
}

// cara memanggil
var mhs1 = cetakObjekMahasiswa('Rafi Alfian', 'A710170021', 'a710170021@student.ums.ac.id', 'Teknik Informatika');

var mhs2 = cetakObjekMahasiswa('Ervin Alfianto', 'A510140115', 'a710140115@student.ums.ac.', 'PGSD')

//cara ini lebih efektif dari pada object literal karena dengan cara ini hanya perlu membuat object-nya sekali tapi bisa dipanggil berkali-kali

//-------------------------------------------------------------------------------------------------------------------------------------------------

	// 3. construction Function (keyword new). method ini mirip dengan declaration yang membedakannya adalah cara memanggilnya

function Mahasiswa(nama, nim, email, prodi){ //bisanyan para programmer mengawali nama functionnya diawali dengan huruf besar jika dengan constructor

//isinya beda dengan function declaration,pada constructor tidak perlu membuat variabel yang diisi dengan objek dan return karena . hanya menambahkan this.nama mengacu pada parameter sedangkan nama akan menerima argumen dari user. jadi this.nama akan ditimpa dengan nama. 
//ketika kita menggunakan constructor sama saja dengan

	//var this = {};
	this.nama = nama; 
	this.nim = nim;
	this.email = email;
	this.prodi = prodi;
	//return this;
}

	//cara memanggil

var mhs3 = new Mahasiswa('Rafi Alfian', 'A710170021', 'a710170021@student.ums.ac.id', 'Teknik Informatika');

var mhs4 = new Mahasiswa('Ervin Alfianto', 'A510140115', 'a710140115@student.ums.ac.', 'PGSD')


	// 4. oject.create()


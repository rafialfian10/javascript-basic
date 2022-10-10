
//this adalah sebuah keyword spesial yang sudah otomatis didefinisikan pada setiap function

// console.log(this); //ketika melakukan console.log pada thi, maka secara defalt isinya adalah window atau disebut dengan objek global. isi pada this sama persis dengan window sehingga apabila ditulis console.log(window === this); maka hassilnya adalah true.

//contoh beberapa cara dalam membuat object dengan menggunakan this

	// 1. function declaration

function hallo(){
	console.log(this);
	console.log('Hello World 1 (function declaration)');
}

	//cara memanggilnya bisa hallo() atau bisa this.hallo() / window.hallo(); ini sama saja

this.hallo();
//this pada function declaration akan mengembalikan objek global

//-------------------------------------------------------------------------------------------------------------------------------------------------

	// 2. object literal

var obj = {nama : 'Rafi Alfian', nim : 'A710170021', prodi : 'Teknik Informatika'};
obj.hallo = function(){
	console.log(this);
	console.log('Hello World 2 (object literal)');
}
 //cara memanggilnya

obj.hallo();
//this pada object literal akan mengembalikan objek yang bersangkutan / objek milik driny sendiri.

//-------------------------------------------------------------------------------------------------------------------------------------------------

	// 3. constructor

function HelloWorld(){
	console.log(this);
	console.log('Hello World (constructor)');
}

 //cara memanggilnya dengan menggunakan new, jika tidak menggunakan new, maka sama saja dengan memanggil function declaration (berisi window / objek global tapi begitu memakai new maka hasilnya akan mengembalikan objek yang baru dibuat PENTING : bukan objek pada function.)

new HelloWorld();
//this pada constructor akan mengembalikan objek yang baru dibuat /objek pada new HelloWorld() sendiri yang baru dibuat, bukan objek pada function. misal jika disimpan dalam variabel

var obj1= new HelloWorld(); //this akan dikebalikan pada obj1
var obj2= new HelloWorld(); //this akan dikebalikan pada obj2



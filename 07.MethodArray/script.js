var Arr = ['Rafi', 'Ali', 'Ervin', 'Chanief', 'As-salam'];

//Menampilkan seluruh isi array dengan looping for
for ( var i = 0; i < Arr.length; i++){
	console.log('Pemain cadangan FC ke ' + (i+1) + ' adalah ' + Arr[i] );
}

//beberapa Method pada array

//length berfungsi untuk mengetahui berapa jumlah seluruh array
console.log('Method length : ' + Arr.length);



//join() berfungsi untuk menggabungkan isi array dan mengubahnya menjadi array
console.log('Method join() : ' + Arr.join(' - '));



//push() berfungsi untuk menambah elemen akhir pada array
Arr.push('Dayu', 'Jauhari', 'Saiful'); // bisa lebih dari 1 elemen
console.log('Method push() ; ' + Arr.join(' - '));



//pop() berfungsi untuk menghapus elemen akhir pada array
Arr.pop(); // jika pop hanya bisa menghapus 1 elemen, jika ingin menghapus lagi maka ditulis kembali.
Arr.pop();
console.log('Method pop() : ' + Arr.join(' - '));



//unshift() berfungsi untuk menambahkan elemen awal pada array
Arr.unshift('Johan'); // bisa lebih dari 1 elemen
console.log('Method unshift() : ' + Arr.join(' - '));



//shift() berfungsi untuk menghapus elemen awal pada array
Arr.shift(); //jika shift hanya bisa menghapus 1 elemen, jika ingin menghapus lagi maka ditulis kembali.
console.log('Method shift() : ' + Arr.join(' - '));



//splice() / menyambung berfungsi untuk menambah elemen di bagian tengah pada array
//(indexAwal, mauDiHapusBerapa, ElemenBaru//nama1, elemenbaru/nama2 ...)
var Arr2 = ['Rafi', 'Ali', 'Ervin', 'Chanief', 'As-salam'];
Arr2.splice(3, 0, 'Irvan', 'Jauhari'); // disini saya akan menambahkan elemen baru setelah ervin setelah ervin berart indexnya adalah 3, 0(tidak ada yang dihapus)
console.log('Method splice() : ' + Arr2.join(' - '));



//slice() / mengiris berfungsi untuk menghapus elemen di bagian tengah pada array
//(mauIriDariIndexAwalBerapa, mauIriDariIndexAkhirBerapa)
var Arr2 = ['Rafi', 'Ali', 'Ervin', 'Chanief', 'Irvan', 'As-salam'];
var Arr3 = Arr2.slice(3, 5); // disini saya akan mengiris elemen Chanief dan Irvan, Chanief indexnya = 3 dan Irvan Indexnya = 4, maka ditulis index 3, 5, maka hasilnya tinggal chanief dan Irvan, PENTING: slice dimasukkan ke variabel baru
console.log('Method slice() : ' + Arr3.join(' - '));



//forEach() berfungsi untuk menampilkan selurh isi dari array 
var nama = ['Rafi', 'Ali', 'Ervin', 'Chanief', 'Irvan', 'As-salam'];

//buat function expression lalu simpan kedalam variabel. kemudian panggil dengan forEach
// var cetak = function(e, i){
// 	console.log(e, i);
// }
// nama.forEach(cetak);

//atau bisa dengan meenggunakan forEach yang didalamnya diisi dengan function expression, cara ini hasilnya sama dengan cara diatas
nama.forEach(function(e, i){
	console.log('Method forEach() : nama pemain cadadngan FC ke ' + (i+1) + ' adalah ' + e ); //karena forEach tidak mengembalikan nilaai array, maka tidak bisa mengunakan join()
})


//map() berfungsi untuk menampilkan seluruh isi dari array tetapi lebih baik dan lebih fleksibel
var angka = [1,4,7,5,20,3,9,30,8,10,6,2];

angka2 = angka.map(function(x){

	return x * 2; //lbih fleksibel
})
console.log('Method map() : ' + angka2.join(' - ')); //karena map mengembalikan nilaai array, maka bisa mengunakan join()


//sort() berfungsi untuk mengurutkan nilai elemen pada array
// console.log(sort()); ini hasilnya adalah 1,10,2,20,3,30,4,5,6,7,8,9, jadi yang durutkan karakter pertamanya dulu, untuk mengatasinya maka gunakan function 
var angka3 = angka.sort(function(a,b){
	return a-b;
})
console.log('Method sort() :' + angka3.join(' - '));


//filter() berfungsi untuk mencari nilai array dan mengembalikan nilai array. filter bisa menampilkan banyak nilai  
angka4 = angka.filter(function(x){ //apakah didalam array angka terdapat nilai 10, jika ada maka ditampilkan nilai array 10, jika tidak ada maka kosong,bisa juga x > 8, tampilkan nilai x yan lebih besar dari 8
	// return x == 10;
	return x > 8;
})
console.log('Method filter() : ' + angka4.join(' - '));



//find() berfungsi untuk mencari nilai array dan tidak mengembalikan nilai array. filter bisa menampilkan satu nilai
angka5 = angka.find(function(x){ 
	return x == 7;
})
console.log('Method find() : ' + angka5); //karena find() tidak mengembalikan nilai array, maka tidak bisa menggunakan join()




	











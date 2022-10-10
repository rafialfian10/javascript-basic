
var tanya = true;

while(tanya) { // selama tanya bernilai true maka lakukan perinta dibawah ini
var input = prompt('Silahkan pilih game / anime : \n contoh anime : (Shingeki no Kyojin, one Punch Man, Death Note)\n contoh game : (Pro Evolution Soccer, Metal Gear Solid, Resident Evil Series)');

	switch(input){
		case 'Shingeki no Kyojin' : 
			alert('Ini adalah anime!');
			break;
		case 'One Punch Man' :
			alert('ini adala anime');
			break;
		case 'Death Note' : 
			alert('Ini adalah anime!');
			break;
		case 'Pro Evolution Soccer' : 
			alert('Ini adalah game!');
			break;
		case 'Metal Gear Solid' : 
			alert('Ini adalah game!');
			break;
		case 'Resident Evil' : 
			alert('Ini adalah game!');
			break;
		default :
			alert('masukkan kata yang telah disediakan!');
			break;
	}

tanya = confirm('masukkan pilihan lagi?'); // jika ok bernilai true dan laukan perulangan, jika cancel bernilai false, maka ffungsi berhenti.

}
alert('Terima Kasih!');

var kubus  = '';
console.log('Persegi');
for (var i = 0; i < 5; i++){
	for (var j = 0; j < 10; j++){
		kubus += '*';
	}
	kubus += '\n';
}
console.log(kubus);
console.log('\n');
//-----------------------
var persegiPanjang = '';
console.log('Persegi Panjang');
for (var i = 0; i < 5; i++){
	for (var j = 0; j < 20; j++){
		persegiPanjang += '*';
	}
	persegiPanjang += '\n';
}
console.log(persegiPanjang);
console.log('\n');

//-----------------------
var segitiga1 = '';
console.log('Segitiga 1');
for (var i = 0; i < 10; i++){
	for (var j = 0; j <= i; j++){
		segitiga1 += '*';
	}
	segitiga1 += '\n';
}
console.log(segitiga1);
console.log('\n');

//-----------------------
var segitiga2 = '';
console.log('Segitiga 2');
for (var i = 0; i < 10; i++){
	for (var j = 10; j > i; j--){
		segitiga2 += '*';
	}
	segitiga2 += '\n';
}
console.log(segitiga2);
console.log('\n');

//-----------------------
var sss = '';
var b = 10;
console.log('Segitiga sama kaki');
for (var i =  1; i <= b; i++){
	for (var j = 1; j <= b - i; j++){
		sss += ' ';
	}
	for (var k = 1; k < 2 * i ; k++){
		sss += '*';
	}
	
	sss += '\n';
}
console.log(sss);
console.log('\n');

//-----------------------
var jg = '';
var b = 10;

console.log('Jajar Genjang');
for (var i =  1; i <= b; i++){
	for (var j = 1; j <= b - i; j++){
		jg += ' ';
	}
	for (var k = 1; k < 2 * i ; k++){
		jg += '*';
	}
	jg += '\n';
}	

	for (var i =  10; i > 0; i--){
	for (var j = 0; j < b - i; j++){
		jg += ' ';
	}
	for (var k = 1; k < 2 * i ; k++){
		jg += '*';
	}
	
	jg += '\n';

	
}
console.log(jg);
console.log('\n');




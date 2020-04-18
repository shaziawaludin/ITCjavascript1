console.log("Oke ini berhasil");

var x = 10;
var y = 20;

let xht = document.querySelector('#x');
xht.innerHTML = x;

let yht = document.querySelector('#y');
yht.innerHTML = y;

let tambah = document.querySelector('#tambah');
tambah.innerHTML = x + y;

let kurang = document.querySelector('#kurang');
kurang.innerHTML = x - y;

if(x > y ){
  let lebih = document.querySelector('#lebih');
  lebih.innerHTML = "Ya, X lebih besar";
}
else{
  let lebih = document.querySelector('#lebih');
  lebih.innerHTML = "Tidak!";
}

if(x < y ){
    let kecil = document.querySelector('#kecil');
    kecil.innerHTML = "Ya, X lebih kecil";
  }
  else{
    let kecil = document.querySelector('#kecil');
    kecil.innerHTML = "Tidak!";
  }
//silahkan cari kata terpanjang dari kalimat tersebut, jika ada kata dengan panjang yang sama silahkan ambil salah satu

let kalimat = "Saya sangat senang mengerjakan soal algoritma";
let kata = kalimat.split(" ");
let kataTerpanjang = "";

for (let i = 0; i < kata.length; i++) {
  if (kata[i].length > kataTerpanjang.length) {
    kataTerpanjang = kata[i];
  }
}

console.log("2. " + kataTerpanjang + " :", kataTerpanjang.length + " karakter");
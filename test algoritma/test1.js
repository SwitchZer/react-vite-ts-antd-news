//Terdapat string "NEGIE1", silahkan reverse alphabet nya dengan angka tetap diakhir kata Hasil = "EIGEN1"

function reverseWordWithNumber(word) {
    const number = word.slice(-1)
    const reversed = word.slice(0, -1).split("").reverse().join("")
    return reversed + number
  }

console.log(reverseWordWithNumber("NEGIE1"))
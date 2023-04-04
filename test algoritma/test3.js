//Terdapat dua buah array yaitu array INPUT dan array QUERY, silahkan tentukan berapa kali kata dalam QUERY terdapat pada array INPUT

const INPUT = ['xc', 'dz', 'bbb', 'dz'];
const QUERY = ['bbb', 'ac', 'dz'];

const output = QUERY.map((query) => {
  let count = 0;
  for(let i = 0; i < INPUT.length; i++) {
    if(INPUT[i] === query) {
      count++;
    }
  }
  return count;
});

console.log("3. " + output);
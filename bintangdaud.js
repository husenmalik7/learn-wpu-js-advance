let s = "";
for (let i = 9; i >= 1; i--) {
  for (let j = 1; j <= i; j++) {
    s = s + " " + j;
  }
  s = s + "\n";
}

// let s = "";
// for (let i = 1; i <= 3; i++) {
//   for (let j = 1; j <= i; j++) {
//     s = s + " " + j;
//   }
//   s = s + "\n";
// }

console.log(s);

// Y1
let items = [""]
let sizeArr = parseInt(prompt(`số lượng từ cần nhập`))
for (let index = 0; index < sizeArr; index++) {
    let a = prompt(`nhap vào từ thứ ${index + 1}`)
    items.push(a)
}
let longestWord = '';
items.forEach((item) => {
  const words = item.split(" ");
  words.forEach((word) => {
    if (word.length >= longestWord.length) {
      longestWord = word
    }
  });
});
console.log(longestWord)
// Y2
const array = [60, 40, 55, 75, 64]
const newarr = []
let sum1 = 0
let sum2 = 0

for (let i = 0; i < array.length; i++) {
    if (i % 2 != 0) {
        sum2 += array[i]
    }else { 
        sum1 += array[i]
    }
}
newarr.push(sum1)
newarr.push(sum2)
console.log(newarr)
// Phan web
const hexvalues = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
let randomColor = () => {
  let hex = "#";
  for(let i = 0; i < 6; i++){
    let randomIndex = Math.floor(hexvalues.length * Math.random());
    let randomValue = hexvalues[randomIndex];
    hex = hex + randomValue;
  }
  return hex;
}
let randomColorButton = document.getElementById('generateColorButton');
randomColorButton.onclick = () => {
  document.body.style.backgroundColor = randomColor();
};
let colorInput = document.querySelector('#color');
let hexInput = document.querySelector('#hex');
colorInput.addEventListener('input', () =>{
    let color = colorInput.value;
    hexInput.value = color;
    document.querySelector('body').style.backgroundColor = color;
});
// Ý gradient e k biết làm ạ
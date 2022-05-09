// a. Khởi tạo 4 kiểu camel case 
let yourName = prompt('Please enter your name', 'Nguyễn Văn A');
let yourHeight = prompt('please enter your height (m)', '1.7');
let yourLovesHeight = prompt('please enter your love height (m)', '1.6');
let yourWeight = prompt('please enter your weight (Kg)', '60');
// b. Tính toán kết quả
// Tổng c.c
let totalHeight = Number(yourHeight)+Number(yourLovesHeight);
let deviant = Number(yourHeight)-Number(yourLovesHeight);
let bMIdex = Number(yourWeight/(yourHeight*2));
// c. In ra
console.log(`Xin chào ${yourName}`);
console.log(`Chiều cao của bạn đã nhập là ${yourHeight}`);
console.log(`Chiều cao của ngừi iu bạn là ${yourLovesHeight} `)
console.log(`Tổng chiều cao của 2 bạn là ${totalHeight}`);
console.log(`Độ chênh lệch của 2 bạn là ${deviant}`)
console.log(`Sau khinh tính toán BMI của bạn là ${bMIdex}`)
// d. Nâng cao if...else
if (deviant >= 10) { console.log(`chiều cao hợp lí`)  
} else if (deviant<10) 
    {console.log(`bạn nên uống thêm sữa`)}
  else if (bMIdex<=18.5) 
    {console.log(`Gầy`)}
  else if (bMIdex>=19 && bMIdex<=24.9) 
    {console.log(` Bình thường`)}
  else if (bMIdex>=25 && bMIdex<=29.9) 
    {console.log(` Tăng Cân`)}
  else if (bMIdex>=30 && bMIdex<=34.9) 
    {console.log(` Béo phì độ 1`)}
  else if (bMIdex>=35 && bMIdex<=39.9)
    {console.log(` Béo phì độ 2`)}
  else (bMIdex>=40)
    {console.log(` Béo phì độ 3`)}

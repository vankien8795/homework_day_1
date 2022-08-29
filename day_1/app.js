// destruc doi cho 2 phan tu
const [a=2, b=3] = [3,2] ;
// console.log (a,b)

// tinh tong san tien phai tra bang reducer
const array = [
    {
      gia: "3000",
      san_pham: "ao 3 lỗ",
      so_luong: 1
    },
    {
      gia: "12000",
      san_pham: "quan Đen",
      so_luong: 2
    },
    {
      gia: "3000",
      san_pham: "quan dài",
      so_luong: 5
    }
  ];


const sum = array.reduce((total, item) => total  + item.gia*item.so_luong, 0);
// console.log(sum);

//tim so lan xuat hien cua so 2
const chuoiNumber = "12234534342";
const chuoiNumberCut = chuoiNumber.split('');
let count = 0;
console.log(chuoiNumberCut);
 for (let i = 0; i < chuoiNumberCut.length; i++){
    if  (chuoiNumberCut[i] === '2')
    count += 1;

 };
console.log(count)

// const result = chuoiNumber.split('').filter(item => item === '2')

//  console.log(result.length)
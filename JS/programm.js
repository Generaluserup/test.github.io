
//  n = 100;

// nextPrime:
// for (i = 2; i <= n; i++) { 

//   for ( j = 2; j < i; j++) { 
//     if (i % j == 0) continue nextPrime; 
//   }

//   console.log(i); 
// }

// i=0;
// do {
//     if (i==0){
//         console.log(i+"-Это ноль");
//         i++;x
//     } if (i%2==0) {
//         console.log(i+'-Это парное число');
//         i++;
//     } else {
//         console.log(i+"-Это не парное число");
//         i++;
//     } 
// } while (i<=10);
     
/*ЗАДАНИЕ №3
for(i=0; i<=9;console.log(i++)){}
*/

/*ЗАДИАНИЕ №4(1)
lines = prompt("number")
str = " ";
star = "*";
for(var i = 0; i < lines; i++){
    str += star;
    console.log(str);
}*/
/*ЗАДАНИЕ №4(2)
    i = 0,
    j = 0;
    max = prompt("number");
    space = "",
    star = "";

    while (i < max) {
    space = "";
    star = "";
    for (j = 0; j < max - i; j++) space += " ";
    for (j = 0; j < 2 * i + 1; j++) star += "*";
    console.log(space + star);
    i++;
    }
    */



// function romb1(n){
//     for ( i = 1; i <= n / 2; i++) {
//          stars = i * 2 - 1;
//         space = n - stars;
//         str = '';
//         for ( j = 0; j < space / 2; j++) {
//             str += ' ';
//         }
//         for ( j = 0; j < stars; j++) {
//             str += '*';
//         }
//         for ( j = 0; j < space / 2; j++) {
//         str += ' ';
//         }
//         console.log(str);
//     }
//     str = '';
//     for ( i = 0; i < n; i++) {
//         str += '*';
//     }
//     console.log(str);

//     for ( i = 1; i <= n / 2; i++) {
//          stars = n - 2 * i;
//             space = n - stars;
//         str = '';
//         for ( j = 0; j < space / 2; j++) {
//             str += ' ';
//         }
//         for ( j = 0; j < stars; j++) {
//             str += '*';
//         }
//         for ( j = 0; j < space / 2; j++) {
//             str += ' ';
//         }
//         console.log(str);
//     }

// }
// console.log(romb1(11));

/*ЗАДАНИЕ№5
    numb=10000;
    result=0;
    count=0;
    while (numb>50) {
    numb/=2;
    count++;
}
result=numb;
console.log(count,result);
*/
/*ЗАДАНИЕ№6
let month = 0;
month = (Number)(prompt("Enter month "));
switch (month){
    case 1:
        alert("Зима");
        break;
    case 2:
        alert("Зима");
        break;
    case 3:
        alert("Весна");
        break;
    case 4:
        alert("Весна");
        break;
    case 5:
        alert("Весна");
        break;
    case 6:
        alert("Літо");
        break;
    case 7:
        alert("Літо");
        break;
    case 8:
        alert("Літо");
        break;
    case 9:
        alert("Осінь");
        break;
    case 10:
        alert("Осінь");
        break;
    case 11:
        alert("Осінь");
        break;
    case 12:
        alert("Зима");
        break;
    default:
        alert(month)
}
/*ЗАДАНИЕ№7
tc = prompt("Enter temperature in C");
tf = (9/5)*tc + 32;
alert(tf);
*/
/*
let day = (Number)(prompt("Enter day "));
switch (day) {
    case 1:
        alert("Понеділок");
        break;
    case 2:
        alert("Вівторок");
        break;
    case 3:
        alert("Середа");
        break;
    case 4:
        alert("Четвер");
        break;
    case 5:
        alert("П'ятниця");
        break;
    case 6:
    alert("Субота");
    break;
    case 7:
    alert("Неділя");
    break;
default:
    alert("Enter 1-7");
}*/
// ЗАДАНИЕ 1_11
// ЗАДАНИЕ№1
// function seconds(total) {
//     return total/60;
// }
// alert(seconds(prompt()));
// // ЗАДАНИЕ№2
// function perimeter(side,count) 
// {
//  return side*count;   
// }
// alert(perimeter(prompt(),prompt()));
// // ЗАДАНИЕ№3
// function practic(n) {
//         if(n%3==0){
//      alert("fizz");
//         }else if(n%5==0){
//     alert("buzz");
//         }else{
//             alert("fizzbuzz");
//         }
//         return n;
//     }
//     alert(practic(prompt()));
// // ЗАДАНИЕ№4
// function calculate(a=9,b=9,c=9) {
//     return (a+b+c)/3;
// }
// alert(calculate());
// // ЗАДАНИЕ№5(1)
//     function isDivisible(n,x,y) {
//         if (n%x==0 && n%y==0) {
//            return "Yes";
//         }else{
//             return "nope";
//         }    
//     }
//     alert(isDivisible(prompt(),prompt(),prompt()));
// // ЗАДАНИЕ5(2)
// function isDivisible(n,x,y) {
//     return n%x==0 && n%y==0? "yes":"no";
// }
// alert(isDivisible(prompt(),prompt(),prompt()));
// // ЗАДАНИЕ№5(3)
// function isDIvisible(n,x,y) {
//     let answer = Boolean(n%x==0 && n%y==0);
//     return answer ;
// }
// alert(isDIvisible(prompt(),prompt(),prompt()));

// // ЗАДАНТЕ№6
// let aray =[];
// for (let i = 0; i < 100; i++) {
//     aray[i]=Math.round(Math.random()*100);
    
// }
// console.log(Math.min(...aray));
// console.log(Math.max(...aray));
// console.log(aray.reduce((x,y)=>x+=y));
// console.log(aray.reduce((x,y)=>x+=y)/aray.length);
// console.log(aray.filter((x)=>x%2!==0));
// console.log(aray);
// // ЗАДАНИЕ№7
// let array = [];
// for (let i = 0; i < 5; i++) {
// array[i]=[];
//     for (let j = 0; j < 5; j++) {
//         array[i][j]=Math.round(
//             Math.random()<0.5 ?
//             Math.random()* -100 :
//              Math.random() * 100);
//         if(i==j){
//             if (array[i][j]<0) {
//                 array[i][j]=0;
//             }else{
//                 array[i][j]=1;
//             }
//         }
// }
// }
// console.log(array);
// // ЗАДАНИЕ№8
// alert('choose your number');
// let a=+prompt();
// let b=+prompt();
// alert('1-add 2-sub 3-mul 4-div');
// let omg =+prompt();
// switch (omg) {
//     case 1:
//         function add(a,b) {
//         console.log(a+b); 
        
//     } 
//     add(a,b);
//     break;
//     case 2:function sub(a,b) {
//             console.log(a-b);
            
//         }
//         sub(a,b);
//     break;
//     case 3:function mul(a,b) {
//         console.log(a*b);
            
//         }
//         mul(a,b);
//     break;
//     case 4:function div(a,b) {
//             if (a/b==0) {
//                 alert('sorry, change numbers');
        
//             }else{
//                 return console.log(a/b);
//             }          
//         }
//         div(a,b);
//     break;
//     }
// ЗАДАНИЕ№9
// function omg(a) {
//             if (a>0 && a%2==0 && a%5==0 && a%3==0 && a%6==0 && a%9==0) {
//             a=alert("good number");
//             }
        
//     else if(a<0){
//             a=alert('negative');
//     }else{
//         alert("Need nuber whos:/2/5/3/6/9 it's:90 but it's a seсret");
//     }
// }
// console.log(omg(prompt()));
// ЗАДАНИЕ№10
array = [12,'fast',1,"me",31,32];
function mas(array) {
    for (i = 0; i < array.length; i++) {
        if (Number.isInteger(array[i])) {
            array[i]*=array[i];
        }
        
    } 
    return array.reverse(); 
}


console.log(mas(array));
// problem no.1
var fruits = ['apple', 'banana', 'orange'];
var indexNo = fruits.indexOf('banana');
fruits[indexNo] = 'mango';
fruits.pop();
fruits.push('watermelon');
console.log(fruits);

// problem no.2
var razu = 85;
var akash = 66;
var manna = 96;
var rahad = 56;
var tarek = 40;
var nana = 30;

if (razu >= 80){
    console.log('razu got A');
}
else if (razu >= 60){
    console.log('razu got b');
}
else if (razu >= 50){
    console.log('razu got c');
}
else if (razu >= 40){
    console.log('razu got d');
}
else if (razu <= 39){
    console.log('razu failed in the exam');
}

// akash
if (akash >= 80){
    console.log('akash got A');
}
else if (akash >= 60){
    console.log('akash got b');
}
else if (akash >= 50){
    console.log('akash got c');
}
else if (akash >= 40){
    console.log('akash got d');
}
else if (akash <= 39){
    console.log('akash failed in the exam');
}
// manna 
if (manna >= 80){
    console.log('manna got A');
}
else if (manna >= 60){
    console.log('manna got b');
}
else if (manna >= 50){
    console.log('manna got c');
}
else if (manna >= 40){
    console.log('manna got d');
}
else if (manna <= 39){
    console.log('manna failed in the exam');
}
// rahad
if (rahad >= 80){
    console.log('rahad got A');
}
else if (rahad >= 60){
    console.log('rahad got b');
}
else if (rahad >= 50){
    console.log('rahad got c');
}
else if (rahad >= 40){
    console.log('rahad got d');
}
else if (rahad <= 39){
    console.log('rahad failed in the exam');
}
// tarek
if (tarek >= 80){
    console.log('tarek got A');
}
else if (tarek >= 60){
    console.log('tarek got b');
}
else if (tarek >= 50){
    console.log('tarek got c');
}
else if (tarek >= 40){
    console.log('tarek got d');
}
else if (tarek <= 39){
    console.log('tarek failed in the exam');
}

// my nana
if (nana >= 80){
    console.log('nana got A');
}
else if (nana >= 60){
    console.log('nana got b');
}
else if (nana >= 50){
    console.log('nana got c');
}
else if (nana >= 40){
    console.log('nana got d');
}
else if (nana <= 39){
    console.log('nana failed in the exam');
}

// problem no.3
var num1 = 13;
var num2 = 79;
var num3 = 45;

if(num1 && num2 < num3){
    console.log('45 is large number');
}
else if(num1 && num3 < num2) {
    console.log('79 is the large number');
}
else{
    console.log('13 is the large number');
}

// problem no.4
var angel1 = 9;
var angel2 = 8;
var angel3 = 9;

if (angel1 == angel2 || angel1 == angel3){
    console.log('triangle is isosceles')
}
else {
    console.log('triangle is not isosceles');
}
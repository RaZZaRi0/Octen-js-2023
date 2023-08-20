let masseffect = ['masseffect1', 'masseffect2', 'masseffect3', 'masseffect4', 'masseffect5', 'masseffect6', 'masseffect7', 'masseffect8', 'masseffect9', 'masseffect10']
console.log(masseffect);
// _________________________________________________________ //

let book1 = {
    title: 'S.T.A.L.K.E.R. : Shadow of Chernobyl', pageCount: 448, genre: 'Fighting fiction'
};

let book2 = {
    title: 'S.T.A.L.K.E.R. : Clear Sky', pageCount: 480, genre: 'Fighting fiction'
};

let book3 = {
    title: 'S.T.A.L.K.E.R. : Call of Pripyat', pageCount: 416, genre: 'Fighting fiction'
};

console.log(book1);
console.log(book2);
console.log(book3);

//--------------------------------------------------------------//

let book11 = {
    title: 'S.T.A.L.K.E.R. : Shadow of Chernobyl',
    pageCount: 448,
    genre: 'Fighting fiction',
    authors: [
        {name: 'Dmytro Yankovsky', age: 55},
        {name: 'Oleksandr Zorich', age: 45},
        {name: 'Oleksiy Kalugin', age: 48},
        {name: 'Vyacheslav Shaligin', age: 37},
    ]
};
let book12 = {
    title: 'S.T.A.L.K.E.R. : Clear Sky',
    pageCount: 480,
    genre: 'Fighting fiction',
    authors: [
        {name: 'Dmytro Yankovsky', age: 55},
        {name: 'Oleksandr Zorich', age: 45},
        {name: 'Oleksiy Kalugin', age: 48},
        {name: 'Vyacheslav Shaligin', age: 37},
    ]
};

let book13 = {
    title: 'S.T.A.L.K.E.R. : Call of Pripyat',
    pageCount: 416,
    genre: 'Fighting fiction',
    authors: [
        {name: 'Dmytro Yankovsky', age: 55},
        {name: 'Oleksandr Zorich', age: 45},
        {name: 'Oleksiy Kalugin', age: 48},
        {name: 'Vyacheslav Shaligin', age: 37},
    ]
};

console.log(book11);
console.log(book12);
console.log(book13);

// --------------------------------------------------- //


let users = [
    {name: 'Roma', username:'proper', password: 12345},
    {name: 'Vova', username:'piper', password: 235345},
    {name: 'Vasya', username:'biber', password: 24234},
    {name: 'Petya', username:'barabaka', password: 12321423423},
    {name: 'Misha', username:'zhozhoba', password: 14132123124},
    {name: 'Kolya', username:'ambasador', password: 45645645},
    {name: 'Pavlik', username:'kakao', password: 342},
    {name: 'Huseyn', username:'buba', password: 23423412},
    {name: 'Adam', username:'olen', password: 12312312},
    {name: 'Bogdan', username:'kabron', password: 223},
];
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);

// ------------------------------------------------------ //

let x = +prompt('Enter your number');
if (x != 0){
    console.log(true);
}else{
    console.log(false);
}

// ---------------------------------- //

let time = +prompt('Enter time');
if (time>=0 && time<=14){
    console.log('1 quarter');
} else if (time>=15 && time<=29) {
    console.log('2 quarter');
} else if (time>=30 && time<=44) {
    console.log('3 quarter');
} else if (time>=45 && time<=59) {
    console.log('4 quarter');
} else {
    console.log('Wrong time');
}

// _________________________________ //

let day = +prompt('Enter the day of the month from 1 to 31');

if (day>=1 && day<=10){
    console.log('First decade of the month');
} else if (day>=11 && day<=20){
    console.log('Second decade of the month');
} else if (day>=21 && day<=31){
    console.log('third decade of the month');
} else {
    console.log('Wrong date');
}

// ---------------------------- //

let planOfTheDay = +prompt('Enter the serial number of the day of the week');

switch (planOfTheDay) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('Wrong number of week');
}

// -------------------------------  //

let a = +prompt('enter the first number');
let b = +prompt('enter the second number');

if (a > b){
    console.log(a);
} else if (b > a){
    console.log(b);
} else if(a == b){
    console.log('The numbers are the same')
} else {
    console.log('Error');
}
// // -------------------- //


// let xx = +prompt('enter somethings');
let xx = 0;


if (xx === null || xx === undefined || xx === NaN || xx === 0 || xx === false || xx === ""){
    console.log('default');
} else {
    console.log(xx);
}

//------------------------------------------__________-----------------------------------------//

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if(coursesAndDurationArray[0].monthDuration > 5){
    console.log('Супер');
} else {
    console.log('Погано');
}
if(coursesAndDurationArray[1].monthDuration > 5){
    console.log('Супер');
} else {
    console.log('Погано');
}

if(coursesAndDurationArray[2].monthDuration > 5){
    console.log('Супер');
} else {
    console.log('Погано');
}

if(coursesAndDurationArray[3].monthDuration > 5){
    console.log('Супер');
} else {
    console.log('Погано');
}

if(coursesAndDurationArray[4].monthDuration > 5){
    console.log('Супер');
} else {
    console.log('Погано');
}

if(coursesAndDurationArray[5].monthDuration > 5){
    console.log('Супер');
} else {
    console.log('Погано');
}

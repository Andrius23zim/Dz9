// 1


let numbers = [];
for(let i = 10; i <= 20; i++) {
  numbers.push(i);
}

console.log(numbers.join())

//2


for(let i = 10; i <= 20; i++) {
  console.log(i * i);
}

//3


for(let i = 1; i <= 9; i++) {
  console.log(`${i} * 7 = ${i * 7}`);
}

//4


let result = 0;

for(let i = 1; i <= 15; i++) {
  result += i;
}

console.log(result);


//5

let result = 0;

for(let i = 15; i <= 35; i++) {
  result += i;
}

console.log(result);


//6

let result = 0;

for(let i = 1; i <= 500; i++) {
  result += i;
}

console.log(result / 500);


//7

let result = 0;

for(let i = 30; i <= 80; i++) {
  if(i % 2 === 0) {
    result += i;
  }
}

console.log(result);


//8

for(let i = 100; i <= 200; i++) {
  if(i % 3 === 0) {
    console.log(i);
  }
}


// 9

const naturalNumber = 25;

for(let i = 1; i <= naturalNumber; i++) {
  if(naturalNumber % i === 0) {
    console.log(i);
  }
}


// 10

const naturalNumber = 4;
let pairedDividers = 0;

for(let i = 1; i <= naturalNumber; i++) {
  if(naturalNumber % i === 0) {
    
    if(i % 2 === 0) {
      pairedDividers += 1;
    }
    
  }
}

console.log(pairedDividers)


// 11

const naturalNumber = 10;
let pairedDividersSum = 0;

for(let i = 1; i <= naturalNumber; i++) {
  if(naturalNumber % i === 0) {
    
    if(i % 2 === 0) {
      pairedDividersSum += i;
    }
    
  }
}

console.log(pairedDividersSum)



//12

for (let i = 1; i <= 10; i++) {
    console.log(`===column ${i}===`);
    for (let j = 1; j <= 10; j++) {
       console.log(`${i} * ${j} = ${i * j}`);
    }
  }
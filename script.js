
                         console.log('------#4');

let a = 1;
let b = 2;
let c = a + b;
console.log(c)

let d = b - a;
console.log(d)

let f = b * a;
console.log(f)

let e = b / a;
console.log(e)


                            console.log('------#5')

const one = 1;
const two = 2;
const three = 3;
const four = 4;
const fife = 5;

console.log(one,two,three,four,fife);

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

                            console.log('------#6')

console.log(fife, four, three, two, one);

for (let i = 5; i !=0; i--) {
    console.log(i);
}


                            console.log('----#7')

function getMarkInfo(condition) {
    if (condition === 10) {
        console.log('у вас  высокий балл');
        
    }
    else  {
            console.log('у вас средний балл')
         
        }

}
getMarkInfo(10)
getMarkInfo(1)



                        console.log('----#8')   

function getDayInfo(position) {

switch (position) {
    
    case (0) : console.log ('Sunday');
        break;
    case (1) : console.log ('Monday');
        break;
    case (2) : console.log ('Tuesday');
        break;
    case (3) : console.log ('Wednesday');
        break;
    case (4) : console.log ('Thursday');
        break;
    case (5) : console.log ('Friday');
        break;
    case (6) : console.log ('Saturday');
        break;
    default: console.log ('Wrong data');
}

}
getDayInfo(0)
getDayInfo(1)
getDayInfo(2)
getDayInfo(3)
getDayInfo(4)
getDayInfo(5)
getDayInfo(6)
getDayInfo(7)

                    console.log('----#9') 
let arr = [
    'a',
    'b',
    'c',
];
arr.push(1, 2, 3);

for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
                    console.log('----#10')

let rrr = [
    1,
    2,
    3,
];

rrr = rrr.concat(
    4,
    5,
    6,
  );

console.log(rrr);

                        console.log('----#11')

    let sum = 0;
 
    for (let i = 0; i <= 5; i++) {
        sum = sum + i;
     console.log(sum);   
   }

                        console.log('----#12')

                      
prompt("введите число");                     

for (let i=0; i<=prompt; i++) {
    sum = sum + i;
    }
alert(sum);    

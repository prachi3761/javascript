
//maths//
//let num1 = 23.5;
 //console.log(Math.floor(num1));//
 //o/p 23
  // 1-10// generate 
    //console.log(Math.floor(Math.random()*10)+1)//
       // generate 11-20 
    //console.log(Math.floor(Math.random()*10)+11);
     //ludo 
     //to generate 1-6

     // console.log(Math.floor(Math.random()*(6-1+1)+1));

     // array
     //const arr = [ 2, 35, 1, ]
     //console.log(arr.length);
     
     //console.log(arr.at(-1));
     // at is latest , negative index le leta h 
     // at add new new value at last 
     //arr.push(30);
    // console.log(arr);
      //[ 2, 35, 1, 30 ]

      // pop remove value from the last of array 
      
///  add value at the starting of arrays 
  //arr.unshift(10);
  //arr.unshift(30);
  //console.log(arr);
//o/p[ 30, 10, 2, 35, 1 ]


/// shift delete element from start 
//arr.shift();
//console.log(arr);
//o/p [ 10,2,35, 1]
// delete operations  should not use it remove elemnts bcz jo space occupied rahega then can use that space kuki whole ban gya vaha par  
 

//console.log(arr.indexOf(2))
 //console.log(arr.includes(1));
 //true
  /// slice == tukda value ke bich ka 
 //console.log(arr.slice(1,2));
 //[ 2, 35, 1 ]
//[ 35 ]

//splice
 //console.log(arr.splice(1,2));


 //dates concept 
const d = new Date();
console.log(d);
//o/p = 2026-03-23T17:18:06.059Z
console.log(d.toDateString());
//o/p Mon Mar 23 2026


// to get only date 
console.log(d.getDate());

 console.log(d.getFullYear());

//maths//
let num1 = 23.5;
 console.log(Math.floor(num1));//
 //o/p 23
  // 1-10// generate 
    console.log(Math.floor(Math.random()*10)+1)//
       // generate 11-20 
    console.log(Math.floor(Math.random()*10)+11);
     //ludo 
     //to generate 1-6

      console.log(Math.floor(Math.random()*(6-1+1)+1));

      array
     const arr = [ 2, 35, 1, ]
     console.log(arr.length);
     
     //console.log(arr.at(-1));
     // at is latest , negative index le leta h 
     // at add new new value at last 
     //arr.push(30);
    // console.log(arr);
      //[ 2, 35, 1, 30 ]

      // pop remove value from the last of array 
      
///  add value at the starting of arrays 
  arr.unshift(10);
  arr.unshift(30);
  console.log(arr);
//o/p[ 30, 10, 2, 35, 1 ]


/// shift delete element from start 
arr.shift();
console.log(arr);
//o/p [ 10,2,35, 1]
// delete operations  should not use it remove elemnts bcz jo space occupied rahega then can use that space kuki whole ban gya vaha par  
 

//console.log(arr.indexOf(2))
 //console.log(arr.includes(1));
 //true
  /// slice == tukda value ke bich ka 
 //console.log(arr.slice(1,2));
 [ 2, 35, 1 ]
[ 35 ]

//splice
 console.log(arr.splice(1,2));


 //dates concept 
const d = new Date();
console.log(d);
//o/p = 2026-03-23T17:18:06.059Z
console.log(d.toDateString());
//o/p Mon Mar 23 2026


// to get only date 
console.log(d.getDate());

 console.log(d.getFullYear());



 // concept of object 
     // create object    object used for to store key and value

      const obj = {
        //name :"rohit",
        //acoount_balance:420,
        //gender: "male",
        //age : "30"
      //}

          console.log(obj);

          // o/p    { name: 'rohit', acoount_balance: 420, gender: 'male', age: '30' }
           

           // to access any thing like name , age , gender/
              //console.log(obj.name );
              //console.log(obj.gender);
              // o/p  rohit male

             /// to get key of object 
              //let obj = {
                 //name  : "rohit",
                 age:30,
                 //account_balance:420,
                 gender:"male"
             // };

              // const arr = Object.keys(obj)
               //console.log(arr);

               //o/p in the form of arr [ 'name', 'age', 'account_balance', 'gender' ]

               /// key value

               //const arr2 = Object.entries(obj);
               //console.log(arr2)

               /// output in the form of array 

             
  //[ 'name', 'rohit' ],
 // [ 'age', 30 ],
 // [ 'account_balance', 420 ],
 // [ 'gender', 'male' ]




 /// assign use case  wants to combine the both the object 
  let obj1 = {a:1, b:2};
   let obj2  = { c:3, d:4};

     let obj3 = Object.assign(obj1,obj2);
     console.log(obj3,obj1);


    //nested object == ek bracket ke andar dusra object 

    const user = {
       name : "rohit",
       balance: 420,
       address: {
            pincode: 246149,
           city: "kotdwar",
       }
    }

     // now to access of nested object//

     console.log(user.address.pincode);

     // o/p  246149



// functions concept === block of code 
     //like koi kam bar bar karna h to usko function use karke ek bar likh ke usko bar bar print kara sakte h 
//   bar bar likha nhi pdega statement to print something 


//lets take example

//function greet() {

   console.log("hello bhai");
  console.log("mein bahdiya hu");

//}
  // isko agar print karna h to call karna padega function ko


  // greet();
   //greet();
   /// aab ye print hoga 2 bar agar function use nhi akrte to bar bar same line likhni hoti 
//o/p =  hello bhai
        //mein bahdiya hu
        // hello bhai
        //mein bahdiya hu
        //2 bar likha h kyuki do bar function call kiya h

/// add program 

    //thse number1 and number2 are parameters
 //function sum(number1, number2){
  //console.log(number1+number2)
//
 //};

 //sum karna h to aab function ko call karo

 //thse numbers are argument which are passing in parameters
 //sum(3,5);

 //op  8


 // mutiplication program;
   function multiplication(number1 , number2){
    // console.log(number1 * number2)
   //};

      //multiplication(3,5)

      //op 15

      //arrow function    mei functio likhne ki jarurat nhi h bas arrow ae kam chal jayega 
        //const sum = (number1, number2)=>{
          //return number1+number2;

       // }

       // console.log(sum(3,4));

////      op   7

  /// direct function likhne ki jarurat nhi h 
    //const cube = number => number*number*number;
    //console.log(cube(8));
  //op      512



  /// if -else statement

   //let age =98;

    //if(age>=18)  {

      // console.log("eligible for voting ")
    //}

   //else  {

     //console.log("not eligible for vote ");
   //}

/// op  eligible for voting 


//switch statement  === multiple conditions 
   switch ( new Date(). getDate())
   {
     case 0:
           console.log("sunday");
            break ;

        case 1:
             console.log("monday");
                break;
         case 2:
              console.log("tuesday");
                  break;
   }


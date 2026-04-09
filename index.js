
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

    
   /// for loop

   //const arr = [ 10,20,11];
   //for (let value of arr)
   //{
   //  console.log(value);
   //}

   // o/p 10
         // 20
          //11



  // dont use for loop on objects 

  //const obj = {
    //name: "chavi",

    //age: 11,

    //gender: "female"
  //};

  //for (let value of obj) {
     //console.log(value);
  //}
  // op will be not ittrable  object itrate nhi kar sakte h but array hote h  


  // call back function == ek function ko call kareke dusare function ko call kar sakte h 

  //function name () {   // function 1 

    //console.log("hello i am name ");
  //}


     //function greet() {      /// function 2
      //console.log("i am call back function");


     //}


          // now calling the function 

          //name();     /// calling only first function 

          //name(greet);    /// first function ke andar dusare function ko call kar diya use call back function kahte h 
              
          /// output    hello i am name    answer for when we called first function 
                       //hello i am name        ans when we called  first function but inside its arugument we put the scond arguments name 
          
    /// fetching data from backend 

       //function fetchData(){
         //console.log("i am fetching data");

       //}

       //setInterval(fetchData, 5000);    //time given ki kitne time mei data fetch karna h    yaha 5000 diya h means 5 sec mei fetch hoga 
                      
       
           // output
           //i am fetching data
//i am fetching data
//i am fetching data
//i am fetching data
//i am fetching data
// continously fetch hota rahega  har 5 sec mei 


/// for each   se bhi call function call kar sakte h 

  //let arr = [10, 20, 30, 40];
  //arr.forEach(function(num){
      //console.log(num);
        
  //})

   // op 
   //10
   //20
  //30
   //40

   // filter    // === //data ko filter karta h 

    //let arr = [ 10,20, 30, 40];

     //const result = arr.filter((num)=> { 
       // return  num%2==0

    //})


     //console.log(result);  //vahi filter karega jo divisible by 2 h 

          // output      [ 10, 20, 30, 40 ]

            /// map   matlab h ki result ko modify kar sakte h bas   jaise    num*num   example   10*10  ==  100,  20*20 = 400
            /// difference between map and filter     filter mei value filter hoti based on condtion and map mei valur ko modify kar sakte h 
            //const arr = [10,20,30]

          //const result = arr.map((num)=> {
             //return num*num
          //});


           //console.log(result);


              // output      [ 100, 400, 900 ]

      //const arr = [10,20,30];

      //const result = arr.filter((num)=> num%2==0).map((num)=> num*num);

            //  console.log( const result)

        // output [ 100, 400, 900 ]

         // iske output mei jo filter se excute hoga usse hi map implement hoga 
          
          //ex    10 divisible h 2 se to aage jake map implement hoga like    10*10
                 //jo value true nhi h for filter vo excute nhi hogi map tak nhi jaeygi


     to get property 


    //  let obj  = {
    //     name:"rohit",
    //     age:10
    //  }

    //     let curr = " name";
    //     console.log(obj.hasOwnProperty(curr));



       /// set ==  stores  unique values . which allows us to store the value without duplicates   which make it  diffrent from arrays.    
             
        // const Set1 = new Set([10,20,30,40]);
        //  console.log(Set1);

        //  // output     { 10, 20, 30, 40 }



          // const set1 = new Set();
          // set1.add(4);
          // set1.add(6)
          // set1.add("rohit")
          // set1.add(30);

          // // to delete the element 

          // set1.delete(6);
          // console.log(set1.size);

          /// output 3



// union of two set

 let set1 = new Set([10, 20, 30,40]);
 let set2 = new Set([10,20,30,40]);

  let set3 = new Set([...set1,...set2]);// yaha par sari valur h set 1 ki and set 2 ki bhi 

  console.log(set3);


  //output   { 10, 20, 30, 40 }
    hoisting in js  is where variable and function declarations are moved to the top of their containing scope during the compilatioon pahse before the code has been executed
   


     /// hoisting means   ki variable ki declaration top par hoti h 

     //like   var x = underfined;
     //let y ;
    
    //   greet();

    //  function greet() {

    //   console.log("hello man ");

    //  }

     /// agr iss function iske uppar se call karnege tab bhi ye call ho jayega  

     // output    hello man 


     // this keyword 

      // in js   all funtions are stored in global object
      // math.random ,   setintervals 

      ///

      /// intro to dom in js 


      /// document object model
    

       //console.log("hello coder ");

//        document.getElementById("first")
// <h1 id=​"first" class=​"header1">​hello coder army​</h1>​
// // to get access of element by class name 
// undefined
// const obj1= document.getElementsByClassName("header1")
// undefined
// obj1
// HTMLCollection(2) [h1#first.header1, h2#second.header1, first: h1#first.header1, second: h2#second.header1]
// ///to change background color
// undefined
// obj1[1].style.backgroundColor = "Pink";
// 'Pink'

/// new basic project  to implement   time interval 
// function timing(){
//   const timer = document.getElementById('root');

//   const now = new Date();
//   const IndianTime = now.toLocaleTimeString();
//   timer.innerHTML = IndianTime;
// }
 
// setInterval(timing,1000);  // 10sec baad time change hoga 

//  const timer = document.getElementById('root');
//   timer.style.fontSize = "100px";
//   timer.style.display ="flex";
//   timer.style.height  ="100vh";
//   timer.style.justifyContent = "center";
//   timer.style.alignItems = "center";
   


/// accessing css selector 
   //  query selector se humane yaha par id select kar lii 
  // const id =  document.querySelector('#first');

  //       //uss old id mei likha h ki hello coder army 


  //       // yaha par usko change kiya gya h

  //       id.innerHTML = "hello Money";

  //       ///output hello coder amry ke place par hello money aa gya h

  //         //if we want to change background color

  //         const id2  = document.querySelector('.header2');
  //         id2.style.backgroundColor = "pink";

//// yaha par humne header ka background color change kar liya h


/// accessing by relationships

// const list  = document.querySelector('li');
//   console.log(list.parentElement);
//   console.log(list.parentNode);



    created element 
        //html par ek list h usme ek elment add karna vahi kiya h
// const element = document.createElement('li');
// element.innerHTML = "TS";

// const parent  = document.getElementById("root");
// parent.appendChild(element);


//to  add multiple elements

// function attach(content) {
//   const element =  document.createElement('li');

//   element.innerHTML = content;
   
//   const parent  =  document.getElementById("root");

//   parent.append(element);
// };

// attach("TS");

// attach("react");g

// attach("node");

  
/// intro to event 

// event means ki agar button par click  karo to vo react karen
    // basic calculator 
const button  = document.querySelector('button') ;

button.addEventListener('click',()=>{

  const  input1 = document.getElementById('first');
  const number1 = Number(input1.value);

  const  input2 = document.getElementById('second');
  const number2 = Number(input2.value);


  const result= number1+number2;
   const re = document.getElementById('result');
   re.textContent= "Result:"+result;
})





// const chai = "chai"
// const spies = "chai-spies"

// function receivesAFunction (chai){
//     console.log(chai());
// }


// function returnsANamedFunction (){
//     return receivesAFunction;
// }

// function returnsAnAnonymousFunction(){
//     return returnsANamedFunction();
// }

// function receivesAFunction(callback) {
//     callback()
//   }
  
//   function returnsANamedFunction() {
//     return function named() {
//       console.log("The girl is Arya.")
//     }
//   }
  
//   function returnsAnAnonymousFunction() {
//     return function() {
//       console.log('The girl has no name.')
//     }
//   }


  function receivesAFunction(chai){
    chai()
  }

  function returnsANamedFunction(){
    return function named(){
    }
  }

  function returnsAnAnonymousFunction(){
    return function(){
    }
  }
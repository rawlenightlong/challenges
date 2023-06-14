/**
 * @param {number} n
 * @return {Function} counter
 */
// var createCounter = function(n) {
//     return function() {
        
//     };
// };

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */

createCounter = function(n){
    return function() {
        console.log(n++)
    }
}

const counter = createCounter(10)
counter() 
counter()
counter()
const counter2 = createCounter(3)
counter2()
counter2()
counter2()


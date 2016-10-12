/* 
  * for... of loop
  * it iterates over property values
*/

const countries = ['Canada', 'USA', 'Mexico'];

// OLD WAY
for(const index in countries) { // index
  console.log(countries[index]);
}

// NEW WAY
// 1. With arrays
for(const country of countries) { // value
   console.log(country);
}

// 2. With objects
const countries = {
   canada: 'Canada',
   usa: 'USA',
   mexico: 'Mexico'
}; 

// Throws TypeError
for(const country of countries) { // value
   console.log('j', country);
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator
countries[Symbol.iterator] = function () {
    let i = 0;
    return {
        next: function () {
            value: i++,
         done: i < 3
        }
    }
}

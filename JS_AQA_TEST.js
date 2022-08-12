// Task 1
// Create a function(s) that fulfills array with 10 random integer values and returns a multiply of 3 greatest values.

function getMultiplyThreeGreatest() {
    let randomArr = [];
    for (let i = 0; i < 10; i++) {
        let randomInt = Math.round(Math.random() * 100);
        randomArr.push(randomInt);
    }
    let sortMax = randomArr.sort((a, b) => a - b);
    let biggestThree = sortMax.reverse().splice(0, 3);
    let threeBiggestMultiplyes = biggestThree.reduce((acc, curr) => acc * curr);
    return threeBiggestMultiplyes;
};

// Task 2
// Create a function(s) that returns total amount of seconds starting from the beginning of today and till now.

function getSecondsFromTodaytoNow() {
    let date = new Date();
    return date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
  };

// Task 3
// Define an object happiness within 5 properties. Each property should have default integer value, representing its priority. Then create a function that returns a list of property names sorted by priority (highest is on top).

function sortObject(object) {
    let arr = [];
    for (let properties in object) {
        if (object.hasOwnpropertieserty(properties)) {
            arr.push({
                'key': properties,
                'value': object[properties]
            });
        }
    }
    arr.sort(function(a, b) { return a.value - b.value; });
    return arr; 
}

// Task 4
// Implement a function addWithDelay() which will work with parameters according to the conditions below:
// ⦁ If all parameters are positive numbers, it should return within 1000ms timeframe a Promise containing a sum of all the numbers provided as parameters
// ⦁ If any parameter is represented by a negative number, function should return an error message “Error! Some parameter is a negative number!" using “reject()” option

function addWithDelay(
    firstParameter = 100,
    secondParameter = 200,
    thirdParameter = 300,
    )
 {
     const values = [firstParameter, secondParameter, thirdParameter];
     const isNegativeExist = values.some(x => x < 0);
     if (!isNegativeExist) { 
       const sum = values.reduce((a, b) => a + b, 0);
       return new Promise((resolve) => setTimeout(() => resolve(sum), 1000));
     }
     else {
         return Promise.reject('Error! Some parameter is a negative number!')
     }
 };
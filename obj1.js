var user = {
    firstName:"John", 
    lastName: "Smith",
    email: "smith@example.com",
    password: "<PASSWORD>"
};

console.log (user['firstName']);

console.log(user.firstName);

user.lastName ="John";
user.email = "John@example2.com";

console.log(user.lastName);
console.log(user.email);
user.age="20";

console.log(user);

var array = [];
for (var key in user) {
    array.push(user[key]);
}

console.log(array);

/*10) Write‌ ‌a‌ ‌function‌ ‌called‌ ‌‌addArrayProperty‌‌ ‌that‌ ‌takes‌ ‌three‌ ‌parameters,‌ ‌an‌ ‌object,‌ ‌a‌ ‌string as a key‌ ‌and‌ ‌an‌ ‌array.‌
‌It then adds a new property to the object with the specified key and its value is the array.*/

function addArrayProperty(object, key, array) {
    object[key] = array;
}

var myobject = {};
var myarray = [1,3];

console.log(myobject);

addArrayProperty(myobject, "myarraykey", myarray);
console.log(myobject.myarraykey);


/*11.Write‌ ‌a‌ ‌function‌ ‌called‌ ‌‌printAllProperties‌‌ ‌that‌ takes ‌an‌ ‌object‌ ‌as a parameter. 
It then prints out to the console the values of all the object’s properties.
*/

function printAllProperties(object) {
    var user = {
        firstName:"John", 
        lastName: "Smith",
        email: "smith@example.com",
        password: "<PASSWORD>"
    };
    for (var key in user) {
        console.log(user[key]);
    }
}
printAllProperties(user);

/*1.Write a function called removeNumbersLargerThan that takes two parameters, a number and an object.
It then removes all properties with values larger than the specified number.*/

function removeNumbersLargerThan(number, object) {
    for (var key in object) {
        if (!isNaN(object[key]) && object[key] > number) {
            delete object[key];
        }
    }
    return object;
}
var ob={
    age:3,

    phonenumber:2
};

console.log(removeNumbersLargerThan(2,ob));

/*2.Write a function called removeAllEvenValues that takes an object as a parameter.
It then removes all properties with values that are an even number.*/

function removeAllEvenValues(object) {
    for (var key in object) {
        if (!isNaN(object[key]) && object[key] % 2 == 0) {
            delete object[key];
        }
    }
    return object;
}
var ob={
    age:3,

    phonenumber:2,
    lastName:"Johon"
};

console.log(removeAllEvenValues(ob));

var recipe={
ingredients: {
    
}

};

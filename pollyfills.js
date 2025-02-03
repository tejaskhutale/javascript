user = {
    name: 'Tejas',
    age: 34
}

function printUser(homwTown, hobby) {
    console.log(this.name + ' is ' + this.age + ' years old' + ' ' + homwTown + hobby);
}

// printUser.apply(user, ['kop', 'cricket']);

// Pollyfill for call method

// Function.prototype.myCall = function(myObj, ...args){
//     myObj.fn = this;
//     myObj.fn(...args)
// };

// printUser.myCall(user, 'kop')

//Pollyfill for apply
// Function.prototype.myApply = function(myObj, args){
//     console.log(args, 'args');
//     myObj.fn = this;
//     myObj.fn(...args)
// };

// printUser.myApply(user, ['kop', 'cricket'])

// pollyfill for bind

Function.prototype.myBind = function(myObj, ...args){
    myObj.fn = this;
    return function(){
        myObj.fn.call(myObj, ...args);
    }
};

const myFindFn = printUser.myBind(user, 'kop', 'cricket');
myFindFn();
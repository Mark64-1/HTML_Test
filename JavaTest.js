var foo = {name: 'foo', age: 123, gender: "male", option_key: '1243'}

console.log(foo["name"])
console.log(foo.option_key)

var a = 100;
var objA = {value: 100, 0: 123};
var objB = {value: 100};
objA['2'] = 1243 + '1234임'
console.log(objA.value === objB.value)
console.log(objA['2'])

var emptyArr = [];

emptyArr[0] = 100;
emptyArr[7] = 'wtf';
emptyArr[4] = true;

console.log(emptyArr)

var emptyArr = [];

emptyArr[0] = 0;

console.log(emptyArr.length)

emptyArr.splice(3, 2)

var array = {1: 1, 2: 2, 3: 3, length: 5}

console.log(array.length)
array['key'] = 'some Value'
console.log(array)
console.log(array.length)

var def = function () {
    console.log("def");
}
def();

var add = function (x, y) {
    return x + y;
}


add.status = 'working'
add.result = add(array[1], array[2])

console.log(add.result)
console.log(add.status)

var foo = function () {
    return function () {
        console.log("가져온 function 작동")
    }
}

var bar = foo();
bar.some = 1234;
console.log(bar);
bar();

var fun = function (getFun) {
    getFun();
}

fun(function () {
    console.log("주고받는 Fun내부 작동")
});

console.log(bar.prototype);

bar.prototype.something = 'wow';

function person() {
}

person.prototype.eye = 1;

var kim = new person();
var temp = new person();

console.log(kim.eye)

function parent() {
    var a = 100
    var b = 200

    var kid = function () {
        var b = 300
        console.log(a)
        console.log(b)
    }
    return kid
}

// myParent();
// (mySquare = function (x) { console.log(x*x); })(2); mySquare(3);
// mySquare.prototype.toString();

// window.onload = function (){
//     // alert('으악 알람이야');
// }

myParent = parent()
myParent()


function addAll() {
    let result = 0;
    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}

console.log(addAll(1, 2, 3, 4, 54, 65, 1234, 6543, 2));


function thisBindTest() {
    var myObj = {
        name: '이름1',
        sayName: function () {
            console.log(this.name);
        }
    }
    var otherObj = {
        name: "이름2"
    }
    otherObj.sayName = myObj.sayName
    myObj.sayName()
    otherObj.sayName()
}

thisBindTest();

var some = {
    3: 3, 2: 1, funs: function () {

    }
}


var test = "this is Test!"
console.log(window.test)

var sayFoo = function () {
    var test = 'this is not Test!'
    console.log(this.test)
}
sayFoo()

var value =100;

// var myObj = {
//     value: 1, func1: function () {
//         this.value +=1;
//         console.log(this.value)
//         func2 = function (){
//             this.value+=1;
//             console.log(this.value)
//         }
//         func2()
//     }
// } 2.101 나옴 (this 문제)
var myObj = {
    value: 1, func1: function () {
        var that = this
        that.value +=1
        console.log(that.value)
        func2 = function (){
            that.value+=1
            console.log(that.value)
        }
        func2()
    }
}
myObj.func1()

var person = function (name) {
    this.name = name;
    console.log(person.arguments.callee)
    this.hello = '이것도 안녕?'
}
q = new person('안녕?');
console.log(q.hello)

var foo = {}
person.apply(foo,['안녕허쉰가?'])
console.dir(foo)

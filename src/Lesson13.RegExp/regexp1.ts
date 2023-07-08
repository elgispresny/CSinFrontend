
const myRegExp = new RegExp(/([A-z0-9$_])\1+/);
console.log(myRegExp.test(""));

const regExpSplitter = new RegExp(/,\d,\d\d;/);
console.log('762120,0,22;763827,0,50;750842,0,36;749909,0,95;755884,0,41;'.split(regExpSplitter));

[['"a": 1', 'a', '1'], ['"b": "2"', 'b', '"2"']]
const regExp3 = new RegExp(/"(\w)": (\d|"\d")/g);

console.log([...'{"a": 1, "b": "2"}'.matchAll(regExp3)]);

1+1;

// 'Hello, ${user}! Your age is ${age}.', {user: 'Bob', age: 10}
interface User {
    [k: string]: any;
};

class User implements User {

    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}



const regExp4 = new RegExp(/\${(.*?)}/g);
const bob = new User("Bob", 10);

const format = (str: string, user: User): any => {
    
    return str.replace(regExp4, (str: string, v: string):any => {
        return user[v];
    });
}

console.log(format('Hello, ${name}! Your age is ${age}.', bob));

const calc = (str: string):any => {
   let sum = str.replace(/([А-я\- ]+?)(?=\()|[А-я ]+/g, '');  
   return sum;      
}

console.log(calc(`
Какой-то текст (10 + 15 - 24) ** 2
Еще какой то текст 2 * 10
`));
//string

let lname: string;

lname = "Alex" 
let newname = lname.toUpperCase()
console.log(newname)


//numbers
let age: number;
age = 20
console.log(age)

//boolean
 let isvalid: Boolean = false;

 console.log(isvalid)

 //array

let emptyList: string[];

emptyList=["Alex",'kim']
console.log(emptyList)

let numlist: Array<number>
numlist=[1,2,3,4,5]
console.log(numlist)

let results = numlist.filter((num) => num >2)

console.log(results)

let num = numlist.find((num) => num===2)
console.log(num)

let sum = numlist.reduce((acc,num)=> acc +num)
console.log(sum)

//enum

const enum Color{
    red,
    green,
    blue
}

let c: Color=Color.blue


//tuples

let swapNumb: [number,number]

function swapNumbers(num1:number,num2:number): [number,number]{
    return[num1, num2]
}

swapNumb= swapNumbers(10,20)
swapNumb[0]


//any
let department: any;

department = 'IT'
department =10


let departments;

departments = 'IT'
departments =10


 function add1(num1:number, num2:number): any{
    return num1 +num2
 }

 let newsum = add1(10,20)


 //





// 1
const filterEvenNumbers = (numbers: number[]): number[] => {
  return numbers.filter(num => num % 2 === 0);
}

// 2
const reverseString = (str : string) : string =>{
    const stringArray = str.split("");
    let res = "";
    for(let i = stringArray.length-1; i>=0; i--){
        res+= stringArray[i];
    }
    return res;
}

// 3
type StringOrNumber = string | number;

const checkType = (val : StringOrNumber)=>{
    if(typeof val === 'number'){
        return "Number"
    }else if(typeof val === 'string'){
        return "String"
    }
}

// 4
const getProperty = <T,K extends keyof T>(obj: T, key: K)=>{
    return obj[key];
}

// 5
interface Book{
    title: string;
    author: string;
    publishedYear: number;
}

const toggleReadStatus = (value : Book)=>{
    return {...value, isRead: true}
}

// 6
class Person{
    name: string;
    age: number;

    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }
}

class Student extends Person{
    grade: string;

    constructor(name:string, age:number, grade: string){
        super(name, age);
        this.grade = grade;
    }
    getDetails = ()=>{
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`
    }
}
const student = new Student("Alice", 20, "A");
console.log(student.getDetails());

// 7
const getIntersection = (arr1: number[], arr2: number[]): number[]=>{
    return arr1.filter(num=> arr2.includes(num));
}


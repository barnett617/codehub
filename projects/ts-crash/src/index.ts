// Basic Types
let id: number = 5
console.log('ID', id)
let firstName: string = 'Wilson'
let ok: boolean = true
let x: any = 'Halo'

let ids: number[] = [1, 2, 3]
let arr: any[] = [1, true, 'hello']

// Tuple
let person: [number, string, boolean] = [1, 'Wilson', true]
// Tuple Array
let employees: [number, string][]

employees = [
    [1, 'Wilson'],
    [2, 'Tom']
]

// Union
let pid: number | string
pid = '18'
pid = 18

// Enum
enum Direction {
    Up = 1,
    Down,
    Left,
    Right
}

console.log(Direction.Up)
console.log(Direction.Left)

enum Direction2 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}

console.log(Direction2.Up)

// Objects
const user: {
    id: number,
    name: string
} = {
    id: 1,
    name: 'Wilson'
}

type User = {
    id: number,
    name: string
}

const user2: User = {
    id: 1,
    name: 'Wilson'
}

// Type Assertion
let cid: any = 1
let customerId = <number>cid
customerId = 2

let customerId2 = cid as number
customerId2 = 3 

// Functions
function addNum(x: number, y: number): number {
    return x + y
}

console.log(addNum(1, 2))

// Void
function log(message: string | number): void {
    console.log(message)
}

log('This is a piece of log')
log(28)

// Interfaces
interface UserInterface {
    readonly id: number,
    name: string,
    age?: number    // optional property
}

const user3: UserInterface = {
    id: 1,
    name:  'Wilson'
}

// readonly property cannot be changed
// user3.id = 2

// Interface cannot use union types but Object type can
type Point = number | string
const p1: Point = 1
const p2: Point = '2'

// Error using below
// interface PointInterface = number | string


// Use interface to declare arrow function type
interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x, y) => x + y
const sub: MathFunc = (x, y) => x - y

// Classes
class Person {
    id: number
    name: string
    private pid?: number    // private property cannot be attached outside
    protected cid?: number  // protected property can only be attached by extended class

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }
}

const wilson = new Person(1, 'Wilson')
const tom = new Person(2, 'Tom')
console.log(wilson, tom)

// Interface Implement
interface PersonInterface {
    id: number
    name: string
    register(): string
}

class Person2 implements PersonInterface {
    id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }
     
    register() {
        return `${this.name} has been registered`
    }

}

// Subclass Extends from parent class
class Employee extends Person2 {
    position: string

    constructor(id: number, name: string, position: string) {
        super(id, name)
        this.position = position
    }
}

const emp = new Employee(3, 'Jerry', 'Frontend Developer')
console.log('emp', emp)

// Generics
function getConcatedArray(items: any): any {
    return new Array().concat(items)
}

const numArr = getConcatedArray([1, 2, 3])
const strArr = getConcatedArray(['Wilson', 'Tom', 'Jerry'])

// This would not throw error because the element type is any
// But this is not expected
numArr.push('Wilson')

// Generic type is like a placeholder type and get value after using
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}

const numArray = getArray<number>([1, 2, 3])
const strArray = getArray<string>(['Wilson', 'Tom', 'Jerry'])

// This will cause error 
// because numArray is specificed to place number elements
// numArray.push('Wilson')

strArray.push('Wilson')
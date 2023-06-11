### 1.Printing

#### 1)Simple Print

```rs
fn main() {
    println!(1);
}
```

#### 2)Basic Formating

```rs
fn main() {
    println!("Number {}", 1);
}
```

```rs
fn main() {
    println!("{} + {} = {}", 1, 1, 2);
}
```

#### 3)Positional Arguments

```rs
fn main() {
    println!(
        "{0} is from {1} and {0} loves {2}",
        "Wilson", "mass", "coding"
    );
}
```

#### 4)Named Arguments

```rs
fn main() {
    println!(
        "{name} likes {hobby}",
        name = "Wilson",
        hobby = "running"
    );
}
```

#### 5)Placeholder traits

```rs
fn main() {
    println!(
        "Binary: {:b}, Hex: {:x}, Octal: {:o}",
        10, 10, 10
    );
}
```

#### 6)Placeholder for debug traits

```rs
fn main() {
    println!(
        "{:?}",
        (12, true, "hello")
    );
}
```

#### 7)Basic math

```rs
fn main() {
    println!(
        "10 + 10 = {}",
        10 + 10
    );
}
```

### 2.Variable

#### 1)Basic variable

```rs
fn main() {
    let name = "Wilson";
    println!(
        "My name is {}",
        name
    );
}
```

#### 2)Mutable variable

```rs
fn main() {
    let mut age = 18;
    println!("I am {}", age);
    age = 28;
    println!("No, I am {}", age);
}
```

#### 3)Constant variable

```rs
fn main() {
    const ID: i32 = 001;
    println!("ID is {}", ID);
}
```

### 3.Type

```rs
fn main() {
    // Default i32
    let x = 1;
    // Default i64
    let y = 2.5;
    // Explicit type
    let z: i64 = 3121321321312;
    // Boolean
    let is_active: bool = true;
    // Boolean from expression
    let is_greater: bool = 10 < 5;
    // Char
    let a = 'a';
    // Char from unicode
    let emoji = '\u{1F550}';
    println!("{:?}", (x, y, z, is_active, is_greater, a, emoji));
}
```

### 4.String

```rs
fn main() {
    let hello = "Hello";
    println!("hello is: {}", hello);

    let mut hello_str = String::from("Hello ");
    println!("hello_str is: {}", hello_str);

    // Get length
    let len = hello_str.len();
    println!("len is: {}", len);

    // Push char
    hello_str.push('W');
    println!("hello_str after pushing W: {}", hello_str);

    // Push string
    hello_str.push_str("orld!");
    println!("hello_str after pushing orld!: {}", hello_str);

    // Capacity in bytes
    let capacity = hello_str.capacity();
    println!("capacity in bytes: {}", capacity);

    // Check empty
    let is_empty = hello_str.is_empty();
    println!("Is hello_str empty: {}", is_empty);

    // Check contain
    let is_contain = hello_str.contains("World");
    println!("Does hello_str contains World: {}", is_contain);

    // Replace
    let replace_result = hello_str.replace("World", "Wilson");
    println!("Replacing result: {}", replace_result);
    println!("hello_str after replacing World with Wilson: {}", hello_str);

    // Loop through words from splited
    for word in hello_str.split_whitespace() {
        println!("looping...");
        println!("word: {}", word);
    }

    // Create string with capacity
    let mut str_with_capacity = String::with_capacity(10);
    println!("string generated from specific capacity: {}", str_with_capacity);
    str_with_capacity.push('a');
    str_with_capacity.push('b');
    println!("specific capacity string after push chars: {}", str_with_capacity);

    // Assert: nothing if pass, or throw fail reasons
    assert_eq!(2, str_with_capacity.len());
    assert_eq!(10, str_with_capacity.capacity());
}
```

Output:

```
hello is: Hello
hello_str is: Hello 
len is: 6
hello_str after pushing W: Hello W
hello_str after pushing orld!: Hello World!
capacity in bytes: 12
Is hello_str empty: false
Does hello_str contains World: true
Replacing result: Hello Wilson!
hello_str after replacing World with Wilson: Hello World!
looping...
word: Hello
looping...
word: World!
string generated from specific capacity: 
specific capacity string after push chars: ab
```

### 5.Tuple

```rs
fn main() {
    let person: (&str, &str, i8) = ("Wilson", "coding", 28);
    println!("{} is {} and he is {}", person.0, person.1, person.2);
}
```

### 6.Array

```rs
use std::mem;

fn main() {
    let mut numbers: [i32; 5] = [1,2,3,4,5];
    println!("{:?}", numbers);

    // Re-assige element
    numbers[2] = 28;
    println!("After re-arrange: {:?}", numbers);

    // Get indexed value
    println!("The first one is: {}", numbers[0]);

    // Get length
    println!("Length is: {}", numbers.len());

    // Get bytes(Array are stack allocated)
    println!("Array occupies {} bytes", std::mem::size_of_val(&numbers));

    // If used library, then we can use it directly
    println!("Memory size is: {} bytes", mem::size_of_val(&numbers));

    // Get slice
    let slice: &[i32] = &numbers;
    println!("The slice is: {:?}", slice);
    
    let ranged_slice: &[i32] = &numbers[0..2];
    println!("Ranged slice is: {:?}", ranged_slice);
}
```

### 7.Vector

```rs
use std::mem;

fn main() {
    let mut numbers: Vec<i32> = vec![1,2,3,4];

    // Re-assign
    numbers[2] = 28;

    println!("After reassigning: {:?}", numbers);

    // Push value
    numbers.push(5);
    println!("After pushing new element: {:?}", numbers);

    // Pop last value
    let last = numbers.pop();
    println!("After popping: {:?}", numbers);
    println!("The popped value is: {:?}", last);

    // Get indexed element
    let first = numbers[0];
    println!("The first element of vector is: {}", first);

    // Get vector length
    let len = numbers.len();
    println!("The length of vector is: {}", len);

    // Get allocated bytes(stack allocated)
    let bytes = mem::size_of_val(&numbers);
    println!("The vector occupies {} bytes", bytes);

    // Get slice
    let slice: &[i32] = &numbers;
    println!("The slice is: {:?}", slice);

    // Loop through vector values
    for x in numbers.iter() {
        println!("Number: {}", x);
    }

    // Loop and mutate values
    for x in numbers.iter_mut() {
        // *x = x * 2;
        *x *= 2;
    }

    println!("After mutating each value: {:?}", numbers);
}
```

### 8.Conditional

```rs
let game_begin: bool = true;
let answer: u8 = 28;
// let user_guess: u8 = 28;
// let user_guess: u8 = 100;
let user_guess: u8 = 18;
let response;

if game_begin {
    if user_guess == answer {
        response = "Right";
        println!("{}, the answer is: {}", response, answer);
    } else if user_guess > answer {
        response = "Too big";
        println!("{}", response);
    } else {
        response = "Too small";
        println!("{}", response);
    }
} else {
    response = "Game is not started";
    println!("{}", response);
}

// Shorthand If
let user_guess_uncorrect = if user_guess != answer { "wrong" } else { "correct" };
println!("Uncorrect guess: {}", user_guess_uncorrect);
```

### 9.Loop

```rs
let mut count = 0;

loop {
    count += 1;
    println!("Count is {}", count);
    if count == 5 {
        break;
    }
}

while count < 100 {
    if count % 15 == 0 {
        println!("fizzbuzz");
    } else if count % 3 == 0 {
        println!("fizz");
    } else if count % 5 == 0 {
        println!("buzz");
    } else {
        println!("{}", count);
    }
    count += 1
}

for x in 0..100 {
    if x % 15 == 0 {
        println!("fizzbuzz");
    } else if x % 3 == 0 {
        println!("fizz");
    } else if x % 5 == 0 {
        println!("buzz");
    } else {
        println!("{}", x);
    }
}
```

### 10.Function

```rs
fn main() {
    greeting("Hi", "Wilson");

    let sum = add(1, 2);
    println!("Sum is: {}", sum);

    // Closure: access outside variables
    let n3: i32 = 5;
    let get_sum = |n1: i32, n2: i32| n1 + n2 + n3;
    println!("Closure sum is: {}", get_sum(3, 4));
}

fn greeting(greet: &str, name: &str) {
    println!("{} {}", greet, name);
}

fn add(n1: i32, n2: i32) -> i32 {
    n1 + n2
}
```

### 11.Reference

```rs
fn main() {
    let arr1 = [1, 2, 3];
    let arr2 = arr1;
    println!("{:?}", arr1, arr2);

    let vec1 = vec![1, 2, 3];
    let vec2 = &vec1;
    println!("{:?}", &vec1, vec2);
}
```

### 12.Struct

```rs
// Traditional Struct
struct Color {
    red: u8,
    green: u8,
    blue: u8
}

// Tuple Struct
struct TupleColor(u8, u8, u8);

struct Person {
    first_name: String,
    last_name: String
}

impl Person {
    fn new (first: &str, last: &str) -> Person {
        Person {
            first_name: first.to_string(),
            last_name: last.to_string()
        }
    }

    fn full_name(&self) -> String {
        format!("{} {}", self.first_name, self.last_name)
    }

    fn set_last_name(&mut self, last: &str) {
        self.last_name = last.to_string();
    }

    fn to_tuple(self) -> (String, String) {
        (self.first_name, self.last_name)
    }
}

fn main() {
    let mut c = Color {
        red: 255,
        green: 0,
        blue: 0
    };
    println!("Color: {} {} {}", c.red, c.green, c.blue);
    c.green = 255;
    println!("Color after mutating: {} {} {}", c.red, c.green, c.blue);

    let mut tc = TupleColor(255, 0, 0);
    println!("Tuple Color: {} {} {}", tc.0, tc.1, tc.2);
    tc.2 = 255;
    println!("Tuple Color after mutating: {} {} {}", tc.0, tc.1, tc.2);

    let mut p = Person::new("Wilson", "Wang");
    println!("Person {} {}", p.first_name, p.last_name);

    let full_name = p.full_name();
    println!("Person full name: {}", full_name);

    p.set_last_name("Lee");
    println!("Person full name after setting last name: {}", p.full_name());

    let name_tuple = p.to_tuple();
    println!("Name tuple is: {:?}", name_tuple);
}
```

### 13.Enum

```rs
enum Movement {
    Up,
    Down,
    Left,
    Right
}

fn move_sth(m: Movement) {
    let direction;
    match m {
        Movement::Up => {
            direction = "Up";
        },
        Movement::Down => {
            direction = "Down";
        },
        Movement::Left => {
            direction = "Left";
        },
        Movement::Right => {
            direction = "Right";
        }
    }
    println!("Moving to {}", direction);
}

fn main() {
    let move1 = Movement::Left;
    let move2 = Movement::Right;
    let move3 = Movement::Up;
    let move4 = Movement::Down;

    move_sth(move1);
    move_sth(move2);
    move_sth(move3);
    move_sth(move4);
}
```

### 14.Cli

```rs
use std::env;

fn main() {
    let args: Vec<String> = env::args().collect();
    if args.len() == 1 {
        println!("Finish");
    } else {
        let command = args[1].clone();
        let name = "Wilson";
        let status = "100%";

        let output;
        if command == "greet" {
            output = "Hi";
        } else if command == "status" {
            output = status;
        } else {
            output = "Invalid command";
        }
        println!("{} {}", output, name);
    }
}
```
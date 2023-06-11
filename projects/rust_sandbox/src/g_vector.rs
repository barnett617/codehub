// Vector - Resizable arrays

use std::mem;

pub fn run() {
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
// 1.Variables hold primitive data or references to data
// 2.Variables are immutable by default
// 3.Rust is a block-scoped language

pub fn run() {
    let name = "Wilson";
    println!(
        "My name is {}",
        name
    );

    // Using mutable variables
    let mut age = 18;
    println!("I am {}", age);
    age = 28;
    println!("No, I am {}", age);

    // Using constant variables
    const ID: i32 = 001;
    println!("ID is {}", ID);
}
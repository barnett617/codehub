// Function - Blocks of code for re-use
pub fn run() {
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
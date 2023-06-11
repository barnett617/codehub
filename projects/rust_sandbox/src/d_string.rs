// Primitive strings: 
//  - Immutable fixed-length string somewhere in memory
// String:
//  - Growable, heap-allocated data structure
//  - Use when you need to modify or own string data
pub fn run() {
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
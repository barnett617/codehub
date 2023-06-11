// Array - Fixed length list with the same type elements
// 1.Length fixed
// 2.Same data type

use std::mem;

pub fn run() {
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
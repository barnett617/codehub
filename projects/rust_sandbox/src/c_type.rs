/**
 * Primitive Types
 * - Integers: u8/i8/u16/i16/u32/i32/u64/i64/u128/i128
 * - Floats: f32/f64
 * - Boolean: bool
 * - Characters: char
 * - Tuples
 * - Arrays
 */

// Rust is statically typed language
// It must know the types of all variables at complie time
// The compiler can usually infer what type we want to use based on the value and how we use it

pub fn run() {
    // Default is i32
    let x = 1;

    // Default is f64
    let y = 2.5;

    // Add explicit type
    let z: i64 = 3213112312321;

    println!("Max i32 is {}", std::i32::MAX);
    println!("Max i64 is {}", std::i64::MAX);

    // Boolean
    let is_active: bool = true;

    // Get boolean from expression
    let is_greater: bool = 10 < 5;

    let a = 'a';
    let emoji = '\u{1F500}';

    println!("{:?}", (x, y, z, is_active, is_greater, a, emoji));
}
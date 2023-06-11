pub fn run() {
    // Print to console
    println!("Hello from the print file");

    // Basic Formatting
    println!("Number {}", 1);

    println!("{} + {} = {}", 1, 1, 2);

    // Positional Arguments
    println!(
        "{0} is from {1} and {0} loves {2}",
        "Wilson", "mass", "coding"
    );

    // Named Arguments
    println!(
        "{name} likes {hobby}",
        name = "Wilson",
        hobby = "running"
    );

    // Placeholder traits
    println!(
        "Binary: {:b}, Hex: {:x}, Octal: {:o}",
        10, 10, 10
    );

    // Placeholder for debug trait
    println!(
        "{:?}",
        (12, true, "hello")
    );

    // Basic math
    println!(
        "10 + 10 = {}",
        10 + 10
    )
}
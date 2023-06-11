// Conditional - Check the condition and act on the result
pub fn run() {
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
}
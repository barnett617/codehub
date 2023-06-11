// Enum - types with definite values

enum Movement {
    // Variants
    Up,
    Down,
    Left,
    Right
}

fn move_sth(m: Movement) {
    // Perform action depending on input
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

pub fn run() {
    let move1 = Movement::Left;
    let move2 = Movement::Right;
    let move3 = Movement::Up;
    let move4 = Movement::Down;

    move_sth(move1);
    move_sth(move2);
    move_sth(move3);
    move_sth(move4);
}
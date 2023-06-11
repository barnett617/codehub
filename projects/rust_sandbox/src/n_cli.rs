use std::env;

pub fn run() {
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
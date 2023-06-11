// Struct - Create custom data type

// Traditional Struct
struct Color {
    red: u8,
    green: u8,
    blue: u8
}

// Tuple Struct
struct TupleColor(u8, u8, u8);

struct Person {
    first_name: String,
    last_name: String
}

impl Person {
    // Construct person
    fn new(first: &str, last: &str) -> Person {
        Person {
            first_name: first.to_string(),
            last_name: last.to_string(),
        }
    }

    // Get full name
    fn full_name(&self) -> String {
        format!("{} {}", self.first_name, self.last_name)
    }

    // Set last name
    fn set_last_name(&mut self, last: &str) {
        self.last_name = last.to_string();
    }

    // Name to tuple
    fn to_tuple(self) -> (String, String) {
        (self.first_name, self.last_name)
    }
}

pub fn run() {
    let mut c = Color {
        red: 255,
        green: 0,
        blue: 0
    };
    println!("Color: {} {} {}", c.red, c.green, c.blue);
    c.green = 255;
    println!("Color after mutating: {} {} {}", c.red, c.green, c.blue);

    let mut tc = TupleColor(255, 0, 0);
    println!("Tuple Color: {}, {}, {}", tc.0, tc.1, tc.2);
    tc.2 = 255;
    println!("Tuple Color after mutation: {} {} {}", tc.0, tc.1, tc.2);

    let mut p = Person::new("Wilson", "Wang");
    println!("Person {} {}", p.first_name, p.last_name);

    let full_name = p.full_name();
    println!("Person full name: {}", full_name);

    p.set_last_name("Lee");
    println!("Person full name after setting last name: {}", p.full_name());

    let name_tuple = p.to_tuple();
    println!("Name tuple is: {:?}", name_tuple);
}
```yaml
layout: cover
class: text-center
transition: slide-up
```

# Pattern Matching

book chapter 6.2

---

```yaml
layout: center
class: text-center
transition: slide-up
```

# The `match` Expression

```rust {1-6|7|8-13|all}
enum Coin {
    Penny,
    Nickel,
    Dime,
    Quarter,
}
fn value_in_cents(coin: Coin) -> u8 {
    match coin {
        Coin::Penny => 1,
        Coin::Nickel => 5,
        Coin::Dime => 10,
        Coin::Quarter => 25,
    }
}
```

---

```yaml
layout: center
class: text-center
transition: slide-up
```

# Patterns that Bind to Values

```rust {2-4,6-7,11-12|11,18-21}
#[derive(Debug)]
enum UsState {
    Alabama,
    Alaska,
    // ...
}
enum Coin {
    Penny,
    Nickel,
    Dime,
    Quarter(UsState),
}
fn value_in_cents(coin: Coin) -> u8 {
    match coin {
        Coin::Penny => 1,
        Coin::Nickel => 5,
        Coin::Dime => 10,
        Coin::Quarter(state) => {
            println!("State quarter from {:?}!", state);
            25
        }
    }
}
```

---

```yaml
layout: center
class: text-center
transition: slide-up
```

# Matching on `Option`

```rust {1-6,8-10}
fn plus_one(x: Option<i32>) -> Option<i32> {
    match x {
        None => None,
        Some(i) => Some(i + 1),
    }
}
fn main() {
    let five = Some(5);
    let six = plus_one(five);
    let none = plus_one(None);
}
```

---

```yaml
layout: center
class: text-center
transition: slide-up
```

# Exhaustive Matching

```rust {2-5}
fn plus_one(x: Option<i32>) -> Option<i32> {
    match x {
        Some(i) => Some(i + 1),
        // forgot about None!
    }
}
```

compiler says:

> non-exhaustive patterns: `None` not covered

---

```yaml
layout: center
class: text-center
transition: slide-up
```

# Exhaustive Matching

demo

---

```yaml
layout: center
class: text-center
transition: none
```

# Catch-all Patterns

<div style="width: 16vw">
```rust
match 0_i32 {
    7  => println!("lucky!"),
    13 => println!("unlucky!"),
    x  => println!("nothing special: {}", x),
}
```
</div>

---

```yaml
layout: center
class: text-center
transition: none
```

# Catch-all Patterns

<div style="width: 16vw">
```rust {4}
match 0_i32 {
    7  => println!("lucky!"),
    13 => println!("unlucky!"),
    x  => println!("nothing special: {}", x),
}
```
</div>

---

```yaml
layout: center
class: text-center
transition: slide-up
```

# Catch-all Patterns

<div style="width: 16vw">
```rust {4}
match 0_i32 {
    7  => println!("lucky!"),
    13 => println!("unlucky!"),
    _  => {}
}
```
</div>

<!--
    if-let syntax is intentionally omitted,
    because clippy will mention it when a single-match pattern is used.
-->
<!--  -->

---

```yaml
layout: center
transition: slide-left
```

# Summary

enums and pattern matching

- model alternatives in your data

- prevent invalid data access bugs

- branch over data structures with `match`

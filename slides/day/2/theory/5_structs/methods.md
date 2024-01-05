```yaml
layout: cover
class: text-center
transition: slide-up
```

# Methods

book chapter 5.3

---

```yaml
layout: center
class: text-center
transition: slide-up
```

# Syntax

```rust {5-9,12,14}
struct Rectangle {
    width: u32,
    height: u32,
}
impl Rectangle {
    fn area(&self) -> u32 { // area(self: &Rectangle)
        self.width * self.height
    }
}
fn main() {
    let rect = Rectangle { width: 30, height: 50 };
    let a: u32 = rect.area();
    // this works:
    let a: u32 = Rectangle::area(&rect);
}
```

<div
    style="border-color: red"
    class="border-1 absolute top-63.5 left-79.5 w-7.5"
></div>
<div
    style="border-color: red"
    class="border-1 absolute top-68 left-101.5 w-9"
></div>

---

```yaml
layout: center
class: text-center
transition: slide-up
```

# Automatic (De-)Referencing

```rust
fn main() {
    let rect = Rectangle { width: 30, height: 50 };
    
    println!("{}", rect.area()); // adds 1 reference

    let rect: &&Rectangle = &&rect;
    println!("{}", rect.area()); // removes 1 reference

    let rect = &&&&&&&&rect;
    println!("{}", rect.area()); // ok we get it
}
```

---

```yaml
layout: center
class: text-center
transition: slide-up
```

# Additional Parameters

```rust {2-4,7-9}
impl Rectangle {
   fn can_hold(&self, other: &Rectangle) -> bool {
        self.width > other.width && self.height > other.height
    }
}
fn main() {
    let rect_1: Rectangle;
    let rect_2: Rectangle;
    if rect_1.can_hold(&rect_2) {
        // ...
    }
}
```

<div
    style="border-color: red"
    class="border-1 absolute top-56.8 left-98 w-45"
></div>
<div
    style="border-color: red"
    class="border-1 absolute top-89 left-112 w-4"
></div>

---

```yaml
layout: center
class: text-center
transition: slide-up
```

# Associated Functions

```rust {2-7,10}
impl Rectangle {
    fn square(size: u32) -> Self {
        Self {
            width: size,
            height: size,
        }
    }
}
fn main() {
    let sq = Rectangle::square(3);
}
```

<div
    style="border-color: red"
    class="border-1 absolute top-59.5 left-137 w-13"
></div>

---

```yaml
layout: center
class: text-center
transition: slide-up
```

# Multiple `impl` Blocks

```rust {1-2,4-7,12-13}
impl Rectangle {
    fn area(&self) -> u32 {
        self.width * self.height
    }
}
impl Rectangle {
    fn square(size: u32) -> Self {
        Self {
            width: size,
            height: size,
        }
    }
}
```

---

```yaml
layout: center
```

# Summary

structs and methods

- group data meaningfully

- combine data with related behavior

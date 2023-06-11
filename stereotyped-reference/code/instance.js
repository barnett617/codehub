function myInstanceOf(instance, type) {
  let proto = Object.getPrototypeOf(instance);
  const prototype = type.prototype;
  while (true) {
    if (proto === null) return false;
    if (proto === prototype) return true;
    proto = Object.getPrototypeOf(proto);
  }
}

function Foo() {}

console.log('Object instanceof Object', Object instanceof Object);
console.log('Function instanceof Function', Function instanceof Function);
console.log('Function instanceof Object', Function instanceof Object);
console.log('Foo instanceof Foo', Foo instanceof Foo);
console.log('Foo instanceof Object', Foo instanceof Object);
console.log('Foo instanceof Function', Foo instanceof Function);
console.dir()
console.log('Object instanceof Object', myInstanceOf(Object, Object));
console.log('Function instanceof Function', myInstanceOf(Function, Function));
console.log('Function instanceof Object', myInstanceOf(Function, Object));
console.log('Foo instanceof Foo', myInstanceOf(Foo, Foo));
console.log('Foo instanceof Object', myInstanceOf(Foo, Object));
console.log('Foo instanceof Function', myInstanceOf(Foo, Function));

// Object instanceof Object true
// Function instanceof Function true
// Function instanceof Object true
// Foo instanceof Foo false
// Foo instanceof Object true
// Foo instanceof Function true
// undefined
// Object instanceof Object true
// Function instanceof Function true
// Function instanceof Object true
// Foo instanceof Foo false
// Foo instanceof Object true
// Foo instanceof Function true
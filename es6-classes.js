class Person { //every class has a block
    constructor(name,age, children) { //to create an Object
        this.name = name;
        this.age = age;
        this.children = children;
    }
    speak() { 
        console.log(`My name is ${this.name}`);
    }
    birth(child) { 
        this.children.push(child);
        return this.children;
    }
}

const lolla = new Person('lolla', 52, ['sean', 'steph']);

lolla.speak();
lolla.birth('jess');
// console.log(lolla.children);
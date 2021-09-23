//sync
console.log("Start");

function greet() {
    console.log("Hello Everyone!");
}

function person(name) {
    console.log("Hello "+name+ ", Nice to meet you!!");
}

greet();
person("Mr. Jack Berg");
console.log("End");

//async
console.log("Start"); 

function greet() {
    setTimeout(() => {
        console.log("Hello Everyone!");
    }, 5000);
}

function person(name) {
    setTimeout(() => {
        console.log("Hello "+name+ ", Nice to meet you!!");
    }, 5000);
    console.log("Hello "+name+ ", Nice to meet you!!");
}

greet();
person("Mr. Jack Berg");
  
console.log("End");
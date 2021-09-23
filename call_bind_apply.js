let name = {
    firstname: "Nishu",
    lastname: "Tyagi"
    // printFullName: function() {
    //     console.log(this.firstname+" "+this.lastname); //this. refer to name object
    // }
}

let printFullName = function(hometown, state) {
    console.log(this.firstname+" "+this.lastname +" from "+hometown +", "+state); //this. refer to name object
}

printFullName.call(name, "Ghaziabad", "Uttar Pradesh"); //invoke method

let name2 = {
    firstname: "Shivam",
    lastname: "Tyagi"
}
//call method - function borrowing
printFullName.call(name2, "Roorkee", "Uttarakhand")  //name as 1st argument
//in call method pass arguments individually comma seperated
//invoke function directly


//apply method
printFullName.apply(name2, ["Roorkee", "Uttarakhand"])  //name as 1st argument  refer to this
//in apply pass 2nd arguments as array list

//bind method - binds the method printFullName with a Object-name and returns as the copy of that method
let printMyName = printFullName.bind(name2, "Roorkee", "Uttarakhand"); 
//it will create a copy of printFullName and it will bind that to name2 obj and will return a function.
//There is a catch over here that it doesn't directly calls the method and prints to the console 
//rather return some method which can be called later
console.log(printMyName);
printMyName();  //invoke
//bind a copy to invoke/call it later
                                                                          
# javascript and classes

# OOPs

# Object 
--> Collection of properties of method

# why use OOPs

# parts of OOPs
--> Object literal
eg. const user={
    name:"sonu".
    email:"sonu@gamil.com",
    details:function(){

    }
}

--> Constructor function
--> prototypes
--> Classes 
--> Instances (new, this)

# Four pillar of OOPs
--> Abstarction
--> Encapsulation
--> Inheritance
--> Polymorphism

# this and new keyword
--> this keyword refer to the current context
--> new keyword make a new instance of class, called object

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
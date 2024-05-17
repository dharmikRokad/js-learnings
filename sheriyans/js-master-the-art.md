## var - let - const -- difference 

### var

- in old js (ES5)
- function scoped 
- automatically add itself to window object of browser

### let/const

- in new js (ES6)
- block ({}) scopeed
- can't add itself to windoew object



## Browser context API

> three things available in browser context API

1. Window - the functions aren't available in js, provided by browser to access some of browser's functionalities
2. Heap memory - a temporary memory used to store mediator values during a computation by js
3. Stack - memory stack



## Execution context of a function 

> a container always created whenever the function is called and the function being excecuted inside it.
> an imaginary container of a particular function which strores the following value inside it.

1. Variables declared in that function
2. another functions declared in that function
3. lexical environment
    - a guide which can tell that what things that function can sccess
    - basically stores the access scope and scope chain ( suppose if a function have a chain of it's parent function, so the child function can access all it's parents values) for that perticular function



##

>> arrays and objects are referenced, so when you assign a already assigned value to new one, it's not directly copy that but it will pass the reference of old one to new one.
>> so whenever you do some changes in new one, old one also be changed.
>> You can avaoid this using _*spread (...)*_ operator  
    - ex: let a = [1,2,3,4]
          let b = [...a]



## Truthy - Falsy

- There are two types of value from where all the written statements are belongs too.

1. Falsy - statements that will converted into *false*
         - 0, flase, undifined, null, NaN, document.all

2. Truthy - statements that will converted into *true*
          - all except *falsy values*         

##

>> Functions in js are first class function - you can treat it as a value.



## Array behind the scenes

- array in js is not a proper array, it's an object inside.
ex: let a = [1,2,3,4,];
 will converted into {
    0: 1,
    1: 2,
    2: 3,
    3: 4
 }

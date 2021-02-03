---
title: 'WTF is "this"'
excerpt: 'The keyword "this" is Javascript can get very tricky very quickly. Let us get "this" off our heads once and for all.'
coverImage: 'https://res.cloudinary.com/doxldod5y/image/upload/v1612336724/portfolio/posts/wtf-is-this/dgahV0czTwWJuwa9RcTE__E2_80_9CWhy_20_E2_80_98This_E2_80_99_20in_20JavaScript_E2_80_9D2x.png_jf7qgd.jpg'
date: '2021-02-03T07:22:52.529Z'
ogImage:
  url: 'https://res.cloudinary.com/doxldod5y/image/upload/v1612336724/portfolio/posts/wtf-is-this/dgahV0czTwWJuwa9RcTE__E2_80_9CWhy_20_E2_80_98This_E2_80_99_20in_20JavaScript_E2_80_9D2x.png_jf7qgd.jpg'
---
## Understanding context and `this`


The value of the keyword `this` in Javascript refers to the [context](/posts/js-context) in which a function is invoked.

There are 4 ways Javascript allows you to bind context to a function,
- __Implicit Binding__
- __Explicit Binding__
- __'new' Binding__
- __window Binding__

## Implicit Binding

Implicit binding occurs when dot notation is used to invoke a function.

```
var obj = {
  name: "Dave",
  sayName: function () {
    console.log(this.name);
  },
};

obj.sayName() // OUTPUT => "Dave"
```
Let's try to find the context in which the function `sayName()` is executed.

The easiest way to do that is to __check if the function invocation is preceded by a dot (.)__. If __yes__, then the value of `this` inside the function `sayName()` is equal to the object before the dot. Which is `obj`.
so,
```
this = obj
obj.name => 'Dave'
```

## Explicit Binding

Explicit binding is achieved by the methods `call`, `apply`, and `bind`.

### call(), apply()

[The official docs for call()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call) say: The call() method calls a function with a given this value and arguments provided individually.

What that means, is that we can call any function, and explicitly specify what this should reference within the calling function. This can definitely save us from writing hacky code.

For example,

```
function sayName(lang1, lang2) {
  console.log("My name is ", this.name);
  console.log("I know ", lang1, lang2);
}

var dave = {
  name: "Dave",
  age: 25,
};

sayName.call(dave, 'JS', 'Python') // 1st argument is the context in which the function will be executed, Next are arguments sent to the function call
```
Output
```
My name is Dave
I know JS Python
```

`call()` and `apply()` serve the __exact same purpose__. The only difference between how they work is that `call()` expects all parameters to be passed in individually, whereas `apply()` expects an array of all of our parameters. 

For example, both produces the same output,  

```
sayName.call(dave, 'JS', 'Python')
sayName.apply(dave, ['JS', 'Python'])

```
### bind()

[The official docs for bind()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind) says: The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

The difference between `call()`, `apply()` and `bind()` is that the `bind()` method,

- Does not executes the function when it is called, instead it returns a new function which can be executed later.
- Does not accepts additional parameters.

For example the below code produces the same output as the above example.

```
var sayDavesName = sayName.bind(dave)
sayDavesName('JS', 'Python')
```

## 'new' Binding

When a function is invoked with a `new` keyword the `this` keyword inside that function is bound to a new Object which is constructed.

```
var Animal = function (name){
  this.name = name
}

var tiger = new Animal('tiger')
```

Value of `this` inside the `Animal` function is equal to the new `tiger` object (which is of Animal type) which is created.

## 'window' Binding

When a function invocation is,
- Not preceded by a dot.
- Dont have call, apply, bind.
- Not invoked by new keyword

`this` will by default refer to the global object, `window`.

*However in __strict mode__ `this` will be `undefined`.*

```
function sayName(){
  console.log(this.name)
}

sayName() // OUTPUT => undefined

window.name = 'Dave'
sayName() // OUTPUT => 'Dave'
```

Another example,
```
var obj = {
  name: "Dave",
  sayName: function () {
    console.log(this.name);
  },
};

var fun = obj.sayName
fun() // OUTPUT => undefined , as this = window

```

### Phew! 😌

Simple right? Dont go too far. Stick with me for the fun part in the next article,
[Arrow functions and 'This'(the fun begins)](/posts/this-and-arrow)

![](https://res.cloudinary.com/doxldod5y/image/upload/v1612348882/portfolio/posts/wtf-is-this/giphy_wfab4t.webp)
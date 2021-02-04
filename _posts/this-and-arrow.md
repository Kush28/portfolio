---
title: 'Arrow functions and "this" : the fun begins'
excerpt:
  'With the introduction of arrow functions in ES6 the understanding of "this" keyword became ever so complicated.
  However its not that difficult.'
coverImage: 'https://res.cloudinary.com/doxldod5y/image/upload/v1612455389/portfolio/posts/this-and-arrow/Screen-Shot-2019-05-30-at-9.46.11-AM_h7paow.png'
date: '2021-02-04T15:57:55.126Z'
ogImage:
  url: 'https://res.cloudinary.com/doxldod5y/image/upload/v1612455389/portfolio/posts/this-and-arrow/Screen-Shot-2019-05-30-at-9.46.11-AM_h7paow.png'
published: true
---

## "this" refresher

The mistake that most of us do is, we try to understand both this concepts together. I would urge you to read my previous article before we proceed, [WTF is "this"](/posts/wtf-is-this)

But if you have skipped it anyway here is a brief, 🤷‍♂️

The value of the keyword **`this`** in Javascript refers to **the context in which a function is invoked**. We can bind the context of the invoked function in 4 ways,

- **Implicit Binding** : When ever a function invocation is preceded by a dot, `this` will refer to the object preceding the dot.
- **Explicit Binding** : We can explicitly bind a context for the function to execute by using the methods `call()`, `apply()` & `bind()`.
- **new Binding** : When a function is invoked using the `new` keyword, the `this` keyword is assigned a new object that is constructed.
- **window Binding** : If none of the above satisfy then `this` refers to the global object `window` or `undefined` if the code is executed in **strict mode**

## What is an arrow function

Arrow functions, introduced in ES6 gives compact alternative to a traditional function. It has the following properties,

- Can be written using less lines of code.
- The value of the keyword [`arguments`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments) is always undefined
- Cannot be used as a constructor, New object cannot be created using `new` keyword
- Does not have its own binding to the `this` keyword.

Our topic of discussion is the last point.

### Understanding "this" in an Arrow function

Now, What does last point mean. Well it simply means that arrow functions do not have its own `this`. Instead it inherits the value of `this` from its parent.

Let's understand this by an example,

<div class="code-block">
var obj = {
  getObj: function(){
    console.log(this)
  },
  getGlobal: () => {
    console.log(this)
  }
}
obj.getObj() // Obj
obj.getGlobal()// Global
</div>
</br>

In the above example `getObj` and `getGlobal` are the same functions. However the output of the functions are different.

Since `getObj()` is an normal function the value of `this` refers to __the context in which the function was executed__, which is `obj`.

But `getGlobal()` is an arrow function, from our previous understanding we know, **the function does not have its own `this`**. Hence it will inherit `this` from its parent. So, in browser `this = window` and in a Node env `this = GlobalThis`.

### Easy enough ? 😋

### Lets check some advantages arrow functions has,

<div class="code-block">
var obj = {
  a:10,
  getA: function outer(){
    return function inner(){
      console.log(this.a)
    }
  }
}
var fun = obj.getA()
fun() // undefined
</div>
</br>

If you thought `this` in `inner` function refers to `obj` then you are not alone. This is this kind of scenarios where we get scared by the `this` keyword.

This is a special case where the function `fun()` is a [closure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures). But if you notice, the invocation of the function `fun()` is not preceded by any dot, so `this` is window binded.

To fix this we can change the function to a arrow function,

<div class="code-block">
var obj = {
  a:10,
  getA: function outer(){
    return ()=>{
      console.log(this.a)
    }
  }
}
var fun = obj.getA()
fun()
</div>
</br>

**Magic !! 😵**

Well not really. Since arrow functions do not have its own `this`, it inherits the the value of `this` from its parent `outer` function.

## Congrats! You have made it through 🤗
#### Not as difficult as you thought right? 

Still have questions? feel free to contact me on the given modes in my bio (in the side menu).

/**
 * Created by Jerry on 2016-10-22.
 */

/*  1. Explain the following code:
 *
 *  function func() {
 *      console.log(this);
 *  }
 *
 
 
 
 *  func(); // what is the output? Why?
 *
 Window {speechSynthesis: SpeechSynthesis, caches: CacheStorage, localStorage: Storage, sessionStorage: Storage, webkitStorageInfo: DeprecatedStorageInfo…}
 
 returns the global variable
 
 *  var obj = {
 *      func: func // what is the second func here?
 *  };
 second func defines(declares the first function)
 
 function func() {
   console.log(this);
  }
 *
 *  obj.func(); //what is the output? try to explain why.
 
 Object {}
func
:
func()
__proto__
:
Object



 *
 *  obj.func.bind(window)(); // what is the output? why?
 
 Window {speechSynthesis: SpeechSynthesis, caches: CacheStorage, localStorage: Storage, sessionStorage: Storage, webkitStorageInfo: DeprecatedStorageInfo…}
 
 returns the window. binds the object function with the window.
 
 *  obj.func.bind(this)();  // what is the output? why?
 
 Window {speechSynthesis: SpeechSynthesis, caches: CacheStorage, localStorage: Storage, sessionStorage: Storage, webkitStorageInfo: DeprecatedStorageInfo…}
 
 binds the object func with the window it resides
 
 *
 *  var people = {
 *      name: 'ashwin',
 *      age: 40
 *  };
 *
 *  obj.func.bind(people)(); //what is the output? why?
 */

Object {name: "ashwin", age: 40} /* we are binding our object function with object people

/* 2. write a function to convert first letter of every word in a string
 *     to upper case.
 *     eg input = 'hi, welcome to mest;'
 *        output = 'Hi Welcome To Mest';
 *        input2 = 'today is Sunday';
 *        output2 = 'Today is Sunday';
 */
function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}
console.log(toTitleCase('hi, welcome to mest;'));

/*
 *  3. Write reg expresion for email validation(This is not an easy
 *  question, please make sure you do your research on this).
 *
 */

/*
 * 4. what is localStorage and sessionStorge under window object? What is the
 *    difference
 
 
 The sessionStorage property allows you to access a session Storage object for the current origin. 
 sessionStorage is similar to Window.localStorage, the only difference is while data stored in localStorage has no expiration set,
 data stored in sessionStorage gets cleared when the page session ends.
 A page session lasts for as long as the browser is open and survives over page reloads and restores.
 Opening a page in a new tab or window will cause a new session to be initiated, which differs from how session cookies work.
 */

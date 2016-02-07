#T

T is an small assertion library and test runner.

Supported assertions:

- Equality _using lodash_ `isEqual`.
- Inequality _using lodash_ `isEqual`.
- Truthy
- Falsy
- Gratter
- Smaller

##usage

```js
import T from 't';
// or
require('t');

var myTests = new T();

// --- assert equal ---
myTests.when('1 equal 1').should(1).equal(1);

// --- assert inequality ---
myTests.when('1 not 2').should(1).not(2);

// --- output the short results ---
myTests.results();
```

##methods

`T.setUp(callback)`: sets a callback to run before every test.

`T.clenUp(callback)`: sets a callback to run before every test.

`T.results()`: short log of the results of the assertions plus a log of the failing ones, if there are some :wink:

`T.verboseOutput(verbose = true)`: Sets/unsets the verbose output. You can set and unset for specific assertions.

```js
myTests.verboseOutput(); // following assertions will have verbose output
		
		. . . do some assertions here . . .
		
myTests.verboseOutput(false) // further assertions will not output the result
```

`T.when(description)`: Adds an assertion and stores its _optional_ description. _Chainable_.

`T.should(a)`: Stores the first value of the assertion, into the last assertion added. _Chainable_.

##assertion methods

this methods run set up callback, the assertion and the clean up callback.

**a** _is the first value added through_ `T.should(a)`;

`T.equal(b)`: expects `isEqual(a,b)` to be true.

`T.not(a)`: expects `!isEqual(a,b)` to be true.

`T.beTrue()`:expects `!!a` to be true.

`T.beFalse()`:expects `!a` to be true.

`T.beMore()`:expects `a > b` to be true.

`T.beLess()`:expects `a < b` to be true.
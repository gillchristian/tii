#Tii

Tii is an small assertion library and test runner.

Supported assertions:

- Equality _using lodash_ `isEqual`.
- Inequality _using lodash_ `isEqual`.
- Truthy
- Falsy
- Gratter
- Smaller

##installation

`$ npm install tii`

##usage

```js
import Tii from 'tii';
// or
require('tii');

var myTests = new Tii();

// --- assert equal ---
myTests.when('1 equal 1').should(1).equal(1);

// --- assert inequality ---
myTests.when('1 not 2').should(1).not(2);

// --- output the short results ---
myTests.results();
```

##methods

`Tii.setUp(callback)`: sets a callback to run before every test.

`Tii.clenUp(callback)`: sets a callback to run before every test.

`Tii.results()`: short log of the results of the assertions plus a log of the failing ones, if there are some :wink:

`Tii.verboseOutput(verbose = true)`: Sets/unsets the verbose output. You can set and unset for specific assertions.

```js
myTests.verboseOutput(); // following assertions will have verbose output
		
		. . . do some assertions here . . .
		
myTests.verboseOutput(false) // further assertions will not output the result
```

`Tii.when(description)`: Adds an assertion and stores its _optional_ description. _Chainable_.

`Tii.should(a)`: Stores the first value of the assertion, into the last assertion added. _Chainable_.

##assertion methods

this methods run set up callback, the assertion and the clean up callback.

**a** _is the first value added through_ `Tii.should(a)`;

`Tii.equal(b)`: expects `isEqual(a,b)` to be true.

`Tii.not(a)`: expects `!isEqual(a,b)` to be true.

`Tii.beTrue()`:expects `!!a` to be true.

`Tii.beFalse()`:expects `!a` to be true.

`Tii.beMore()`:expects `a > b` to be true.

`Tii.beLess()`:expects `a < b` to be true.
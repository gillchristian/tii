import isEqual from 'lodash.isequal';
/**
 * This is my take on assertion libraries with out proper knowledge of testing
 */
export default class T {
	
	/**
	 * Constructor, does the necessary set up
	 * 
	 * @param {bool} verbose output
	 */
	constructor(){
		this.assertions = [];
		this.everyTest = {};
		this.verbose = false;
	}
	
	/**
	 * Executes a callback
	 * 
	 * @param {string} property key 
	 */
	callback(key){
		if (this.everyTest[key])
			this.everyTest[key].apply(this);
	}
	
	/**
	 * Sets up a callback to run before every test
	 * 
	 * @param {function} callback
	 */
	setUp(callback){
		this.everyTest.pre = callback;		
	}
	/**
	 * Sets up a callback to run after every test
	 * 
	 * @param {function} callback
	 */
	cleanUp(callback){
		this.everyTest.post = callback;
	}
	
	/**
	 * Logs the result of a test
	 * 
	 * @param {object} assertion object
	 */
	result(assertion){
		console.log(assertion.description);
		if (assertion.result)
			console.log('✔');
		else {
			console.log('✘');
		}
		console.log('--------------------------------------------------');
	}
	
	/**
	 * Logs the results
	 */
	results(){
		let passing = 0;
		let errors = 0;
		let results = this.assertions.map( 
			assertion => {
				if (assertion.result) passing++;
				else errors++;
				return assertion.result ? ' ✔ ' : ' ✘ ';
			} 
		);
		console.log('------------------- ASSERTIONS -------------------');
		console.log( results.join('') );
		console.log('Runned ' + results.length + ' assertions.' );
		console.log( '|--- Passing: ✔ ' + passing);
		console.log( '|--- Failing: ✘ ' + errors);
		if ( errors ) console.log('-------------------- FAILING ---------------------');
		else console.log('--------------------------------------------------');
		for (let assertion of this.assertions) {
			if (!assertion.result){
				console.log(assertion.description);
				console.log(assertion.assertion);
				console.log('--------------------');
			}
		}
	}

	/**
	 * Sets/unsets the verbose output
	 * 
	 * @param {bool}
	 */
	verboseOutput(verbose = true){
		this.verbose = verbose;
	}
	
	/**
	 * Stores the description for the assertion
	 * used on the verbose tests and on error logs
	 * 
	 * @param {string} assertion description
	 * @return {object} this
	 */
	when(description){
		this.assertions.push(description ? { description } : {});
		return this;
	}
	
	/**
	 * Stores the first value of the assertion
	 * 
	 * @param {any} first value of the assertion
	 */
	should(value){
		this.assertions.last().a = value;
		return this
	}
	
	/**
	 * Equality assertion
	 * Stores the second value, runs the setup, assertion and cleanup 
	 * 
	 * @param {any}
	 */
	equal(b){
		this.callback('pre');
		this.assertions.last().b = b;
		this.assertions.last().result = isEqual(this.assertions.last().a, b);
		this.assertions.last().assertion = 'Expected ' + this.assertions.last().a + ' to be equal to ' + b;
		this.callback('post');
		if (this.verbose) this.result(this.assertions.last());
	}

	/**
	 * Inequality assertion
	 * Stores the second value, runs the setup, assertion and cleanup 
	 * 
	 * @param {any}
	 */
	not(b){
		this.callback('pre');
		this.assertions.last().b = b;
		this.assertions.last().result = !isEqual(this.assertions.last().a, b);
		this.assertions.last().assertion = 'Expected ' + this.assertions.last().a + ' be differenten to ' + b;
		this.callback('post');
		if (this.verbose) this.result(this.assertions.last());
	}
	
	/**
	 * Truthy assertion
	 * Stores the second value, runs the setup, assertion and cleanup
	 */
	beTrue(){
		this.callback('pre');
		this.assertions.last().b = true;
		this.assertions.last().result = !!this.assertions.last().a;
		this.assertions.last().assertion = 'Expected ' + this.assertions.last().a + ' to be true.';
		this.callback('post');
		if (this.verbose) this.result(this.assertions.last());
	}
	
	/**
	 * Falsy assertion
	 * Stores the second value, runs the setup, assertion and cleanup
	 */
	beFalse(){
		this.callback('pre');
		this.assertions.last().b = false;
		this.assertions.last().result = !this.assertions.last().a;
		this.assertions.last().assertion = 'Expected ' + this.assertions.last().a + ' to be false.';
		this.callback('post');
		if (this.verbose) this.result(this.assertions.last());
	}
	
	/**
	 * Gratter assertion
	 * Stores the second value, runs the setup, assertion and cleanup 
	 * 
	 * @param {any}
	 */
	beMore(b){
		this.callback('pre');
		this.assertions.last().b = b;
		this.assertions.last().result = this.assertions.last().a > b;
		this.assertions.last().assertion = 'Expected ' + this.assertions.last().a + ' to be > than ' + b;
		this.callback('post');
		if (this.verbose) this.result(this.assertions.last());
	}
	
	/**
	 * Lesser assertion
	 * Stores the second value, runs the setup, assertion and cleanup 
	 * 
	 * @param {any}
	 */
	beLess(b){
		this.callback('pre');
		this.assertions.last().b = b;
		this.assertions.last().result = this.assertions.last().a < b;
		this.assertions.last().assertion = 'Expected ' + this.assertions.last().a + ' to be < than ' + b;
		this.callback('post');
		if (this.verbose) this.result(this.assertions.last());
	}
}

/**
 * Helper function
 */
Array.prototype.last = function() {
	return this[this.length -1];
}

/**
 * Add support for Commonjs modules
 */
if (typeof module === "object" && module.exports ) {
	module.exports = T;
}
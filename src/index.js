import T from './t';
let myTests = new T();


// --- equal ---
myTests
	.when('equal: 1 / 1')
	.should(1)
	.equal(1);
myTests
	.when('equal: [\'a\', \'b\']')
	.should(['a', 'b'])
	.equal(['a', 'b']);
myTests
	.when('equal: {a:, \'b\'}')
	.should({a: 'b'})
	.equal({a: 'b'});
myTests
	.when('equal: {a: { b: ["a", {p: "b"}] }, c: "b"} / {c: "b",a: { b: ["a", {p: "b"}] }}')
	.should({a: { b: ["a", {p: "b"}] }, c: "b"})
	.equal({c: "b",a: { b: ["a", {p: "b"}] }});

// --- not ---
myTests
	.when('equal: 1 / 2')
	.should(1)
	.not(2);
myTests
	.when('not: {a: "b"} / {c: "b"}')
	.should({a: "b"})
	.not({c: "b"});
// --- be true ---
myTests
	.when('beTrue: 1')
	.should(1)
	.beTrue();
myTests
	.when('beTrue: true')
	.should(true)
	.beTrue();
myTests
	.when('beTrue: []')
	.should([])
	.beTrue();
// --- be false ---
myTests
	.when('beFalse: false')
	.should(false)
	.beFalse();
myTests
	.when('beFalse: 0')
	.should(0)
	.beFalse();
myTests
	.when('beFalse: true')
	.should(!true)
	.beFalse();
myTests
	.when('beFalse: \'\'')
	.should('')
	.beFalse();
myTests
	.when('beFalse: [].length')
	.should([].length)
	.beFalse();
// --- be more ---
myTests
	.when('beMore: 1 / 2')
	.should(2)
	.beMore(1);
myTests
	.when('beMore: b/ a')
	.should('b')
	.beMore('a');
// --- be less ---
myTests
	.when('beLess: a / b')
	.should('a')
	.beLess('b');
myTests
	.when('beLess: 1 / 2')
	.should(1)
	.beLess(2);
	
myTests.results();
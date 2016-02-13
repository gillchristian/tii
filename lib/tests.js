module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _tii = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./tii\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _tii2 = _interopRequireDefault(_tii);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var myTests = new _tii2.default();

	// --- equal ---
	myTests.when('equal: 1 / 1').should(1).equal(1);
	myTests.when('equal: [\'a\', \'b\']').should(['a', 'b']).equal(['a', 'b']);
	myTests.when('equal: {a:, \'b\'}').should({ a: 'b' }).equal({ a: 'b' });
	myTests.when('equal: {a: { b: ["a", {p: "b"}] }, c: "b"} / {c: "b",a: { b: ["a", {p: "b"}] }}').should({ a: { b: ["a", { p: "b" }] }, c: "b" }).equal({ c: "b", a: { b: ["a", { p: "b" }] } });

	// --- not ---
	myTests.when('equal: 1 / 2').should(1).not(2);
	myTests.when('not: {a: "b"} / {c: "b"}').should({ a: "b" }).not({ c: "b" });
	// --- be true ---
	myTests.when('beTrue: 1').should(1).beTrue();
	myTests.when('beTrue: true').should(true).beTrue();
	myTests.when('beTrue: []').should([]).beTrue();
	// --- be false ---
	myTests.when('beFalse: false').should(false).beFalse();
	myTests.when('beFalse: 0').should(0).beFalse();
	myTests.when('beFalse: true').should(!true).beFalse();
	myTests.when('beFalse: \'\'').should('').beFalse();
	myTests.when('beFalse: [].length').should([].length).beFalse();
	// --- be more ---
	myTests.when('beMore: 1 / 2').should(2).beMore(1);
	myTests.when('beMore: b/ a').should('b').beMore('a');
	// --- be less ---
	myTests.when('beLess: a / b').should('a').beLess('b');
	myTests.when('beLess: 1 / 2').should(1).beLess(2);

	myTests.results();

/***/ }
/******/ ]);
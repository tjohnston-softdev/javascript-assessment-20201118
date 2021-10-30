const problem1 = require("./answers/problem1");
const problem2 = require("./answers/problem2");
const problem3 = require("./answers/problem3");
const problem4 = require("./answers/problem4");
const problem5 = require("./answers/problem5");
const problem6 = require("./answers/problem6");
const problem7 = require("./answers/problem7");


/**
 * Example problem with existing solution and passing test.
 * See problem 0 in the spec file for the assertion
 * @returns {string}
 */
exports.example = () => 'hello world';

exports.stripPrivateProperties = problem1.getAnswer;
exports.excludeByProperty = problem2.getAnswer;
exports.sumDeep = problem3.getAnswer;
exports.applyStatusColor = problem4.getAnswer;
exports.createGreeting = problem5.getAnswer;
exports.setDefaults = problem6.getAnswer;
exports.fetchUserByNameAndUsersCompany = problem7.getAnswer;

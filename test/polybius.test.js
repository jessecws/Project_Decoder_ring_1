// Write your tests here!

const { expect } = require("chai");
const { polybius } = require("../src/polybius.js");

describe("polybius", () => {
    it("Should when encoding return a string type of numbers.", () => {
        const input = "thinkful";
        const encode = true;
        const actual = polybius(input, encode);
        expect(actual).to.be.a('string');
    });
    it("Should return false when asked to decode an odd number of digits.", () => {
        const input = "44324233521254134";
        const encode = false;
        const actual = polybius(input, encode);
        expect(actual).to.be.false;
    });
    it("Should maintain spaces.", () => {
        const input = "Hello world";
        const encode = true;
        const actual = polybius(input, encode);
        const expected = "3251131343 2543241341";
        expect(actual).to.eql(expected);
    });
    it("Should ignore capital letters.", () => {
        const input = "HELLO WORLD";
        const encode = true;
        const actual = polybius(input, encode);
        const expected = "3251131343 2543241341";
        expect(actual).to.eql(expected);
    });
    it("Should show '(i/j)' when 42 is present.", () => {
        const input = "4432423352125413";
        const encode = false;
        const actual = polybius(input, encode);
        const expected = "th(i/j)nkful";
        expect(actual).to.eql(expected);
    });
    it("Should translate both i and j to 42.", () => {
        const input = "i j";
        const encode = true;
        const actual = polybius(input, encode);
        const expected = "42 42";
        expect(actual).to.eql(expected);
    });
})

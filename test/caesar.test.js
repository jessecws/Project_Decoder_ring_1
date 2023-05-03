// Write your tests here!

const { expect } = require("chai");
const { caesar } = require("../src/caesar.js");


describe("caesar", () => {
    it("Should return 'false' if the 'shift' value isn't present.", () => {
        const input = "thinkful";
        const shift = null;
        const encode = true;
        const actual = caesar(input, shift, encode);
        const expected = false;
        expect(actual).to.eql(expected);
    });
    it("Should return 'false' if the 'shift' value is equal to 0.", () => {
        const input = "thinkful";
        const shift = 0;
        const encode = true;
        const actual = caesar(input, shift, encode);
        const expected = false;
        expect(actual).to.eql(expected);
    });
    it("Should return 'false' if the 'shift' less than -25.", () => {
        const input = "thinkful";
        const shift = -26;
        const encode = true;
        const actual = caesar(input, shift, encode);
        const expected = false;
        expect(actual).to.eql(expected);
    });
    it("Should return 'false' if the 'shift' less greater 25.", () => {
        const input = "thinkful";
        const shift = 99;
        const encode = true;
        const actual = caesar(input, shift, encode);
        const expected = false;
        expect(actual).to.eql(expected);
    });
    it("Should maintain spaces and other nonalphabetic symbols on encoding.", () => {
        const input = "This is a secret message!";
        const shift = 8;
        const encode = true;
        const actual = caesar(input, shift, encode);
        const expected = "bpqa qa i amkzmb umaaiom!"
        expect(actual).to.eql(expected);
    });
    it("Should maintain spaces and other nonalphabetic symbols on decoding.", () => {
        const input = "BPQA qa I amkzmb umaaiom!";
        const shift = 8;
        const encode = false;
        const actual = caesar(input, shift, encode);
        const expected = "this is a secret message!"
        expect(actual).to.eql(expected);
    });
    it("Should ignore Capital letters", () => {
        const input = "THIS IS A SECRET MESSAGE!";
        const shift = 8;
        const encode = true;
        const actual = caesar(input, shift, encode);
        const expected = "bpqa qa i amkzmb umaaiom!"
        expect(actual).to.eql(expected);
    });
    it("Should wrap letters around the alphabet so that a letter z shifted by 3 should be a letter c.", () => {
        const input = "z";
        const shift = 3;
        const encode = true;
        const actual = caesar(input, shift, encode);
        const expected = "c"
        expect(actual).to.eql(expected);
    });
})

const assert = require('chai').assert;
const mySquare = require('../../../../src/common/util/math/mySquare.js');

const testSquare = 3;
const testSquareCorrect = 9;
const testSquareString = "10";
const testSquareStringCorrect = 100;

describe('mySquare', function() {
    describe('toSquare', function() {
        it('toSquare(' + testSquare + ') should return the cubed version of the number ' + testSquare + '', function() {
            let result = mySquare.toSquare(testSquare);
            assert.equal(result, testSquareCorrect);
        });

        it('mySquare("' + testSquareString + '") should convert the string version of a number to the number type. It will then return the cubed version of the string "' + testSquareString + '"', function() {
            let result = mySquare.toSquare(testSquareString);
            assert.equal(result, testSquareStringCorrect);
        });
    });
});
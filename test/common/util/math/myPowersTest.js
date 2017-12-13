const test = require('chai').assert;
const mySquare = require('../../../../src/common/util/math/mySquare.js');

const testSquare = 3;
const testSquareCorrect = 9;
const testSquareString = "10";
const testSquareStringCorrect = 100;

describe('mySquare', function() {
    describe('toSquare', function() {
        it('toSquare(' + testSquare + ') should return the cubed version of the number ' + testSquare + '', function() {
            let result = mySquare.toSquare(testSquare);
            test.equal(result, testSquareCorrect);
        });

        it('mySquare("' + testSquareString + '") should convert the string version of a number to the number type. It will then return the cubed version of the string "' + testSquareString + '"', function() {
            let result = mySquare.toSquare(testSquareString);
            test.equal(result, testSquareStringCorrect);
        });
    });
});

const assert = require('chai').assert;
const myCube = require('../../../../src/common/util/math/myCube.js');

const testCube = 2;
const testCubeCorrect = 8;
const testCubeString = "5";
const testCubeStringCorrect = 125;

describe('myCube', function() {
    describe('toCube', function() {
        it('toCube(' + testCube + ') should return the cubed version of the number ' + testCube + '', function() {
            let result = myCube.toCube(testCube);
            assert.equal(result, testCubeCorrect);
        });

        it('myCube("' + testCubeString + '") should convert the string version of a number to the number type. It will then return the cubed version of the string "' + testCubeString + '"', function() {
            let result = myCube.toCube(testCubeString);
            assert.equal(result, testCubeStringCorrect);
        });
    });
});
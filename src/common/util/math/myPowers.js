var myCube = require('./myCube.js');
var mySquare = require('./mySquare.js');

module.exports = {

    myPowers: function(inpNumber, exponent) {
        if (typeof exponent == "string") {
            inpNumber = parseInt(inpNumber);
        }

        if (exponent == 0) {
            return 1;
        } else if (exponent == 1) {
            return inpNumber;
        } else if (exponent == 2) {
            return mySquare.toSquare(inpNumber);
        } else if (exponent == 3) {
            return myCube.toCube(inpNumber);
        } else {
            while (x > 2) {
                exponent -= 1;
                inpNumber *= inpNumber;
            }
            return inpNumber;
        }
    }
}
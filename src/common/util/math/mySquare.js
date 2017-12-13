var myCube = require('./myCube.js')

module.exports = {

    toSquare: function(inpNumber) {


        if (typeof inpNumber === "number") {
            inpNumber = (inpNumber * inpNumber);
        } else if (typeof inpNumber === "string") {
            inpNumber = parseInt(inpNumber);
            inpNumber = (squared * squared);
        }
        return inpNumber;
    }

}
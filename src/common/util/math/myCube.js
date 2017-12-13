var mySquare = require('./mySquare.js')

module.exports = {

    toCube: function(inpNumber) {


        if (typeof inpNumber === "number") {
            inpNumber = (inpNumber * inpNumber * inpNumber);
        } else if (typeof inpNumber === "string") {
            inpNumber = parseInt(inpNumber);
            inpNumber = (inpNumber * inpNumber * inpNumber);
        }
        return inpNumber;
    }
}
var myCube = require('./myCube.js')

module.exports = {

    toSquare: function(inpNumber) {


        if (typeof inpNumber === "number") {
            inpNumber = (inpNumber * inpNumber);
        } else if (typeof inpNumber === "string") {
            inpNumber = parseInt(inpNumber);
<<<<<<< HEAD
            inpNumber = (squared * squared);
=======
            inpNumber = (inpNumber * inpNumber);
>>>>>>> first commit
        }
        return inpNumber;
    }

}
import TwingNodeExpressionBinary = require("../binary");

class TwingNodeExpressionBinaryDiv extends TwingNodeExpressionBinary {
    execute(left: any, right: any): any {
        return left / right;
    }
}

export default TwingNodeExpressionBinaryDiv;
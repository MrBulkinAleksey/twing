import TwingNodeExpressionBinary = require("../binary");

class TwingNodeExpressionBinaryMod extends TwingNodeExpressionBinary {
    execute(left: any, right: any): any {
        return left % right;
    }
}

export default TwingNodeExpressionBinaryMod;
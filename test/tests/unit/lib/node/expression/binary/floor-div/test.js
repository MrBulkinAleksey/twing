const {
    TwingNodeExpressionBinaryFloorDiv,
    TwingNodeExpressionConstant
} = require('../../../../../../../../build/main');
const TwingTestMockCompiler = require('../../../../../../../mock/compiler');

const tap = require('tape');

tap.test('node/expression/binary/floor-div', function (test) {
    test.test('constructor', function (test) {
        let left = new TwingNodeExpressionConstant(1, 1, 1);
        let right = new TwingNodeExpressionConstant(2, 1, 1);
        let node = new TwingNodeExpressionBinaryFloorDiv([left, right], 1, 1);

        test.same(node.getNode('left'), left);
        test.same(node.getNode('right'), right);

        test.end();
    });

    test.test('compile', function (test) {
        let left = new TwingNodeExpressionConstant(1, 1, 1);
        let right = new TwingNodeExpressionConstant(2, 1, 1);
        let node = new TwingNodeExpressionBinaryFloorDiv([left, right], 1, 1);
        let compiler = new TwingTestMockCompiler();

        test.same(compiler.compile(node).getSource(), 'Math.floor((1 / 2))');

        test.end();
    });

    test.end();
});

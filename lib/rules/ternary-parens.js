module.exports = {
  meta: {
    docs: {
      description: "Enforce parentheses around ternary conditional",
      category: "Stylistic Issues",
      recommended: true
    },
    fixable: "code",
    schema: [] // no options
  },
  create: function(context) {
    return {
      ConditionalExpression: function(node) {
        var token = context.getTokenByRangeStart(node.start);
        if (!token || token.type !== 'Punctuator' || token.value !== '(') {
          context.report({
            message: 'Parentheses required around ternary conditional',
            node: node,
            fix: function(fixer) {
              var testNode = node.test,
                  src = context.getSourceCode(),
                  srcText = src.text.substring(testNode.start, testNode.end);

              return fixer.replaceTextRange([testNode.start, testNode.end], '(' + srcText + ')');
            }
          });
        }
      }
    };
  }
};

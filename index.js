/**
 * @fileoverview Rule to enforce parentheses around ternary conditional expressions
 * @author Wyatt Greenway
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------
module.exports = {
  rules: {
    'ternary-parens': require('./lib/rules/ternary-parens')
  },
  rulesConfig: {
    'ternary-parens': 1
  }
};

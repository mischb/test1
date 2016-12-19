(function () {
  'use strict';

  const assert = module.require('assert'),
    calculate = new (module.require('./calculate'));
  let assertionError;

  try {
    assert.strictEqual(calculate.seven(calculate.times(calculate.five())), 35);
    assert.strictEqual(calculate.four(calculate.plus(calculate.nine())), 13);
    assert.strictEqual(calculate.eight(calculate.minus(calculate.three())), 5);
    assert.strictEqual(calculate.six(calculate.dividedBy(calculate.two())), 3);
  } catch (e) {
    assertionError = e;
  } finally {
    if (assertionError) {
      console.error(assertionError);
    } else {
      console.log('\n--- All Tests Passed ---\n');
    }
  }
})();
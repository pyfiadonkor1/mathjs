'use strict'

import { factory } from '../../utils/factory'
import { deepMap } from '../../utils/collection'

const name = 'acot'
const dependencies = ['typed', 'type.BigNumber']

export const createAcot = factory(name, dependencies, ({ typed, type: { BigNumber } }) => {
  /**
   * Calculate the inverse cotangent of a value, defined as `acot(x) = atan(1/x)`.
   *
   * For matrices, the function is evaluated element wise.
   *
   * Syntax:
   *
   *    math.acot(x)
   *
   * Examples:
   *
   *    math.acot(0.5)           // returns number 0.4636476090008061
   *    math.acot(math.cot(1.5)) // returns number 1.5
   *
   *    math.acot(2)             // returns Complex 1.5707963267948966 -1.3169578969248166 i
   *
   * See also:
   *
   *    cot, atan
   *
   * @param {number | Complex | Array | Matrix} x   Function input
   * @return {number | Complex | Array | Matrix} The arc cotangent of x
   */
  const acot = typed(name, {
    'number': function (x) {
      return Math.atan(1 / x)
    },

    'Complex': function (x) {
      return x.acot()
    },

    'BigNumber': function (x) {
      return new BigNumber(1).div(x).atan()
    },

    'Array | Matrix': function (x) {
      return deepMap(x, acot)
    }
  })

  acot.toTex = { 1: `\\cot^{-1}\\left(\${args[0]}\\right)` }

  return acot
})

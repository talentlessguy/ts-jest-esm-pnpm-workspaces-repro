import { add } from './packages/b/src'
import { describe, it } from '@jest/globals'

describe('suite', () => {
  it('case', () => void expect(add(1, 2)).toBe(3))
})

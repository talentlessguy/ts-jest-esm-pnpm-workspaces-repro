export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  globals: {
    'ts-jest': {
      useESM: true
    }
  },
  transform: {
    '^.+\\.(t|j)sx?$': 'ts-jest'
  },
  testRegex: '(/tests/.*|\\.(test))\\.(ts|tsx|js)$',
  moduleFileExtensions: ['ts', 'js', 'json']
}

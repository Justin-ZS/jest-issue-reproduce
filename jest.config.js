module.exports = {
  rootDir: '.',
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    'Utils': '<rootDir>/src/utils', // error
    // 'Utils2': '<rootDir>/src/utils', // all is well
  }
};
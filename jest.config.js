// module.exports = {
//   transform: {
//     "^.+\\.(js|jsx)$": "babel-jest",
//   },
//   testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
//   reporters: ["default"],
  
//   collectCoverageFrom: [
//     '/src/*.{js,jsx}'
//   ],
//   setupFilesAfterEnv:[
//     "./node_modules/@tencent/dwt/dist/src/testbase/testbase.js",
//     "/test-setup.js"
//   ],
//   moduleNameMapper: {
//     'assets/images/.+?\\.svg$': '/test/__mocks__/svgMock.js',
//     '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|ogg)$': '/test/__mocks__/fileMock.js',
//     '\\.(css|less|scss)$': '/test/__mocks__/styleMock.js',
//     '^@/(.*)$': '/src/$1'
//   },
//   coverageReporters: ["json", "lcov", "text", "clover"],
//   transformIgnorePatterns: ["/node_modules/(?!(lodash-es|other-es-lib))"]
// };

module.exports = {
  moduleFileExtensions: [
    'ts',
    'js',
    'jsx',
    'tsx',
    'json',
    // tell Jest to handle *.vue files
    'vue'
  ],
  transform: {
    // process *.vue files with vue-jest
    '^.+\\.vue$': require.resolve('vue-jest'),
    '^.+\\.tsx?$': require.resolve('ts-jest'),
    // '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$':
    //   require.resolve('jest-transform-stub'),
    '^.+\\.jsx?$': require.resolve('babel-jest')
  },
  transformIgnorePatterns: ['/node_modules/'],
  // support the same @ -> src alias mapping in source code
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  // testEnvironment: 'jest-environment-jsdom-fifteen',
  // serializer for snapshots
  // snapshotSerializers: ['jest-serializer-vue'],
  testMatch: ['**/tests/unit/**/*.test.[jt]s?(x)', '**/__tests__/*.[jt]s?(x)'],
  // https://github.com/facebook/jest/issues/6766
  // testURL: 'http://localhost/'
}
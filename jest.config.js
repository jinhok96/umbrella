module.exports = {
  preset: 'react-native',
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    customExportConditions: ['react-native'],
  },
  setupFilesAfterEnv: ['<rootDir>/jest-setup.js', '<rootDir>/jest.polyfills.js'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  // transformIgnorePatterns 필요할 때마다 모듈 추가
  transformIgnorePatterns: ['node_modules/(?!react-native|react-navigation|react-native-error-boundary)/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  modulePathIgnorePatterns: ['<rootDir>/index.js'],
  moduleNameMapper: {
    '^@assets/(.*)$': '<rootDir>/src/assets/$1',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^@libs/(.*)$': '<rootDir>/src/libs/$1',
    '^@navigation/(.*)$': '<rootDir>/src/navigation/$1',
    '^@screens/(.*)$': '<rootDir>/src/screens/$1',
    '^@services/(.*)$': '<rootDir>/src/services/$1',
    '^@store/(.*)$': '<rootDir>/src/store/$1',
    // CSS 및 SCSS 파일 모킹
    '\\.(css|less|scss|sass)$': '<rootDir>/src/__mocks__/styleMock.js',
    // 이미지 및 정적 파일 모킹
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/__mocks__/fileMock.js',
  },
};

module.exports = {
  root: true,
  extends: [
    'airbnb',
    'airbnb/hooks',
    'eslint:recommended',
    '@react-native',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'jest'],
  env: {
    'jest/globals': true,
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.jsx', '.tsx'], // .jsx와 .tsx 모두 허용
      },
    ],
    // ▼ React Native/TypeScript 특화 ▼
    'react/jsx-uses-react': 'off', // React 17+에서는 필요 없음
    'react/react-in-jsx-scope': 'off', // React 17+에서는 필요 없음
    '@typescript-eslint/no-unused-vars': 'warn', // unused 변수를 error 대신 warn으로
    // ▼ Airbnb 규칙 조정 ▼
    'import/prefer-default-export': 'off', // named export 허용
    'import/no-extraneous-dependencies': ['error', {devDependencies: true}], // devDependencies 허용
    'react/require-default-props': 'off', // TypeScript에서는 불필요 (타입이 기본값 처리)
    'react/jsx-props-no-spreading': 'off', // props spreading 허용 (HOC 등에서 유용)
  },
};

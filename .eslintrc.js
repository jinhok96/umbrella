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
  plugins: ['@typescript-eslint', 'simple-import-sort', 'jest'],
  env: {
    'jest/globals': true,
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        // .prettierrc.js와 동일
        arrowParens: 'avoid',
        bracketSameLine: true,
        bracketSpacing: true,
        singleQuote: true,
        trailingComma: 'all',
        endOfLine: 'auto',
        printWidth: 120,
      },
    ],
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.jsx', '.tsx'], // .jsx와 .tsx 모두 허용
      },
    ],
    // React Native/TypeScript 특화
    'react/jsx-uses-react': 'off', // React 17+에서는 필요 없음
    'react/react-in-jsx-scope': 'off', // React 17+에서는 필요 없음
    '@typescript-eslint/no-unused-vars': 'warn', // unused 변수를 error 대신 warn으로
    '@typescript-eslint/no-require-imports': 'off', // require 허용
    // Airbnb 규칙 조정
    'import/prefer-default-export': 'off', // named export 허용
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }], // devDependencies 허용
    'react/require-default-props': 'off', // TypeScript에서는 불필요 (타입이 기본값 처리)
    'react/jsx-props-no-spreading': 'off', // props spreading 허용 (HOC 등에서 유용)
    // 확장자 생략 허용 (React Native 관례 따름)
    'import/extensions': [
      'error',
      'ignorePackages', // 패키지 외부 파일은 확장자 생략 허용
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    // simple-import-sort (import 정렬)
    'simple-import-sort/imports': [
      'error',
      {
        groups: [['^\\u0000'], ['^react'], ['^@'], ['^[a-z]'], ['^@/'], ['^\\./', '^\\.\\./']],
      },
    ],
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    react: {
      version: 'detect',
    },
  },
};

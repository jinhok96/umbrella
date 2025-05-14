module.exports = {
  root: true,
  extends: [
    'airbnb',
    'airbnb/hooks',
    'eslint:recommended',
    '@react-native',
    'plugin:@typescript-eslint/recommended',
    'plugin:@tanstack/query/recommended',
    'plugin:jest-dom/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import', 'jest'],
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
    // Import 정렬
    'import/order': [
      'error',
      {
        groups: [
          'builtin', // 1. Built-in types (react, react-native 등)
          'external', // 2. node_modules 의존성
          'internal', // 3. 프로젝트 내부 경로 (@..)
          'parent', // 4. 상위 디렉토리 (../)
          'sibling', // 5. 같은 디렉토리 (./)
          'index', // 6. index 파일
          'object', // 7. 타입 import (type 키워드 사용 시)
          'type', // 8. 타입 전용 import
        ],
        pathGroups: [
          // 1. react와 react-native 계열을 하나의 그룹으로 통합
          {
            pattern: '{react,react-native}{,/**}',
            group: 'builtin',
            position: 'before',
          },
          // 2. react-* 또는 react-native-* 외부 패키지 (별도 그룹)
          {
            pattern: 'react-*',
            group: 'external',
            position: 'after',
          },
          {
            pattern: 'react-native-*',
            group: 'external',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['react', 'react-native'],
        'newlines-between': 'always', // 그룹 간 줄바꿈 강제
        alphabetize: {
          order: 'asc', // 알파벳 순 정렬
          caseInsensitive: true, // 대소문자 구분 없음
        },
        warnOnUnassignedImports: true, // 그룹 미할당 시 경고
      },
    ],
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    // type import
    '@typescript-eslint/consistent-type-imports': 'error',
    // 기타 설정
    'react/jsx-no-useless-fragment': 'off',
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

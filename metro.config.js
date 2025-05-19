const path = require('path');

const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const { withNativeWind } = require('nativewind/metro');

const defaultConfig = getDefaultConfig(__dirname);

const config = {
  resolver: {
    unstable_enableSymlinks: true, // Windows 대응
    unstable_enablePackageExports: true,
    nodeModulesPaths: [
      path.resolve(__dirname, 'node_modules'),
      path.resolve(__dirname, 'src'), // src 디렉토리 인식 추가
    ],
    sourceExts: ['tsx', 'ts', 'jsx', 'js', 'json'], // 확장자 처리, 순서 중요
    // tsconfig.json, babel.config.js와 통일
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@libs': path.resolve(__dirname, 'src/libs'),
      '@navigation': path.resolve(__dirname, 'src/navigation'),
      '@screens': path.resolve(__dirname, 'src/screens'),
      '@services': path.resolve(__dirname, 'src/services'),
      '@store': path.resolve(__dirname, 'src/store'),
    },
    extraNodeModules: new Proxy(
      {},
      {
        get: (target, name) => path.join(process.cwd(), `node_modules/${name}`),
      },
    ),
  },
  watchFolders: [path.resolve(__dirname), path.resolve(__dirname, 'src')],
};

module.exports = withNativeWind(mergeConfig(defaultConfig, config), { input: './src/global.css' });

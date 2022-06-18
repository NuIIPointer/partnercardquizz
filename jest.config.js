// Sync object
/** @type {import('@jest/types').Config.InitialOptions} */
// Or async function
module.exports = async () => {
  return {
    verbose: true,
    transformIgnorePatterns: [
      '/node_modules/(?!(@react-native|react-native)/).*/',
    ],
    preset: 'react-native',
    setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
    rootDir: './',
  };
};

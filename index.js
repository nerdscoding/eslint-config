module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [ 
    '@typescript-eslint',
    'jest',
  ],
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
  ],
};

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
  rules: {
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
  },
};

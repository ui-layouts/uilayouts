/** @type {import('prettier').Config} */
module.exports = {
  trailingComma: 'es5',
  semi: true,
  tabWidth: 2,
  singleQuote: true,
  jsxSingleQuote: true,
  overrides: [
    {
      files: '*.mdx',
      options: { parser: 'babel' }, // use 'babel' instead of 'mdx'
    },
  ],
};

module.exports = {
    root: true,
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            impliedStrict: true,
            jsx: true
        }
    },
    env: {
        es6: true,
        node: true,
        browser: true
    },
    plugins: [
        'react'
    ],
    extends: 'valtech',
    rules: {
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
    }
};

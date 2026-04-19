module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: ['airbnb', 'plugin:@typescript-eslint/recommended', 'plugin:i18next/recommended', 'plugin:storybook/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        '@typescript-eslint',
        'react',
        'i18next',
        "react-hooks",
    ],
    rules: {
        indent: [2, 4],
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
        'import/no-unresolved': 'off',
        'react/react-in-jsx-scope': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'warn',
        'react/require-default-props': 'off',
        'react/function-component-definition': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['error'],
        'import/no-extraneous-dependencies': 'off',
        'import/extensions': 'off',
        'no-underscore-dangle': 'off',
        'i18next/no-literal-string': [
            'error',
            {
                markupOnly: true,
                ignoreAttribute: ['data-testid', 'to'],
            },
        ],
        'max-len': ['error', { code: 120, ignoreComments: true }],
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        "react-hooks/rules-of-hooks": "error", 
        "react-hooks/exhaustive-deps": "error",
    },
    globals: {
        __IS_DEV__: true,
    },
    overrides: [
        { 
            files: '**/src/**/*.{test,stories}.{ts,tsx}', 
            rules: { 
                'i18next/no-literal-string': 'off',
                'max-len': 'off'
            } 
        },
    ],
};

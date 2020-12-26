module.exports = {
    root: true,
    env: {
        node: true,
        browser: true,
        "es6": true
    },
    extends: [
        'plugin:vue/essential',
        '@vue/standard'
    ],
    parserOptions: {
        parser: 'babel-eslint'
    },
    rules: {
        //关闭末尾空行
        'eol-last': 0,
        "indent": ["off", 2], // 关闭缩进2个字符
        'semi': [0], //关闭强制不写;
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
    }
}
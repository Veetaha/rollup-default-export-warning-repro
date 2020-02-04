import commonjs from '@rollup/plugin-commonjs';

export default {
    input: './main.js',
    plugins: [
        commonjs()
    ],
    output: {
        file: './main.bundle.js',
        format: 'cjs',
        // exports: 'named', This suppresses the warning
    }
};

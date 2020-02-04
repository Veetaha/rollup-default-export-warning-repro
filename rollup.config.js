import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import nodeBuiltins from 'builtin-modules';

export default {
    input: './main.js',
    plugins: [
        resolve({
            preferBuiltins: true,
        }),
        commonjs()
    ],
    external: [...nodeBuiltins, 'vscode'],
    output: {
        file: './main.bundle.js',
        format: 'cjs',
        // exports: 'named', This suppresses the warning
    }
};

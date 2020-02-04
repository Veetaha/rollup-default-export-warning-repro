# Reproduction

Bootstrap script

```bash
git clone https://github.com/Veetaha/rollup-default-export-warning-repro.git
cd rollup-default-export-warning-repro
npm i
npm run package
```

Additional files:

* `commonjs.output.js` is the output of code that I took from the debugger after it was transformed by `commonjs` plugin.

* `original-project-commonjs.output.js` is the output of code that I took from the debugger after it was transformed by `commonjs` plugin. The code was taken from the
[original project](https://github.com/rust-analyzer/rust-analyzer/blob/master/editors/code/rollup.config.js) where this issue appeared. Please see `// COMMENT:` in there.

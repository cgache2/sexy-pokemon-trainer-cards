import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import postcss from 'rollup-plugin-postcss';
import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs'
  },
  plugins: [
    svelte(),
    postcss(),
    json(),
    commonjs(),
    resolve({
      // Include the 'svelte' export condition
      exportConditions: ['node', 'browser', 'es2015', 'module', 'svelte']
    })
  ]
};
import typescript from 'rollup-plugin-typescript2'
import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'

const path = require('path')

const { LERNA_ROOT_PATH } = process.env
const packagePath = process.cwd() // 当前目录
const fileName = path.basename(packagePath) // 打包后文件名

export default {
  input: `${packagePath}/index.ts`,
  output: [
    {
      file: `dist/${fileName}.cjs.js`,
      format: 'cjs'
    },
    {
      file: `dist/${fileName}.esm.js`,
      format: 'esm'
    },
    {
      file: `dist/${fileName}.umd.js`,
      format: 'umd',
      name: fileName
    }
  ],
  plugins: [
    typescript({
      tsconfig: `${LERNA_ROOT_PATH}/tsconfig.json`
    }),
    resolve({ mainFields: ['jsnext', 'preferBuiltins', 'browser'] }),
    commonjs({
      browser: true
    }),
    json(),
    babel({
      exclude: 'node_modules/**'
    }),
    terser()
  ],
  external: [
    'http',
    'https',
    'url',
    'assert',
    'stream',
    'tty',
    'util',
    'os',
    'zlib'
  ]
}

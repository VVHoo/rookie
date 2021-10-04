import typescript from 'rollup-plugin-typescript2'
import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'

const path = require('path')

const { LERNA_PACKAGE_NAME, LERNA_ROOT_PATH } = process.env
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
      name: LERNA_PACKAGE_NAME
    }
  ],
  plugins: [
    typescript({
      tsconfig: `${LERNA_ROOT_PATH}/tsconfig.json`
    }),
    babel({
      exclude: 'node_modules/**'
    }),
    terser()
  ]
}

import { nodeResolve } from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';
import copy from 'rollup-plugin-copy';

const config = {
  input: './src/index.js',
  output: {
    dir: 'dist',
    format: 'es',
  },
  plugins: [
    copy({
      targets: [
        {
          src: ['src/**/*.png', 'src/**/*.scss'],
          dest: 'dist',
          rename: (name, extension, fullPath) => {
            return fullPath.replace('src/', '');
          },
        },
      ],
    }),
    babel({
      babelHelpers: 'runtime',
      exclude: 'node_modules/**',
    }),
    nodeResolve({
      extensions: ['.js', '.jsx'],
    }),
  ],
  external: [
    /@babel\/runtime/,
    /\.module\.scss/,
    /\.png/,
    /react/,
    /react-transition-group/,
    /react-router-dom/,
    /prop-types/,
    /classnames/,
    /@material-ui\/icons/,
  ],
};

export default config;

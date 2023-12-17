import Ts from 'rollup-plugin-typescript2'

export default {
    input: [
        'src/index.ts',
    ],
    output: {
        dir: 'lib',
        format: 'cjs',
        sourcemap: true,
        preserveModules: true,
    },
    plugins: [Ts()],
    external: ['react', 
    '@ds.e/foundation'
]
}
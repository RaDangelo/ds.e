module.exports = {
    framework: {
        name: '@storybook/react-vite',
      },
    stories: ['../src/**/*.stories.tsx'],

    addons: [
        '@storybook/preset-typescript',
        '@storybook/addon-storysource',
        '@storybook/addon-knobs',
        '@storybook/addon-a11y'
    ],

    docs: {
        autodocs: true
    }
}
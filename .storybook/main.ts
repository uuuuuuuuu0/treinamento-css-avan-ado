module.exports = {
    stories: ['../src/components/**/stories.tsx', '../src/designSystemComponents/**/stories.tsx'],
    addons: ['@storybook/addon-essentials', 'storybook-addon-designs'],
    staticDirs: ['../public'],
    webpackFinal: (config) => {
        config.resolve.modules.push(`${process.cwd()}/src`);
        return config;
    }
};

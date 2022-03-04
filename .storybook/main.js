module.exports = {
    "stories": [
        "../src/**/*.stories.mdx",
        "../src/**/*.stories.@(js|jsx|ts|tsx)"
    ],
    "addons": [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/preset-scss",
        {
            name: "@storybook/preset-create-react-app",
            options: {
                scriptsPackageName: 'react-scripts'
            }
        }
    ],
    //https://storybook.js.org/docs/react/configure/webpack#extending-storybooks-webpack-config
    webpackFinal: async (config, { configType }) => {
        // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
        config.node = { ...(config.node ?? {}), fs: 'empty' } //https://github.com/motdotla/dotenv/issues/233
        config.module.rules.push(
            {
                test: /\.svg$/,
                use: ["@svgr/webpack"]
            }
        );
        return config;
    }
}

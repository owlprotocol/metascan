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
    "webpack": async config => {
        config.module.rules.push(
            {
                test: /\.svg$/,
                use: ["@svgr/webpack"]
            }
        );
        return config;
    }
}

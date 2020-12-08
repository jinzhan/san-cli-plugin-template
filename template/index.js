module.exports = {
    id: 'plugin:{{name}}',
    apply(api, projectOptions, options = {}) {
        api.chainWebpack(webpackConfig => {
            // TODO:
        });
    }
};

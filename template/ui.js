const path = require('path');
const fs = require('fs-extra');
const {getDebugLogger} = require('san-cli-utils/ttyLogger');
const {processStats} = require('./lib/stats');

const debug = getDebugLogger('ui:third-plugin-{{name}}');

module.exports = api => {
    // 加了一个san.cli的命名空间
    const sharedData = api.getSharedData('san.cli.');

    if (process.env.SAN_CLI_UI_DEV) {
        api.registerAddon({
            id: 'san.san-cli.{{name}}.dev',
            url: 'http://localhost:8955/index.js'
        });
    }
    else {
        api.registerAddon({
            id: 'san.san-cli.{{name}}',
            path: 'san-cli-plugin-dashboard/dist'
        });
    }
};

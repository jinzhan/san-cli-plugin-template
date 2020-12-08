const path = require('path');
const fs = require('fs-extra');
const {getDebugLogger} = require('san-cli-utils/ttyLogger');
const {processStats} = require('./lib/stats');

const debug = getDebugLogger('ui:third-plugin-dashboard');

module.exports = api => {
    // 加了一个san.cli的命名空间
    const sharedData = api.getSharedData('san.cli.');
    const ipc = api.getIpc();

    if (process.env.SAN_CLI_UI_DEV) {
        api.registerAddon({
            id: 'san.san-cli.client-addon.dev',
            url: 'http://localhost:8955/index.js'
        });
    }
    else {
        api.registerAddon({
            id: 'san.san-cli.client-addon',
            path: 'san-cli-plugin-dashboard/dist'
        });
    }

    ipc.on(({data}) => {
        if (data.sanCliServe) {
            sharedData.set('serve-url', data.sanCliServe.url);
        }
    });
};

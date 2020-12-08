/**
 * @file addon-widgets registry
*/

import Demo from './components/demo/demo';

/* global ClientAddonApi */
if (window.ClientAddonApi) {
    ClientAddonApi.defineComponent('san.widgets.components.demo', Demo);
}

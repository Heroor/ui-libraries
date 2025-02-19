import Vue from 'vue';
import { JFlowVuePlugin } from '@joskii/jflow-vue2-plugin';
import UProcessGraphReal from "./index.vue";
import UProcessGraph from './index.designer.vue';
import ProcessNodeGroup from './components/custom/process-node-group.js';
import GatewayGroup from './components/custom/gateway';
import FlowLink from './components/custom/flow-link';

Vue.use(JFlowVuePlugin, {
    customGroups: {
        ProcessNodeGroup,
        GatewayGroup
    },
    customLink: {
        FlowLink
    }
});

export {
    UProcessGraphReal,
    UProcessGraph,
};


export default UProcessGraph
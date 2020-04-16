//add all the components that we are actually using from the library
import {
    Button,
    Tree,
    Spin,
    Tag,
    notification
} from 'ant-design-vue';

import Fa from "components/Fa";

Spin.setDefaultIndicator({
    indicator: {
        render() {
            return <a-icon class='anticon-loading' type='loading' spin />
        },
    }
});

export default {
    install(Vue, options) {
        Vue.use(Button);
        Vue.use(Tree);
        Vue.use(Tag);

        Vue.component("fa", Fa);

        Vue.component("a-spin", Spin);

        notification.config({
            placement: 'bottomRight',
            bottom: '50px',
        });

        Vue.prototype.$notification = notification;
    }
}
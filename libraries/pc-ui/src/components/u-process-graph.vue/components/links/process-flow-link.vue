<template>
    <j-flow-link
        ref="root"
        :configs="linkConfigs"
        :from="configs.from.source"
        :to="configs.to.source">
    </j-flow-link>
</template>

<script>
export default {
    props: {
        node: Object,
        configs: Object,
    },
    inject: [
        'renderJFlow',
    ],

    computed: {
        linkConfigs() {
            return {
                content: this.value,
                backgroundColor: this.configs.completed ? '#26BD71' : '#999999',
                approximate: 400,
                fromDir: this.configs.fromDir,
                toDir: this.configs.toDir,
                showLineSeg: false,
                waypoints: this.configs.waypoints,
                showContent: true,
                showAdd: false
            };
        },
        value() {
            return this.node.flowValue;
        },
    },
    updated() {
        this.renderJFlow();
    },

};
</script>

<style>

</style>

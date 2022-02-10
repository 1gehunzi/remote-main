<!-- 挂载远程组件 -->

<template>
  <div>
    {{ url }}
    <component class="remote-test" :is="mode"> </component>
  </div>
</template>

<script>
import scriptLoad from "../utils/loadRemote";

export default {
  name: "Remote",
  data() {
    return {
      mode: "",
    };
  },
  props: {
    url: { type: String },
  },
  mounted() {
    this.mountCom(this.url);
  },
  methods: {
    async mountCom(url) {
      // 模拟node环境
      window.module = {};
      window.exports = {};

      // 下载远程js
      await scriptLoad(url);

      console.log(" window.module.exports;", window.module.exports);

      // 挂载在mode
      this.mode = window.module.exports.default;

      delete window.module;
      delete window.exports;
    },
  },
};
</script>

<template>
  <div></div>
</template>

<script>
export default {
  name: "ChangelogfyVueJS",
  props: {
    selector: {
      type: String,
      required: true
    },
    appId: {
      type: String,
      required: true
    },
    initBadge: {
      type: Boolean,
      required: false,
      default: true
    },
    userId: {
      type: String,
      required: false,
      default: null
    },
    userName: {
      type: String,
      required: false,
      default: null
    },
    userEmail: {
      type: String,
      required: false,
      default: null
    },
    customData: {
      type: Object,
      required: false,
      default: null
    }
  },
  data() {
    return {};
  },
  async mounted() {
    //Create promise which resolves on script load
    let promise = new Promise((resolve, reject) => {
      let script = document.createElement("script");
      script.src = "https://widget.changelogfy.com/index.js";
      script.id = "changelogfy-script";
      script.setAttribute("async", true);
      document.head.appendChild(script);
      script.onload = resolve; //Resolve when loaded
      script.onerror = reject;
    });
    await promise; //Await for the script to be resolved

    this.$nextTick(() => {
      /*global changelogfy*/
      changelogfy.destroy();
      changelogfy.init({
        selector: this.selector,
        app_id: this.appId,
        init_badge: this.initBadge,
        data: {
          user_id: this.userId,
          user_name: this.userName,
          user_email: this.userEmail,
          custom_data: this.customData
        }
      });
    });
  }
};
</script>
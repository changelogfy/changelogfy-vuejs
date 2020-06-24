<template>
  <div>
    <a href="#" class="changelogfy-icon" v-on:click="open">
      Open
      <Changelogfy app-id="2c8cda95-51e2-4b56-b616-ca9ffde09f5b" selector=".changelogfy-icon" />
    </a>
  </div>
</template>


<script>
import Changelogfy from "./Changelogfy.vue";
export default {
  components: {
    Changelogfy
  },

  methods: {
    open() {}
  }
};
</script>

<template>
  <div>
    <a href="#" class="changelogfy-icon" v-on:click="open">
      Open
      <Changelogfy app-id="af12f992-0a0c-4cdf-8144-89af158c39e2" selector=".changelogfy-icon" />
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

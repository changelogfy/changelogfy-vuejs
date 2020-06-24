<template>
  <div>
    <a href="#" class="changelogfy-icon" v-on:click="open">
      Open
      <Changelogfy
        app-id="INSERT_YOUR_APP_ID_HERE"
        selector=".changelogfy-icon"
        user-id="123"
        user-name="Paulo Castellano"
        user-email="paulo@changelogfy.com"
        :custom-data="{
            'Job_Role': 'CEO',
            'Plan': 'Pro',
            'teammates': '4',
            'Monthly_Spend': '50 USD'
        }"
      />
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

const app = Vue.createApp({
  data() {
    return {
      showSidebar: false,
    }
  },
  methods: {
    toggleSidebar() {
      this.showSidebar = !this.showSidebar;
    }
  }
});

app.mount('#app');
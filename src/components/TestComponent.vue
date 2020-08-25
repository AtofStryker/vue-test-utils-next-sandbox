<template>
  <div>async</div>
</template>

<script>
export default {
  name: "Async",
  async beforeMount() {
    await this.delay(500);
    throw new Error("test");
  },
  methods: {
    delay(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
  }
};
</script>

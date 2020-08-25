// @ts-ignore
import TestComponent from "./TestComponent.vue";
import { shallowMount } from '@vue/test-utils'
import { createApp } from 'vue'

describe("Test Error Handler Vue 3", () => {
  it("Mounts a global errorhandler without issue", async (done) => {
    const app = createApp({})
    app.config.errorHandler = (err: any, vm, info) => {
      if(info.includes("beforeMount")){
        expect(err.message).toBe("test");
      }
      done()
    }

    shallowMount(TestComponent, {
      global:{
        // @ts-ignore
        config: {
          errorHandler: app.config.errorHandler
        }
      }
    });
  });
});

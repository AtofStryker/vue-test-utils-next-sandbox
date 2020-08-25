// @ts-ignore
import TestComponent from "./TestComponent.vue";
import { shallowMount } from "@vue/test-utils";
import { createApp } from "vue";

describe("Test Error Handler Vue 3", () => {
  it("Mounts a global errorhandler without issue", async (done) => {
    const app = createApp({});
    app.config.errorHandler = (err: any, vm, info) => {
      if (info.includes("beforeMount")) {
        expect(err.message).toBe("test");
      }
      done();
    };

    shallowMount(TestComponent, {
      global: {
        /// the below causes the exception `Cannot assign to read only property 'isNativeTag' of object '#<Object>'`
        config: app.config,
        // the below also has problems. It looks the the type is Pick<> with almost all the values of the config. Should this be a Partial type?
        // config: {
        //   errorHandler: app.config.errorHandler
        // }
      },
    });
  });
});

import { vi } from "vitest";
import { mount } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import Router from "@/lib/Router";

export default (Component: any, propsData = {}) =>
  mount(Component, {
    global: {
      plugins: [
        Router,
        createTestingPinia({
          createSpy: vi.fn,
        }),
      ],
      stubs: ["font-awesome-icon"],
    },
    propsData,
  });

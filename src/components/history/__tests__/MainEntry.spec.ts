import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import MainEntry from "../MainEntry.vue";

describe("MainEntry", () => {
  it("renders properly", () => {
    const wrapper = mount(MainEntry);

    expect(wrapper.text()).toContain("John Doe");
  });
});

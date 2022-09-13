import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import BackButton from "../BackButton.vue";

describe("BackButton", () => {
  it("renders properly", () => {
    const wrapper = mount(BackButton);

    expect(wrapper.text()).toContain("Back");
  });
});

import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import SkillEntry from "../SkillEntry.vue";

describe("SkillEntry", () => {
  it("renders properly", () => {
    const wrapper = mount(SkillEntry);

    expect(wrapper.text()).toContain("John Doe");
  });
});

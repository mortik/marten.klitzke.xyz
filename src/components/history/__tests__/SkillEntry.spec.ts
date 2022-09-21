import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import SkillEntry from "../SkillEntry.vue";

describe("SkillEntry", () => {
  it("renders properly", () => {
    const wrapper = mount(SkillEntry, {
      props: {
        skills: ["skill1", "skill2"],
      },
    });

    expect(wrapper.text()).toContain("skill1");
    expect(wrapper.text()).toContain("skill2");
  });
});

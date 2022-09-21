import { describe, it, expect } from "vitest";

import mount from "~/test/mount";
import PageLayout from "../PageLayout.vue";

describe("PageLayout", () => {
  it("renders properly", () => {
    const wrapper = mount(PageLayout, {
      slots: {
        default: "Main Content",
      },
    });

    expect(wrapper.html()).toContain("Main Content");
  });
});

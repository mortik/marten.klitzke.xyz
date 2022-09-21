import { describe, it, expect } from "vitest";

import mount from "~/test/mount";
import PageHeader from "../PageHeader.vue";

describe("PageHeader", () => {
  it("renders properly", () => {
    const wrapper = mount(PageHeader, {
      slots: {
        default: "Main Content",
      },
    });

    expect(wrapper.html()).toContain("Main Content");
  });
});

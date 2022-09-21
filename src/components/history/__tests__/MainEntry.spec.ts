import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import MainEntry from "../MainEntry.vue";

describe("MainEntry", () => {
  it("renders properly", () => {
    const wrapper = mount(MainEntry, {
      props: {
        item: {
          type: "project",
          name: "Project X",
          href: "https://example.com",
          imageUrl: "https://example.com/image.png",
          description: "description",
          from: "October 2022",
        },
      },
    });

    expect(wrapper.text()).toContain("Project X");
  });
});

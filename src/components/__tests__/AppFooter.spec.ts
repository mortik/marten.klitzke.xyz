import { describe, it, expect } from "vitest";

import mount from "~/test/mount";
import AppFooter from "../AppFooter.vue";
import type { Profile } from "@/profile";

describe("AppFooter", () => {
  it("renders properly", () => {
    const profile: Profile = {
      name: "John Doe",
      email: "john@doe.com",
      avatar: "avatar",
      backgroundImage: "background",
      links: [],
    };
    const wrapper = mount(AppFooter, {
      profile,
    });

    expect(wrapper.text()).toContain("John Doe");
  });
});

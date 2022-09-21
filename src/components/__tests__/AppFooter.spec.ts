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
      links: [],
    };
    const wrapper = mount(AppFooter, {
      props: {
        profile,
      },
    });

    expect(wrapper.text()).toContain("John Doe");
  });
});

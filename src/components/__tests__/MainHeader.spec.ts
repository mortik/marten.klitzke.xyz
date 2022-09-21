import { describe, it, expect } from "vitest";

import mount from "~/test/mount";
import MainHeader from "../MainHeader.vue";
import type { Profile } from "@/profile";

describe("MainHeader", () => {
  it("renders properly", () => {
    const profile: Profile = {
      name: "John Doe",
      email: "john@doe.com",
      avatar: "avatar",
      backgroundImage: "background",
      links: [],
    };
    const wrapper = mount(MainHeader, {
      props: {
        profile,
      },
    });

    expect(wrapper.text()).toContain("John Doe");
  });
});

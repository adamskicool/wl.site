import { shallowMount } from "@vue/test-utils";
import Button from "@/components/core/Button.vue";

const wrapper = shallowMount(Button, {
  propsData: {
    label: "button",
    raised: true,
    primary: true,
    accent: false
  }
});

describe("Button.vue", () => {
  it("should get correct classes", () => {
    expect(wrapper.contains(".md-raised")).toBeTruthy();
    expect(wrapper.contains(".md-primary")).toBeTruthy();
    expect(wrapper.contains(".md-accent")).toBeFalsy();
  });

  it("should emit correct event on click", () => {
    const buttonWrapper = wrapper.find("md-button");
    buttonWrapper.trigger("click");
    expect(wrapper.emitted().click).toBeTruthy();
    expect(wrapper.emitted().click.length).toEqual(1);
  });
});

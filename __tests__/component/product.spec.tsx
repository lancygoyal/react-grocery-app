import React from "react";
import { shallow } from "enzyme";
import Card from "@material-ui/core/Card";
import Product from "../../src/components/product";

describe("<Product />", () => {
  let mountedWrapper;

  const defaultProps = {
    data: {
      id: 1,
      name: "Test",
      desc: "Test",
      image: "Test"
    },
    cart: {}
  };

  const wrapper = (props = defaultProps) => {
    if (!mountedWrapper) {
      mountedWrapper = shallow(<Product {...props} />);
    }
    return mountedWrapper;
  };

  beforeEach = () => (mountedWrapper = undefined);

  it("should render the Card", () => {
    const component = wrapper();
    expect(component.find(Card).length).toBe(1);
  });
});

import React from "react";
import { shallow } from "enzyme";
import AppBar from "@material-ui/core/AppBar";
import { Navbar } from "../../src/components/navbar";

describe("<Navbar />", () => {
  let mountedWrapper;

  const defaultProps = {
    history: {},
    user: {},
    products: {},
    cart: {},
    firebase: {}
  };

  const wrapper = (props = defaultProps) => {
    if (!mountedWrapper) {
      mountedWrapper = shallow(<Navbar {...props} />);
    }
    return mountedWrapper;
  };

  beforeEach = () => (mountedWrapper = undefined);

  it("should render the AppBar", () => {
    const component = wrapper();
    expect(component.find(AppBar).length).toBe(1);
  });
});

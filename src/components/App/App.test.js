import { shallow } from "enzyme";
import React from "react";
import App from "./App";

describe("<App />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  it("renders without crashing", () => {
    expect(wrapper).toHaveLength(1);
  });
});

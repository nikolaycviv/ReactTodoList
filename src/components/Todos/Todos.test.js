import { shallow } from "enzyme";
import React from "react";
import Todos from "./Todos";

describe("<Todos />", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Todos />);
    });
    it("renders without crashing", () => {
        expect(wrapper).toHaveLength(1);
    });
});

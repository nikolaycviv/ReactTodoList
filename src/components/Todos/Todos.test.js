import { shallow } from "enzyme";
import React from "react";
import Todos from "./Todos";

describe("<Todos />", () => {
    let wrapper, props;
    beforeEach(() => {
        props = {
            todo: "",
            key: "",
            toggleTask: () => { }
        };
        wrapper = shallow(<Todos {...props} />);
    });
    it("renders without crashing", () => {
        expect(wrapper).toHaveLength(1);
    });
});

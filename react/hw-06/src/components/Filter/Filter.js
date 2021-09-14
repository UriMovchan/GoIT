import { useDispatch } from "react-redux";

import Input from "components/input";
import InputGroup from "components/styled/InputGroup";

import { setFilter } from "redux/filter/filterActions";

const Filter = () => {
  const dispatch = useDispatch();

  // const setFilterHandler = (v) => {
  //   dispatch(setFilter(v));
  // };

  return (
    <InputGroup>
      <Input
        type="text"
        name="find"
        id="input-find"
        placeholder="Find contacts by name"
        onChange={(e) => dispatch(setFilter(e.target.value))}
        autoComplete={"off"}
      />
    </InputGroup>
  );
};
export default Filter;

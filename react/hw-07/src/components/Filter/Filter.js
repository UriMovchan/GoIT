import { useDispatch } from "react-redux";

import Input from "components/input";
import InputGroup from "components/styled/InputGroup";

import { setFilter } from "redux/filter/filterActions";

const Filter = props => {
  return (
    <InputGroup>
      <Input
        type="text"
        name="find"
        id="input-find"
        placeholder="Find contacts by name"
        onChange={e => props.setFilter(e.target.value)}
        autoComplete={"off"}
      />
    </InputGroup>
  );
};
export default Filter;

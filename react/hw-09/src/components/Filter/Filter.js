import Input from "components/input";
import InputGroup from "components/styled/InputGroup";

const Filter = ({ setFilter }) => {
  return (
    <InputGroup>
      <Input
        type="text"
        name="find"
        id="input-find"
        placeholder="Find contacts by name"
        onChange={e => setFilter(e.target.value)}
        autoComplete={"off"}
      />
    </InputGroup>
  );
};
export default Filter;

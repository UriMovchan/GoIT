import { Component } from "react";

import InputGroup from "components/styled/InputGroup";
import Input from "components/input";

export class Filter extends Component {
  render() {
    const { filterContact } = this.props;

    return (
      <InputGroup>
        <Input
          type="text"
          name="find"
          id="input-find"
          placeholder="Find contacts by name"
          onChange={(e) => filterContact(e.target.value)}
        />
      </InputGroup>
    );
  }
}

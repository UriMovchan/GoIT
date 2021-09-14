import { createReducer } from "@reduxjs/toolkit";

import { setFilter } from "./filterActions";

const filterReducer = createReducer("", {
  [setFilter]: (state, action) => action.payload,
});

export default filterReducer;

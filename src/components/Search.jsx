import React, { useEffect } from "react";
import { useGlobalDispatch, useGlobalState } from "../context/GlobalContext";
import useDebounce from "../customHook/useDebounce";

// Using debounciong to show case if we have real time api data on search
// for mock api no need to implement debouncing could be done handling state in global state and usin

const SearchBar = () => {
  let dispatch = useGlobalDispatch();
  let { searchedTerm } = useGlobalState();
  let debouncedSearchTerm = useDebounce(searchedTerm, 500);

  // to handle the local state as well for this component
  const onChangeSearch = (e) => {
    const val = e.target.value;
    dispatch({
      type: "search_input_fun",
      payload: val,
    });
  };

  // this one to handle the search with debouncing
  useEffect(() => {
    dispatch({
      type: "search_input_fun",
      payload: debouncedSearchTerm,
    });
  }, [debouncedSearchTerm, dispatch]);

  return (
    <input
      className="form-control"
      type="search"
      placeholder="Search by status, name, account, region"
      value={searchedTerm}
      onChange={(e) => onChangeSearch(e)}
    />
  );
};

export default SearchBar;

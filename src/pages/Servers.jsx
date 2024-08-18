import React, { useMemo } from "react";
import { serverDataconst } from "../data/MockData";
import HTMLTable from "../components/tableComponent/Body";
import { useGlobalState } from "../context/GlobalContext";

const Servers = () => {
  let { searchedTerm } = useGlobalState();
  const filteredTableData = useMemo(() => {
    // using useMemo to optomize the code
    if (!searchedTerm) {
      return serverDataconst; // If there is no search term, return the original serverDataconst
    }
    return serverDataconst.filter((item) =>
      ["status", "name", "account", "region"].some((key) =>
        item[key].toString().toLowerCase().includes(searchedTerm.toLowerCase())
      )
    );
  }, [serverDataconst, searchedTerm]); // Only re render when search term changes

  return (
    <div class="table-responsive">
      <HTMLTable
        tableData={filteredTableData} // here we are passing data as table_data
        tableClass="table table-bordered table-hover "
        theadClass="table-primary"
        tbodyClass="test"
        headersData={Object.keys(serverDataconst[0])}
      />
    </div>
  );
};

export default Servers;

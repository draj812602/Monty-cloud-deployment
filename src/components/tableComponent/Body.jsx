import React from "react";

import Header from "./Headers";

const HTMLTable = ({
  tableClass,
  theadClass,
  tbodyClass,
  tableData,
  headersData,
}) => {
  // get table row data
  const tdData = () => {
    return tableData.map((data, ind) => {
      return (
        <tr key={ind + "d"}>
          {headersData &&
            headersData.map((v, ind) => {
              // should not use index as key, but here I am not doing any operation (delete or add) so just using index as key

              return (
                <td key={ind}>
                  {data[v] === "active" ? (
                    <span class="badge bg-success">{data[v]}</span>
                  ) : data[v] === "inactive" ? (
                    <span class="badge bg-danger">{data[v]}</span>
                  ) : (
                    data[v]
                  )}
                </td>
              );
            })}
        </tr>
      );
    });
  };

  return (
    <>
      <table className={tableClass}>
        <Header theadClass={theadClass} headerData={headersData} />

        <tbody className={tbodyClass}>{tdData()}</tbody>
      </table>
    </>
  );
};

export default HTMLTable;

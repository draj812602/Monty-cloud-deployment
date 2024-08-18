import React, { useState } from "react";

const Header = ({ headerData, theadClass }) => {
  return (
    <thead className={theadClass}>
      <tr>
        {headerData.map((name) => {
          return (
            <th key={name} className="text-uppercase">
              {name}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default Header;

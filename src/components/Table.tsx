import classNames from "@src/utils/classNames";
import React, { ReactElement } from "react";

interface Props {
  [index: string]: any;
}

export default function Table(props: Props): ReactElement {
  return (
    <div className={classNames(["table", props.className])}>
      <div className="table__header">
        {props.columns.map((column, i) => (
          <div className="table__cell"></div>
        ))}
      </div>
      {props.rows.map((row, i) => (
        <div key={i} className="table__row">
          {Object.keys(row).map((key) => (
            <div key={key} className="table__cell">
              {row[key]}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

// keysToActiveOnHover

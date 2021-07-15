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
          <div key={i} style={column.style} className="table__cell">
            {column.field}
          </div>
        ))}
      </div>
      {props.rows.map((row, i) => (
        <div key={i} className="table__row">
          {Object.keys(row).map((key, j) => (
            <div
              key={key}
              style={{
                ...props.columns[j].style,
              }}
              className="table__cell"
            >
              {row[key]()}
              {/* {typeof row[key] === "function" ? row[key]() : row[key]} */}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

// keysToActiveOnHover

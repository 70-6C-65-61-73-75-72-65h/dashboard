import React, { ReactElement } from "react";
import Table from "@src/components/Table";

interface Props {
  [index: string]: any;
}

export default function SessionsDash(props: Props): ReactElement {
  return (
    <div className="dash-sessions">
      <div className="dash-sessions__header">{props.header}</div>
      <div className="dash-sessions__settings"></div>
      <div className="dash-sessions__footer">See All Sessions</div>
      <Table
        className="dash-sessions__content"
        columns={props.table.columns}
        rows={props.table.rows}
      />
    </div>
  );
}

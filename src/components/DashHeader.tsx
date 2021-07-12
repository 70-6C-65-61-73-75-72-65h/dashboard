import React, { ReactElement } from "react";

interface Props {
  children: React.ReactNode;
}

export default ({ children }: Props) => {
  return (
    <div className="dash__header">
      <div className="dash__header-name">{children}</div>
      <div className="dash__header-settings"></div>
    </div>
  );
};

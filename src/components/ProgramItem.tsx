import React, { ReactElement } from "react";

interface ProgramInfoItem {
  primary:
    | string
    | { percentage: number; component: (props: any) => ReactElement };
  secondary: string;
}

export interface IProgramItem {
  logo: string;
  title: string;
  institution: string;
  info: Array<ProgramInfoItem>;
}

interface Props {
  item: IProgramItem;
}

export default function ProgramItem({ item }: Props): ReactElement {
  console.log(item);
  return (
    <div className="item">
      <div className="icon">
        <img src={item.logo} />
      </div>
      <div className="title">
        <div className="primary">{item.title}</div>
        <div className="secondary">{item.institution}</div>
      </div>

      <div className="info-set">
        {item.info.map((i, key) => (
          <div className="info" key={key}>
            {typeof i.primary === "string" ? (
              <div className="info-primary">{i.primary} </div>
            ) : (
              <i.primary.component progress={i?.primary?.percentage} />
            )}

            <div className="info-secondary"> {i.secondary}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

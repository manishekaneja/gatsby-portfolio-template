import React, { ChangeEvent, FC } from "react";
import classes from "./input.module.scss";
const Input: FC<
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > & {
    label: string;
    identifier: string;
    onChangeAction: (
      event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
    value: string;
    multiline?: boolean;
    rows?: number;
  }
> = ({
  label,
  onChangeAction,
  identifier,
  multiline,
  value = "",
  rows = 1,
  ...props
}) => {
  return (
    <div className={`${classes.fullWidth} ${props.className}`} {...props}>
      <label htmlFor={identifier} className={classes.label}>
        {label}
      </label>
      {multiline ? (
        <textarea
          className={classes.input}
          value={value}
          name={identifier}
          onChange={onChangeAction}
          rows={rows}
        />
      ) : (
        <input
          className={classes.input}
          value={value}
          name={identifier}
          onChange={onChangeAction}
        />
      )}
    </div>
  );
};

export default Input;

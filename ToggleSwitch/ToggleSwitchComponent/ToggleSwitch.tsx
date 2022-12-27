/* eslint-disable */
// @ts-ignore
import React = require("react");

export interface IProps {
  booleanValue: boolean;
  toggleListener: () => any;
}

const ToggleSwitchControl = (props: IProps) => {
  return (
    <div className="container">
      <div className="toggle-switch">
        <input
          type="checkbox"
          className="checkbox"
          name="toggleSwitch"
          id="toggleSwitch"
          defaultChecked={props.booleanValue}
          onChange={props.toggleListener}
        />
        <label className="label" htmlFor="toggleSwitch">
          <span className="inner" />
          <span className="switch" />
        </label>
      </div>
    </div>
  );
};

export default ToggleSwitchControl;

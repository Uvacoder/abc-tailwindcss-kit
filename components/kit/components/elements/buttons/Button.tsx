import React, { FC } from "react";

interface Props {
  color?: string;
  icon?: string;
  disabled?: boolean;
  isFat?: boolean;
  animated?: boolean;
  label?: string;
  onClick?: () => void;
}

const Button = (props: Props) => {
  return (
    <button
      onClick={props.onClick}
      type="button"
      disabled={props.disabled}
      className={`${props.isFat ? "py-4 px-6" : "py-2 px-4"}  ${
        props.icon ? "flex justify-center items-center" : "flex-shrink-0"
      } bg-${
        props.color
      }-600 text-white w-full transition ease-in duration-200 text-center text-base font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-${
        props.color
      }-700 focus:outline-none focus:ring-2 focus:ring-${
        props.color
      }-500 focus:ring-offset-2 focus:ring-offset-${props.color}-200${
        props.disabled ? " opacity-70 cursor-not-allowed" : ""
      }${!props.label ? " w-12 h-12" : ""}`}
    >
      {props.icon && (
        <i
          className={`${props.icon} ${props.animated ? "animate-spin" : ""} ${
            props.label ? " mr-4" : ""
          }`}
        />
      )}
      {props.label && <span className="w-full">{props.label}</span>}
    </button>
  );
};
export default Button;
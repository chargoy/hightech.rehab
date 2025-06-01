import * as React from "react";

function HandyGym(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      viewBox="0 0 480 480"
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={2}
      {...props}
    >
      <path
        d="M269.5 81l43.5 43.5-17.8 17.8C285.5 152 277 160 276.5 160c-.6 0-17.1-16.1-36.7-35.8l-35.7-35.7 6.4-7.4L240 81h29.5zm-43 58l36 36-18.3 18.2-18.2 18.3-36-36c-19.8-19.8-35.9-36.4-35.7-36.9.5-1.5 34.1-35.4 35.2-35.5.6 0 17.2 16.1 37 35.9zm137.2 36.2l36.3 36.3v58L269.5 400h-58L81 269.5V211l3.8-3.4 3.7-3.5 72 71.9 72 71.8 14.8 1.4L348 248.5v-16l-21-21-50.3 50.3C249.1 289.4 226 312 225.5 312c-1.3 0-35.5-34.2-35.5-35.5 0-1 136-137.5 137-137.5.3 0 16.8 16.3 36.7 36.2zM175.5 190l36 36-18.3 18.2-18.2 18.3-36-36c-19.8-19.8-36-36.3-36-36.7 0-.8 35.1-35.8 35.9-35.8.4 0 16.8 16.2 36.6 36z"
        fillRule="nonzero"
      />
    </svg>
  );
}

export default HandyGym;

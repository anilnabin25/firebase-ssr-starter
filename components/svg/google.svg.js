import React from 'react';

export default ({ fill, style }) => {
  style = style || {};

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      style={style}
    >
      <g transform="translate(1, 1)">
        <path
          d="M29.3 31.1c-.6-.8-1.2-1.4-2-2-.7-.6-1.6-1.1-2.1-1.9-1.1-1.8 1.3-3.2 2.3-4.4 2.4-2.6 1.7-7.5-1.3-9.4.7 0 1.8.2 2.5 0 .8-.2 1.7-1 2.4-1.4h-7.7c-2.4 0-4.9.3-6.8 1.9-2.2 1.8-3.3 4.7-2.4 7.5 1 3.2 4.4 4.6 7.5 4.2-.2.7-.5 1.2-.4 1.9.1.9.6 1.7 1.1 2.4-2.8.1-6.2.6-8.5 2.5-2.1 1.8-2.8 5-.9 7.2 2 2.3 5.6 2.7 8.4 2.5 2.5-.2 4.9-1 6.7-2.7 2.3-2.3 3.1-5.8 1.2-8.3-.4-.4.3.4 0 0zm-7-6.5c-5.1 0-7.4-11.3-1.5-11.3 2.9 0 4.2 3.2 4.7 5.7.4 2.4-.1 5.6-3.2 5.6zm5 13.5c-1.7 2.9-6.4 2.6-9 1.5-2.7-1.2-4.1-4.7-1.6-7 1.1-1 2.7-1.4 4.1-1.6.8-.1 1.6-.2 2.4-.1.6.1.9.4 1.4.7 2.1 1.5 4.3 3.8 2.7 6.5-.3.6.3-.6 0 0z"
          transform="scale(.7) translate(-10, -11)"
          fill={fill || 'white'}
        />
        <path
          d="M40 16h-4v-4h-2v4h-4v2h4v4h2v-4h4z"
          transform="scale(.7) translate(-7, -11)"
          fill={fill || 'white'}
        />
      </g>
    </svg>
  );
};

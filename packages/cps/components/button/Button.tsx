import React, { DOMAttributes, ReactElement } from 'react';

interface IButton extends DOMAttributes<HTMLButtonElement> {
  content: string;
}

export default function Button({ content, ...rest }: IButton): ReactElement {
  return (
    <div>
      <button {...rest}>{content}</button>
    </div>
  );
}

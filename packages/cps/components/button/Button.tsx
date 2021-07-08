import React, { DOMAttributes, ReactElement } from 'react';

interface IAlert extends DOMAttributes<HTMLButtonElement> {
  content: string;
}

export default function Alert({ content, ...rest }: IAlert): ReactElement {
  return (
    <div>
      <button {...rest}>{content}</button>
    </div>
  );
}

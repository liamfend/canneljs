import React, { DOMAttributes, ReactElement } from 'react';

interface IButton extends DOMAttributes<HTMLButtonElement> {
  content: string;
}

export default function Button({ content, ...rest }: IButton): ReactElement {
  return (
    <button type="button" className={'storybook-button'} {...rest}>
      {content} 1321321313 1111dsafdsa
    </button>
  );
}

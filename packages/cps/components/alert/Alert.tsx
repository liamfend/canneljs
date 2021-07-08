import React, { ReactElement } from 'react';

interface IAlert {
  title: string;
  content: string;
}

export default function Alert({ title, content }: IAlert): ReactElement {
  return (
    <div>
      <div>title:{title}</div>
      <div>content:{content}</div>
    </div>
  );
}

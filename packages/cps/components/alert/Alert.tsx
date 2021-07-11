import React, { useEffect, ReactElement, useState } from 'react';
import cls from 'classnames';
interface IAlert {
  title: string;
  content: string;
}

function Alert({ title, content }: IAlert): ReactElement {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('-aaa-');
  }, []);
  return (
    <div
      className={cls('a', { test: count % 2 === 0 })}
      onClick={() => {
        setCount(count + 1);
      }}
    >
      <div>title:{title}</div>
      <div>content:{content}</div>
    </div>
  );
}
export default Alert;

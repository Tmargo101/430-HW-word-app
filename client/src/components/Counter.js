import React, { useState } from 'react';

function Counter() {
  // Square brackets on left side of = Called "destructuring"
  // Creates a value called "count" and a setter for the "count" variable
  
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default Counter;

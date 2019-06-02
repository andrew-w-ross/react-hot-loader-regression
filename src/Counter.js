import React, { useState } from "react";
import Button from "@material-ui/core/Button";
const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Count is {count}</h1>
      <h2>Change this text</h2>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setCount(count + 1)}
      >
        +
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => setCount(count - 1)}
      >
        -
      </Button>
    </div>
  );
};

export default Counter;

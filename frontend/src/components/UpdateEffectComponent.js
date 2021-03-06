import { useState } from "react";
import useUpdateEffect from "../hooks/useUpdateEffect";

const UpdateEffectComponent = () => {
  const [count, setCount] = useState(10);
  useUpdateEffect(() => alert(count), [count]);

  return (
    <div>
      <h1>{count}</h1>
      <button type="button" onClick={() => setCount((c) => c + 1)}>
        Increment
      </button>
    </div>
  );
};

export default UpdateEffectComponent;

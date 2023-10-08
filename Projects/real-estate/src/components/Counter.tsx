import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "@/redux/slices/counterSlice";
import { RootState } from "@/redux/store";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: any) => state.counter.value);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;

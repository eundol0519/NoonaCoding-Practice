import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const GrandSonBox = () => {
  const count = useSelector((state: RootState) => state.count);

  return <div>This is GrandSonBox Count {count}</div>;
};

export default GrandSonBox;

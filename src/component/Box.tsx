import { useSelector } from "react-redux";
import GrandSonBox from "./GrandSonBox";
import { RootState } from "../redux/store";

const Box = () => {
  const count = useSelector((state: RootState) => state.count);

  return (
    <div>
      This is Box Count : {count}
      <br />
      <GrandSonBox />
    </div>
  );
};

export default Box;

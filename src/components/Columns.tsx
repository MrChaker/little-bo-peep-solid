import { ParentProps } from "solid-js";

const Columns = (props: ParentProps) => {
  return (
    <div class="colmuns relative text-xl leading-[28px] sm:leading-[32.5px] -translate-x-[1500px] sm:translate-x-0 grid grid-cols-[1500px_100%_1500px] sm:grid gridColsWidth -mt-4">
      {props.children}
    </div>
  );
};

export default Columns;

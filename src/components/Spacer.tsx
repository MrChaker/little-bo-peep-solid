const Spacer = (props: { inner?: boolean; before?: boolean }) => {
  return (
    <div
      class={`col-start-2 spacer ${props.inner && "inner-spacer"} ${
        props.before && "before-spacer"
      }`}></div>
  );
};

export default Spacer;

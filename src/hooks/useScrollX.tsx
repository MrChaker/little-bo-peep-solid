const useScrollX = () => {
  if (typeof window !== "undefined") {
    requestAnimationFrame(() => {
      window.scroll({
        left: 1500,
        behavior: "instant",
      });
    });
  }
};

export default useScrollX;

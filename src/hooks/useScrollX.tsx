const useScrollX = () => {
  if (typeof window !== "undefined") {
    console.log("inside useScrollX", (document.body.scrollWidth - window.innerWidth) / 2);
    requestAnimationFrame(() => {
      window.scroll({
        left: (document.body.scrollWidth - window.innerWidth) / 2,
        behavior: "instant",
      });
    });
  }
};

export default useScrollX;

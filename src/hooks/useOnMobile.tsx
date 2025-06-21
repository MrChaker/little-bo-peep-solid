import { useGlobalContext } from "~/store/StoreProvider";
import { MOBILE_MAX_WIDTH } from "../constants";

const onMobile = () => {
  const { store } = useGlobalContext();
  return store.innerWidth < MOBILE_MAX_WIDTH;
};

export default onMobile;
import { onMount, ParentProps } from "solid-js";
import useCheckedSaveScroll from "~/hooks/useCheckedSaveScroll";
import useScrollX from "~/hooks/useScrollX";
import { ExercisesStoreProvider } from "~/store/ExercisesStoreProvider";
import { useGlobalContext } from "~/store/StoreProvider";
import ActionArrows from "./ActionArrows";

const calculate_article_width = (
  largest_centered_image_width?: number,
  largest_side_image_width?: number,
) => {
  if (!largest_centered_image_width && !largest_side_image_width) return 3000;

  if (!largest_centered_image_width)
    return Number(largest_side_image_width) * 2 + 100;

  if (!largest_side_image_width) return Number(largest_side_image_width) + 100;

  return (
    Math.max(largest_centered_image_width, largest_side_image_width * 2) + 100
  );
};

const AbstractArticle = (
  props: ParentProps & {
    id?: string;
    largest_centered_image_width?: number;
    largest_side_image_width?: number;
  },
) => {
  let { set_store } = useGlobalContext();
  set_store(
    "articleWidth",
    calculate_article_width(
      props.largest_centered_image_width,
      props.largest_side_image_width,
    ),
  );

  return (
    <ExercisesStoreProvider>
      <span id={props.id}></span>
      <ExercisesStoreConsumer>{props.children}</ExercisesStoreConsumer>
      <ActionArrows />
    </ExercisesStoreProvider>
  );
};

const ExercisesStoreConsumer = (props: ParentProps) => {
  let { store, set_store } = useGlobalContext();

  useScrollX();
  useCheckedSaveScroll();

  const resetDimensions = () => {
    set_store("innerWidth", window.innerWidth);
    set_store("innerHeight", window.innerHeight);
    set_store("scrollWidth", document.body.scrollWidth);
    set_store("scrollHeight", document.body.scrollHeight);
    let _dummy =
      store.scrollY +
      store.innerHeight +
      store.scrollHeight +
      store.scrollWidth;
  };

  onMount(() => {
    resetDimensions();
    setTimeout(resetDimensions, 50);
    setTimeout(resetDimensions, 500);
  });

  return <>{props.children}</>;
};

export default AbstractArticle;

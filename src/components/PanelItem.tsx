const PanelItem = (props: {
  href: string;
  label: string;
  on_mobile?: string;
  article_type: any;
}) => {
  return (
    <a
      href={`/article/${props.href}`}
      class="flex items-baseline justify-between leading-9 sm:leading-8 text-2xl"
    >
      <span class="block">{props.article_type}</span>
      <span class="dots"></span>
      <span class="sm:hidden">
        {props.on_mobile == "" ? props.label : props.on_mobile}
      </span>
      <span class="hidden sm:block">{props.label}</span>
    </a>
  );
};

export default PanelItem;
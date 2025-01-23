const TOCItem = (props: {
  href: string;
  label: string;
  on_mobile?: string;
  article_type: any;
}) => {
  return (
    <a
      href={`/article/${props.href}`}
      class="slice flex items-baseline justify-between !leading-9 lg:!leading-10 !text-2xl lg:!text-3xl"
    >
      <span class="block !w-fit">{props.article_type}</span>
      <span class="dots !w-auto"></span>
      <span class="sm:hidden !w-auto">
        {props.on_mobile == "" ? props.label : props.on_mobile}
      </span>
      <span class="hidden sm:block !w-auto">{props.label}</span>
    </a>
  );
};

export default TOCItem;
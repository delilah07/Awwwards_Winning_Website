// const Button = (props) => {
const Button = ({ title, id, leftIcon, containerClass, rightIcon }) => {
  //   return <>{props.title}</>;
  return (
    <button
      id={id}
      className={`flex-center relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClass}`}
    >
      {leftIcon}
      <span className="relative inline-block overflow-hidden font-general text-xs uppercase">
        {title}
      </span>
      {rightIcon}
    </button>
  );
};

export default Button;

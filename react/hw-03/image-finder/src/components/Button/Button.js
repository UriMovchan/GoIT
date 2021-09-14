import LoadMoreBtn from "components/styled/LoadMoreBtn";
// window.scrollTo({
//   top: document.documentElement.scrollHeight,
//   behavior: "smooth",
// });

const Button = (props) => (
  <LoadMoreBtn onClick={props.onClick}>{props.children}</LoadMoreBtn>
);

export default Button;

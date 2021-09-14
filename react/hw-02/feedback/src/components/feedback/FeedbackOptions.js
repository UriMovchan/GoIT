import Content from "components/styled/Content";
import FeedbackBtn from "components/styled/Buttons";

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <Content>
      {options.map((i) => (
        <FeedbackBtn onClick={() => onLeaveFeedback(i)}>{i}</FeedbackBtn>
      ))}
    </Content>
  );
}

export default FeedbackOptions;

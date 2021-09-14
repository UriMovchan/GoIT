import Content from "components/styled/Content";
import Notification from "components/notification/Notification";

const Statistics = (props) => {
  const { good, neutral, bad, total, positivePercentage } = props;
  return (
    <Content>
      {(total > 0 && (
        <ul className="statistics">
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>total: {total}</li>

          {positivePercentage > 0 && (
            <li>
              {"percent"}: {positivePercentage}% good feedback
            </li>
          )}
        </ul>
      )) || <Notification message={"No feedback given"} />}
    </Content>
  );
};

export default Statistics;

import Profile from "./components/profile/Profile";
import user from "./components/profile/user.json";
import Statistics from "./components/statistics/Statistics";
import statisticalData from "./components/statistics/statistical-data.json";
import Friends from "./components/friends/Friends";
import friendsData from "./components/friends/friends.json";
import TransactionHistory from "./components/transactions/Transactions";
import transactionsData from "./components/transactions/transactions.json";

import { Container, FlexBox, Button } from "../styles/styled";

const App = () => {
  return (
    <Container>
      <FlexBox>
        <Profile
          avatar={user.avatar}
          name={user.name}
          tag={user.tag}
          location={user.location}
          stats={user.stats}
        />
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          stats={user.stats}
        />
      </FlexBox>
      <FlexBox style={{ display: "flex" }}>
        <Statistics title="Upload stats" stats={statisticalData} />
        <Statistics stats={statisticalData} />
      </FlexBox>

      <FlexBox style={{ display: "flex" }}>
        <Friends friends={friendsData} />
      </FlexBox>

      <TransactionHistory transactions={transactionsData} />
    </Container>
  );
};

export default App;

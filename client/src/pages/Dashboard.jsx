import { useUser } from "../context/UserContext";

const Dashboard = () => {
  const { user } = useUser();

  return (
    <div>
      <h1>Welcome, {user?.username || "Guest"}!</h1>
      <p>Your seiso amount: {user?.seisoAmount || 0}</p>
      <p>Your seiso coins: {user?.seisoCoins || 0}</p>
    </div>
  );
};

export default Dashboard;

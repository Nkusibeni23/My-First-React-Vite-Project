import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/FakeAuthContext";
import styles from "./User.module.css";

const FAKE_USER = {
  name: "Benny",
  email: "nkusibeni23@gmail.com",
  password: "12345",
  avatar: "https://i.pravatar.cc/100?u=zz",
};

function User() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    return null;
  }

  function handleClick() {
    logout();
    navigate("/", { replace: true });
  }

  return (
    <div className={styles.user}>
      <img src={FAKE_USER.avatar} alt={FAKE_USER.name} />
      <span>Welcome, {FAKE_USER.name}</span>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
}

export default User;

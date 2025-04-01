import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ onLoginSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === "admin" && password === "123") {
      onLoginSuccess();
      navigate("/upload");
    } else {
      alert("Sai thông tin đăng nhập!");
    }
  };

  return (
    <div className="login-form">
      <h2>Đăng nhập để upload</h2>
      <input
        type="text"
        placeholder="Tài khoản"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Mật khẩu"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleLogin}>Đăng nhập</button>
    </div>
  );
}

export default Login;

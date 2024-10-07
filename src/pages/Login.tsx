import { useContext, useState } from "react";
import banner from '../assets/banner.svg';
import Context from "../context/Context";
import { useNavigate } from "react-router-dom";

function Login() {

  const [input, setInput] = useState({
      username: '',
      password: ''
  });

  const { onLogin } = useContext(Context);

  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value
    });
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onLogin(input.username);
    navigate('/todo');
  }

  return (
    <>
      <h1>Welcome</h1>
      <img src={banner} alt="Banner da tela de Login" />
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} id="username" name="username" type="username" placeholder="Enter your username"/>
        <input onChange={handleChange} id="password" name="password" type="password" placeholder="Enter your password"/>
        <p>Forgot password?</p>
        <button>Sign In</button>
      </form>
    </>
  );
}

export default Login;

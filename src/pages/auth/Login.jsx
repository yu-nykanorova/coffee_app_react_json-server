import { useState } from "react";
import { LockIcon } from "../../shared/Icons/LockIcon";
import { UserIcon } from "../../shared/Icons/UserIcon";
import { ButtonMain } from "../../shared/UI/Buttons/ButtonMain";
import { Input } from "../../shared/UI/Input/Input";
import { Link } from "react-router-dom";
import "./Login.scss";

export const Login = () => {
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");

  return (
    <div className="login">
      <div className="login__content">
        <Input
          value={email}
          setValue={setEmail}
          placeholder="Enter your email"
          type="email"
          className="login__input"
          icon={<UserIcon/>}
        />
        <Input
          value={password}
          setValue={setPassword}
          placeholder="Enter your password"
          type="password"
          className="login__input"
          icon={<LockIcon/>}
        />
        <Link to="/">
          <ButtonMain
            className="login__btn"
            type="submit"
            variant="primary"
            label="Login to Continue"
          />
        </Link>
      </div>
    </div>
  )
}


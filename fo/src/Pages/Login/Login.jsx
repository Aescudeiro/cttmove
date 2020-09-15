import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import AuthService from "../../services/auth-service";

const required = (value) => {
  if (!value) {
    return <div>This field is required</div>;
  }
};

const Login = (props) => {
  const form = useRef();
  const checkBtn = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onChange = (e, setter) => {
    setter(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.login(email, password).then(
        () => {
          props.history.push("/");
          window.location.reload();
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setLoading(false);
          setMessage(resMessage);
        }
      );
    } else {
      setLoading(false);
    }
  };

  return (
    <div>
      Login
      <Form onSubmit={handleLogin} ref={form}>
        <div>
          <label htmlFor="email">Email</label>
          <Input
            type="text"
            name="email"
            value={email}
            onChange={(e) => onChange(e, setEmail)}
            validations={[required]}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <Input
            type="password"
            name="password"
            value={password}
            onChange={(e) => onChange(e, setPassword)}
            validations={[required]}
          />

          <div>
            <button disabled={loading}>
              {loading && <span></span>}
              <span>Login</span>
            </button>
          </div>

          {message && <div>{message}</div>}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </div>
      </Form>
    </div>
  );
};

export default Login;

import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";

const Login = () => {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a60c69b4-dbdc-49e3-b152-43bbdbfb0160/d6dy6qy-19e320f2-932f-4549-8050-2b7fb9289eda.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl0sIm9iaiI6W1t7InBhdGgiOiIvZi9hNjBjNjliNC1kYmRjLTQ5ZTMtYjE1Mi00M2JiZGJmYjAxNjAvZDZkeTZxeS0xOWUzMjBmMi05MzJmLTQ1NDktODA1MC0yYjdmYjkyODllZGEucG5nIn1dXX0.15sSrDOV-R3wQ7vCq_aieEml_EWNacZlGWuwVaB3oVY"
          alt=""
        />
        <h1>Imessage</h1>
      </div>
      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
};

export default Login;

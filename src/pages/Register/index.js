import { Container, FormLogin, Header, Body, Button } from "./styles";
import { Link, useHistory } from "react-router-dom";
import { api } from "../../services/api";
import { useState } from "react";
import Input from "../../components/Input";

function Register() {
  const history = useHistory();

  const [student, setRegister] = useState({
    ra: "",
    name: "",
    email: "",
    password: "",
    validPassword: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validPassword()) return alert("As senha precisam ser iguais!");

    try {
      const { ra, name, email, password } = student;

      const response = await api.post("/students", {
        ra,
        name,
        email,
        password,
      });

      console.log(response);

      history.push("/home");
    } catch (error) {
      console.error(error);
      alert(error.response.data.error);
    }
  };

  const handleInput = (e) => {
    setRegister({ ...student, [e.target.id]: e.target.value });
  };

  const validPassword = () => student.password === student.validPassword;

  const buttonDisable = () => {
    const { ra, name, email, password } = student;

    if (!ra || !name || !email || !password || !validPassword()) return true;

    return false;
  };

  return (
    <Container>
      <FormLogin onSubmit={handleSubmit}>
        <Header>
          <h1>BEM VINDO AO SENAI OVERFLOW</h1>
          <h2>INFORME OS SEUS DADOS</h2>
        </Header>
        <Body>
          <Input
            id="ra"
            label="RA"
            type="text"
            value={student.ra}
            handler={handleInput}
          />
          <Input
            id="name"
            label="Nome"
            type="text"
            value={student.name}
            handler={handleInput}
          />
          <Input
            id="email"
            label="E-mail"
            type="email"
            value={student.email}
            handler={handleInput}
          />
          <Input
            id="password"
            label="Senha"
            type="password"
            value={student.password}
            handler={handleInput}
          />
          <Input
            id="validPassword"
            label="Confirmar Senha"
            type="password"
            onBlur={(e) => {
              if (validPassword()) alert("As senhas precisam ser iguais");
              //e.target.focus();
            }}
            value={student.validPassword}
            handler={handleInput}
          />

          <Button disable={buttonDisable()}>Cadastrar</Button>
          <Link to="/">Ou se já tem cadastro, clique aqui para entrar</Link>
        </Body>
      </FormLogin>
    </Container>
  );
}

export default Register;

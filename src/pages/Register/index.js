import { Container, FormLogin, Header, Body } from "./styles";
import Input from "../../components/input";
import { Link } from "react-router-dom";

function Register() {


  return (
    <Container>
      <FormLogin >
        <Header>
          <h1>BEM VINDO AO SENAI OVERFLOW</h1>
          <h2>INFORME SEUS DADOS</h2>
        </Header>
        <Body>
          <Input id="ra" label="RA" type="text" />
          <Input id="name" label="NOME" type="text" />
          <Input id="email" label="EMAIL" type="email" />
          <Input id="password" label="SENHA" type="password" />
          <Input id="valid-password" label="CONFIRMAR SENHA" type="password" />
          <Link to="/">Ou, se ja tem cadatro, clique aqui</Link>
          <button>Enviar</button>
        </Body>
      </FormLogin>
    </Container>
  );
}

export default Register;

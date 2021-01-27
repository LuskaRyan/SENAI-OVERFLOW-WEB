import { Container } from "./styles";

function Login() {
  return(
      <Container >
          <FormLogin>
              <h1>Bem vindo ao senai overflow</h1>
              <label>Email</label>
              <input type="email"/>
              <label>Senha</label>
              <input type="password"/>
              <button>Entrar</button>

          </FormLogin>
      </Container>
  )
}

export default Login;

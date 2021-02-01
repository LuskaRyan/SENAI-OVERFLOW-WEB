import {
  Container,
  Header,
  Content,
  ProfileContainer,
  FeedContainer,
  ActionsContainer,
  QuestionCard,
  Logo,
  IconSignOut
} from "./styles";
import imgProfile from "../../assets/foto_perfil.png";
import logo from "../../assets/logo.png";
function Profile() {
  return (
    <>
      <section>
        <img src={imgProfile} />
        <a href="#" />
      </section>
      <section>
        <strong>NOME:</strong>
        <p>FULANO DE TAL</p>
      </section>
      <section>
        <strong>RA:</strong>
        <p>1903213</p>
      </section>
      <section>
        <strong>E-MAIL</strong>
        <p>fulanodetal@outlook.com</p>
      </section>
    </>
  );
}
function Home() {
  return (
    <Container>
      <Header>
        <Logo src={logo} />
        <IconSignOut/>
      </Header>
      <Content>
        <ProfileContainer>
          <Profile />
        </ProfileContainer>
        <FeedContainer>
          <QuestionCard>
            <header>
              <img src={imgProfile}></img>
              <strong>Por: ciclano da silva</strong>
              <p>Em: 12/12/2012 as 12:12</p>
            </header>
            <section>
              <strong>Titulo</strong>
              <p>DESCRICAO</p>
              <img src="https://i.pinimg.com/originals/3f/c7/90/3fc7906b440c5e0de805647c302a7a01.jpg" />
            </section>
            <footer>
              <h1>11 respostas</h1>
              <section>
                <header>
                  <img src={imgProfile} />
                  <strong>Por Fulano</strong>
                  <p>12/12/2012 as 12:12</p>
                </header>
                <p>resposta para a pergunta</p>
              </section>
              <form>
                <textarea
                  placeholder="Responda essa duvida!"
                  required
                ></textarea>
                <button>Enviar</button>
              </form>
            </footer>
          </QuestionCard>
          <QuestionCard>
            <header>
              <img src={imgProfile}></img>
              <strong>Por: ciclano da silva</strong>
              <p>Em: 12/12/2012 as 12:12</p>
            </header>
            <section>
              <strong>Titulo</strong>
              <p>DESCRICAO</p>
              <img src="https://i.pinimg.com/originals/3f/c7/90/3fc7906b440c5e0de805647c302a7a01.jpg" />
            </section>
            <footer>
              <h1>11 respostas</h1>
              <section>
                <header>
                  <img src={imgProfile} />
                  <strong>Por Fulano</strong>
                  <p>12/12/2012 as 12:12</p>
                </header>
                <p>resposta para a pergunta</p>
              </section>
              <form>
                <textarea
                  placeholder="Responda essa duvida!"
                  required
                ></textarea>
                <button>Enviar</button>
              </form>
            </footer>
          </QuestionCard>
        </FeedContainer>
        <ActionsContainer>
          <button>FAZER UMA PERGUNTA</button>
        </ActionsContainer>
      </Content>
    </Container>
  );
}

export default Home;

import imgProfile from "../../assets/foto_perfil.png";
import logo from "../../assets/logo.png";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useHistory } from "react-router-dom";
import { signOut } from "../../services/security";
import {
  Container,
  Header,
  Content,
  ProfileContainer,
  FeedContainer,
  ActionContainer,
  QuestionCard,
  Logo,
  IconSignOut,
} from "./styles";

function Profile() {
  return (
    <>
      <section>
        <img src={imgProfile} alt="Imagem de perfil" />
        <a href="#">Editar Foto</a>
      </section>
      <section>
        <strong>NOME:</strong>
        <p>Fulano de Tal</p>
      </section>
      <section>
        <strong>RA:</strong>
        <p>123456</p>
      </section>
      <section>
        <strong>E-MAIL:</strong>
        <p>fulano@gmail.com</p>
      </section>
    </>
  );
}

function Answer({ answer }) {
  return (
    <section>
      <header>
        <img src={imgProfile} alt="Imagem de perfil" />
        <strong>Por {answer.Student.name}</strong>
        <p>Em {answer.created_at}</p>
      </header>
      <p>{answer.description}</p>
    </section>
  );
}

function Question({ question }) {
  const [showAnswer, setShowAnswer] = useState("");

  const qtdAnswer = question.Answers.length;

  return (
    <QuestionCard>
      <header>
        <img src={imgProfile} alt="Imagem de perfil" />
        <strong>Por {question.Student.name}</strong>
        <p>Em {question.created_at}</p>
      </header>
      <section>
        <strong>{question.title}</strong>
        <p>{question.description}</p>
        <img src={question.image} alt="Crhris" />
      </section>
      <footer>
        <h1>
          {qtdAnswer === 0 ? (
            "Seja o primeiro a responder"
          ) : (
            <>
              {qtdAnswer}
              {qtdAnswer > 1 ? " Respostas" : " Resposta"}
            </>
          )}
        </h1>
        {question.Answers.map((answer) => (
          <Answer answer={answer} />
        ))}
        <form>
          <textarea
            placeholder="Responda essa duvida!"
            onChange={(e) => setShowAnswer(!showAnswer)}
            required
          ></textarea>
          <button>Enviar</button>
        </form>
      </footer>
    </QuestionCard>
  );
}

function Home() {
  const history = useHistory();

  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const loadQuestions = async () => {
      const response = await api.get("/feed");

      setQuestions(response.data);
    };

    loadQuestions();
  }, []);

  const handleSignOut = () => {
    signOut();

    history.replace("/");
  };

  const [answer, setAnswer] = useState({
    description: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { description } = answer;

      const response = await api.post("/questions/:id/answers", {
        description,
      });

      setAnswer(response.data);

      console.log(response);

      history.push("/home");
    } catch (error) {
      console.error(error);
      alert(error.response.data.error);
    }
  };

  return (
    <Container>
      <Header>
        <Logo src={logo} />
        <IconSignOut onClick={handleSignOut} />
      </Header>
      <Content>
        <ProfileContainer>
          <Profile />
        </ProfileContainer>
        <FeedContainer>
          {questions.map((q) => (
            <Question question={q} />
          ))}
        </FeedContainer>
        <ActionContainer>
          <button onSubmit={handleSubmit}>Fazer uma pergunta</button>
        </ActionContainer>
      </Content>
    </Container>
  );
}

export default Home;

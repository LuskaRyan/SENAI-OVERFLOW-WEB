import styled from "styled-components";
import { FaSignOutAlt } from "react-icons/fa";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: var(--dark);
`;

export const Header = styled.header`
  position: fixed;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--primary);
  border-bottom: 1px solid var(--darkGray);
  box-shadow: 0px 1px 5px var(--light);
`;

export const Content = styled.div`
  width: 1280px;
  padding-top: 60px;
  display: grid;
  grid-template-columns: 20% 60% 20%;
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 10px;

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
  }
  img {
    width: 35%;
    border-radius: 50%;
  }
`;

export const ActionContainer = styled.div`
  margin-top: 20px;
  text-align: center;
`;

export const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  overflow-y: auto;
  padding: 10px 0px;
  grid: 10px;
  gap: 10px;
`;

export const QuestionCard = styled.div`
  width: 80%;
  padding: 10px;
  border-radius: 4px;
  background-color: var(--darkGray);

  > header {
    display: flex;
    align-items: center;
    gap: 10px;

    > img {
      width: 30px;
      height: 30px;
      border-radius: 15px;
    }
  }
  section {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    > strong {
      font-size: 18px;
    }
    > p {
      font-size: 15px;
      padding: 10px 5px;
      border-left: 2px solid var(--primary);
    }
    img {
      max-width: 100%;
      align-self: center;
    }
  }

  > footer {
    margin-top: 10px;

    > h1 {
      font-weight: bold;
      font-size: 18px;
      cursor: pointer;
      transition: 0.2s;

      :hover {
        color: var(--primary);
      }
    }

    > section {
      margin-top: 10px;
      border-radius: 4px;
      padding: 5px;
      background-color: var(--dark);

      > header {
        display: flex;
        align-items: center;
        gap: 10px;

        > img {
          width: 30px;
          height: 30px;
          border-radius: 15px;
        }
      }

      > p {
        margin-top: 5px;
        width: 100%;
        padding: 10px 5px;
        border-left: 2px solid var(--primary);
      }
    }

    > form {
      width: 100%;
      margin-top: 10px;
      display: flex;
      gap: 5px;

      > textarea {
        flex: 1;
      }
    }
  }
`;

export const Logo = styled.img`
  width: 50px;
  height: 50px;
  margin: 20px;
  border-radius: 50%;
  border: 2px solid var(--dark);
  box-shadow: 0px 0px 5px var(--dark);
  transition: 0.2s;
  cursor: pointer;

  :hover {
    transform: scale(1.1);
    box-shadow: 0px 0px 15px var(--dark);
  }
`;

export const IconSignOut = styled(FaSignOutAlt)`
  font-size: 30px;
  margin-right: 10px;
  cursor: pointer;

  :hover {
    color: var(--dark);
  }
`;

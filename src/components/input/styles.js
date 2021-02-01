import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  position: relative;
  margin-top: 15px;

  > input {
    border: 0;
    padding-left: 10px;
    border-radius: 3px;
    font-family: sans-serif;
  }

  > label {
    position: absolute;
    left: 10px;
    top: 0;
    display: flex;
    align-items: center;
    color: var(--darkGray);
    cursor: text;

    transition: 0.8 ease-in-out;
    pointer-events: none;
  }

  > input,
  > label {
    width: 100%;
    height: 30px;
    font-size: 16px;
  }
  > input:focus {
    border-bottom: 2px solid var(--primary);
  }
  > input:not(:placeholder-shown) + label,
  > input:focus + label {
    font-size: 14px;
    color: var(--light);
    top: -25px;
    left: 0;
  }
`;

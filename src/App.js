import styled, { css } from "styled-components";

function App() {
  const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid white;
    color: white;
    margin: 0 1em;
    padding: 0.25em 1em;

    /* ${(props) =>
      props.primary &&
      css`
        background: palevioletred;
        color: white;
      `}; */
  `;
  const Container = styled.div`
    text-align: center;
    background-color: #c4b3dd;
    height: 100vh;
  `;
  return (
    <Container>
      <Button>Todos os Produtos</Button>
      {/* <Button primary>Primary Button</Button> */}
    </Container>
  );
}

export default App;

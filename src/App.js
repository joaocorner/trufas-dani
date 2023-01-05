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
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      object-fit: cover;
      height: 100vh;
      width: 50vw;
    }

    div {
      margin: 0 auto;
    }

    h1 {
      text-transform: uppercase;
      font-size: 3rem;
      color: black;
      font-weight: 900;
      letter-spacing: 0.2rem;
      padding-bottom: 1rem;
    }

    p {
      font-size: 1.5rem;
      color: black;
      font-weight: 100;
      letter-spacing: 0.2rem;
      padding-bottom: 1rem;
    }
  `;
  return (
    <Container>
      <div>
        <h1>
          Ribeiro <br /> Delícias
        </h1>
        <p>
          Criação de doces, tortas, trufas e docinhos para festas e eventos.
        </p>
        <Button>Todos os Produtos</Button>
      </div>
      {/* <Button primary>Primary Button</Button> */}
      <img src="../img/IMG_20221231_233735.jpg" alt="" />
    </Container>
  );
}

export default App;

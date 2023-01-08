import styled, { css } from "styled-components";

function App() {
  const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid white;
    color: white;
    margin: 0 1em;
    padding: 0.25em 1em;
  `;
  const Container = styled.div`
    height: 100vh;
    display: flex;

    ${(props) =>
      props.primary &&
      css`
        background: #c4b3dd;
        text-align: center;
        justify-content: space-between;
        align-items: center;
      `};
    ${(props) =>
      props.secondary &&
      css`
        background: #ebd4d9;
      `};
    ${(props) =>
      props.tertiary &&
      css`
        background: #f1ede8;
      `};

    img {
      object-fit: cover;
      height: 100vh;
      width: 50vw;
    }

    div {
      margin: 0 auto;
    }

    h1 {
      /* text-transform: uppercase; */
      font-size: 3rem;
      color: black;
      font-weight: 900;
      letter-spacing: 0.2rem;
      padding-bottom: 3rem;
    }

    p {
      font-size: 1.5rem;
      color: black;
      font-weight: 100;
      letter-spacing: 0.2rem;
      padding-bottom: 3rem;
      width: 500px;
    }
  `;
  const Container2 = styled.div`
    height: 100vh;
    display: flex;
    background: #ebd4d9;
    text-align: center;
    justify-content: space-between;

    img {
      object-fit: cover;
      height: 300px;
      width: 300px;
    }

    div {
      margin: 0 auto;
    }

    h1 {
      font-size: 3rem;
      color: black;
      font-weight: 900;
      letter-spacing: 0.2rem;
      padding-top: 3rem;
      padding-bottom: 7rem;
    }

    h2 {
      font-size: 2rem;
      color: black;
      font-weight: 900;
      letter-spacing: 0.2rem;
      padding: 1rem 0;
    }

    p {
      font-size: 1.5rem;
      color: black;
      font-weight: 100;
      letter-spacing: 0.2rem;
      padding-bottom: 1rem;
    }

    .SecPage {
      display: flex;
      justify-content: space-between;
      width: 100vw;
    }

    .column {
      display: flex;
      flex-direction: column;
      width: 300px;
    }

    .pic {
      border-radius: 50%;
      border: 4px double black;
    }
  `;
  return (
    <>
      <Container primary>
        <div>
          <h1>
            Ribeiro <br /> Delícias
          </h1>
          <p>
            Criação de doces, tortas, trufas e docinhos para festas e eventos.
          </p>
          <Button>Todos os Produtos</Button>
        </div>
        <img src="../img/IMG_20221231_233735.jpg" alt="" />
      </Container>
      <Container2>
        <div>
          <h1>Experimente!</h1>
          <div className="SecPage">
            <div className="column">
              <img
                src="../img/pic-1.jpeg"
                alt="trufa de chocolate"
                className="pic"
              />
              <h2>Trufas</h2>
              <p>Diversos sabores, como chocolate, morango, maracujá & nozes</p>
            </div>
            <div className="column">
              <img
                src="../img/pic-2.png"
                alt="palha italiana"
                className="pic"
              />
              <h2>Palhas Italianas</h2>
              <p>
                Cobertas com açúcar de confeiteiro ou chocolate, e recheadas
                biscoito
              </p>
            </div>
            <div className="column">
              <img src="../img/pic-3.png" alt="bolo de fubá" className="pic" />
              <h2>Bolos</h2>
              <p>Fubá, Chocolate, Morango, Coco, Abacaxi, entre outros</p>
            </div>
          </div>
        </div>
      </Container2>
      <Container tertiary></Container>
    </>
  );
}

export default App;

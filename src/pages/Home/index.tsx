import React, { useCallback, useEffect, useState } from "react";
import { CryptoCards } from "../../components/CryptoCards";
import { DataTypes } from "../../types/data.types";
import { api } from "../../services/api";
import { Container } from "./styles";
import { Loading } from "../../components/Loading";
import { Link } from "react-router-dom";
import { makeSlug } from "../../utils/makeSlug";

export default function Home() {
  const [data, setData] = useState<DataTypes.TickerProps[]>([]);
  const [cardsPerPage, setCardsPerPage] = useState<number>(10);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isNewFetching, setIsNewFetching] = useState<boolean>(false);

  const getCryptoCards = useCallback(async () => {
    try {
      const json = await api.get(
        `https://api.nomics.com/v1/currencies/ticker?key=${
          import.meta.env.VITE_NOMICS_API_KEY
        }&interval=1d&convert=BRL&status=active&per-page=${cardsPerPage}`
      );

      const data = await json.data;
      setData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      setIsNewFetching(false);
    }
  }, [data]);

  function getMoreCards() {
    setIsNewFetching(true);
    setCardsPerPage((prevState) => prevState + 10);
  }

  useEffect(() => {
    getCryptoCards();
  }, [cardsPerPage]);

  return (
    <Container>
      <div className="title">
        <h2>Criptomoedas</h2>
      </div>

      {isLoading && (
        <div className="loading">
          <p>Carregando dados...</p>
          <Loading width={240} height={240} />
        </div>
      )}
      {!isLoading && (
        <>
          <div className="cards">
            {data.map((cryptoCard) => (
              <Link to={`/home/${cryptoCard.id}`} key={cryptoCard.id}>
                <CryptoCards data={cryptoCard} />
              </Link>
            ))}
          </div>

          <div className="load-more">
            {!isNewFetching ? (
              <button onClick={() => getMoreCards()}>
                Carregar mais 10 criptomoedas
              </button>
            ) : (
              <button disabled>Carregando...</button>
            )}
          </div>
        </>
      )}
    </Container>
  );
}

import React, { useCallback, useEffect, useMemo, useState } from "react";
import { CryptoCards } from "../../components/CryptoCards";
import { DataTypes } from "../../types/data.types";
import { api } from "../../services/api";
import { Container } from "./styles";
import { Loading } from "../../components/Loading";
import { Link } from "react-router-dom";

export default function Home() {
  const [data, setData] = useState<DataTypes.TickerProps[]>([]);
  const [allData, setAllData] = useState<DataTypes.TickerProps[]>([]);
  const [cardsPerPage, setCardsPerPage] = useState<number>(10);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isNewFetching, setIsNewFetching] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState<string>("");

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

  const getAllCryptoCards = useCallback(async () => {
    try {
      const json = await api.get(
        `https://api.nomics.com/v1/currencies/ticker?key=${
          import.meta.env.VITE_NOMICS_API_KEY
        }&interval=1d&convert=BRL&status=active`
      );
      const allData = await json.data;
      setAllData(allData);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [allData]);

  const filteredCards = useMemo(
    () =>
      allData.filter((card) => card.name.toLowerCase().startsWith(searchInput)),
    [allData, searchInput]
  );

  function getMoreCards() {
    setIsNewFetching(true);
    setCardsPerPage((prevState) => prevState + 10);
  }

  useEffect(() => {
    getCryptoCards();
  }, [cardsPerPage]);

  useEffect(() => {
    getAllCryptoCards();
  }, []);

  return (
    <Container>
      <div className="title">
        <h2>Criptomoedas</h2>

        <input
          type="text"
          placeholder="Procure uma criptomoeda..."
          onChange={(event) => setSearchInput(event.target.value)}
        />
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
            {searchInput
              ? filteredCards.map((cryptoCard) => (
                  <Link to={`/home/${cryptoCard.id}`} key={cryptoCard.id}>
                    <CryptoCards data={cryptoCard} />
                  </Link>
                ))
              : data.map((cryptoCard) => (
                  <Link to={`/home/${cryptoCard.id}`} key={cryptoCard.id}>
                    <CryptoCards data={cryptoCard} />
                  </Link>
                ))}

            {filteredCards.length === 0 && (
              <div className="no-results">
                <p>
                  Nenhuma criptomoeda encontrada com nome começando com{" "}
                  {searchInput}
                </p>
              </div>
            )}
          </div>

          <div className="load-more">
            {!isNewFetching ? (
              !searchInput && (
                <button onClick={() => getMoreCards()}>
                  Carregar mais 10 criptomoedas
                </button>
              )
            ) : (
              <button disabled>Carregando...</button>
            )}
          </div>
        </>
      )}
    </Container>
  );
}

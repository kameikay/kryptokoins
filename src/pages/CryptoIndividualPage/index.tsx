import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loading } from "../../components/Loading";
import { api } from "../../services/api";
import { DataTypes } from "../../types/data.types";
import { formatCurrency } from "../../utils/formatCurrency";
import { formatPercentage } from "../../utils/formatPercentage";
import { Container } from "./styles";

export function CryptoIndividualPage() {
  const [data, setData] = useState<DataTypes.TickerProps>(Object);
  const [specficData, setSpecificData] = useState<
    | DataTypes.OneHour
    | DataTypes.OneDay
    | DataTypes.SevenDays
    | DataTypes.OneMonth
    | DataTypes.OneYear
  >(Object);
  const [timeSelected, setTimeSelected] = useState<string>("1d");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isLoadingEspecificData, setIsLoadingEspecificData] =
    useState<boolean>(true);
  const { id } = useParams();

  function handleSelectTime(event: React.ChangeEvent<HTMLInputElement>) {
    setTimeSelected(event.target.value);
    setIsLoadingEspecificData(true);
  }

  const getData = useCallback(async () => {
    const json = await api.get(
      `/currencies/ticker?key=${
        import.meta.env.VITE_NOMICS_API_KEY
      }&ids=${id}&convert=BRL&interval=${timeSelected}`
    );
    const returnData = await json.data[0];

    setData(returnData);
  }, [timeSelected]);

  const getDataFromTime = useCallback(async () => {
    const json = await api.get(
      `/currencies/ticker?key=${
        import.meta.env.VITE_NOMICS_API_KEY
      }&ids=${id}&convert=BRL&interval=${timeSelected}`
    );
    const returnData = await json.data[0][timeSelected];

    setSpecificData(returnData);
  }, [timeSelected]);

  useEffect(() => {
    setIsLoading(true);
    try {
      getData();
    } catch {
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    setIsLoadingEspecificData(true);
    try {
      getDataFromTime();
    } catch {
    } finally {
      setIsLoadingEspecificData(false);
    }
  }, [timeSelected]);

  return isLoading ? (
    <Loading />
  ) : (
    <Container timeSelected={timeSelected}>
      {!isLoading && (
        <>
          <div className="title">
            <div className="name">
              <h1>{data.name}</h1>
              <small>Rank {data.rank}</small>
            </div>
            <img src={data.logo_url} alt={`Logo ${data?.name}`} />
          </div>

          <div className="main-data">
            <p>
              Preço atual: <strong>{formatCurrency(Number(data.price))}</strong>
            </p>
            <p>
              Dominância de capitalização de mercado:{" "}
              <strong>{formatPercentage(data.market_cap_dominance)}</strong>
            </p>
            <p>
              Maior valor atingido:{" "}
              <strong>{formatCurrency(Number(data.high))}</strong>
            </p>
            <p>
              Data do maior valor atingido:{" "}
              <strong>
                {new Date(data.high_timestamp).toLocaleDateString()}
              </strong>
            </p>
          </div>

          <div className="time">
            {isLoadingEspecificData && <Loading width={160} height={160} />}
            {!isLoadingEspecificData && (
              <>
                <div className="time-select">
                  <div className="select-button">
                    <input
                      type="radio"
                      name="1h"
                      id="1h"
                      value="1h"
                      onChange={(event) => handleSelectTime(event)}
                      checked={timeSelected === "1h"}
                    />
                    <label
                      htmlFor="1h"
                      className={timeSelected === "1h" ? "selected" : ""}
                    >
                      Última hora
                    </label>
                  </div>

                  <div className="select-button">
                    <input
                      type="radio"
                      name="1d"
                      id="1d"
                      value="1d"
                      onChange={(event) => handleSelectTime(event)}
                      checked={timeSelected === "1d"}
                    />
                    <label
                      htmlFor="1d"
                      className={timeSelected === "1d" ? "selected" : ""}
                    >
                      Último dia
                    </label>
                  </div>

                  <div className="select-button">
                    <input
                      type="radio"
                      name="7d"
                      id="7d"
                      value="7d"
                      onChange={(event) => handleSelectTime(event)}
                      checked={timeSelected === "7d"}
                    />
                    <label
                      htmlFor="7d"
                      className={timeSelected === "7d" ? "selected" : ""}
                    >
                      Últimos 7 dias
                    </label>
                  </div>

                  <div className="select-button">
                    <input
                      type="radio"
                      name="30d"
                      id="30d"
                      value="30d"
                      onChange={(event) => handleSelectTime(event)}
                      checked={timeSelected === "30d"}
                    />
                    <label
                      htmlFor="30d"
                      className={timeSelected === "30d" ? "selected" : ""}
                    >
                      Últimos 30 dias
                    </label>
                  </div>

                  <div className="select-button">
                    <input
                      type="radio"
                      name="365d"
                      id="365d"
                      value="365d"
                      onChange={(event) => handleSelectTime(event)}
                      checked={timeSelected === "365d"}
                    />
                    <label
                      htmlFor="365d"
                      className={timeSelected === "365d" ? "selected" : ""}
                    >
                      Últimos 365 dias
                    </label>
                  </div>

                  <div className="select-button">
                    <input
                      type="radio"
                      name="ytd"
                      id="ytd"
                      value="ytd"
                      onChange={(event) => handleSelectTime(event)}
                      checked={timeSelected === "ytd"}
                    />
                    <label
                      htmlFor="ytd"
                      className={timeSelected === "ytd" ? "selected" : ""}
                    >
                      Este ano
                    </label>
                  </div>
                </div>

                <div className="time-data">
                  <p>
                    Variação:{" "}
                    <span
                      className={`${
                        Number(specficData?.price_change_pct) > 0
                          ? "positive"
                          : "negative"
                      }`}
                    >
                      {formatPercentage(String(specficData?.price_change_pct))}
                    </span>
                  </p>

                  <p>
                    Variação de valor:{" "}
                    <span
                      className={`${
                        Number(specficData?.price_change) > 0
                          ? "positive"
                          : "negative"
                      }`}
                    >
                      {formatCurrency(Number(specficData?.price_change))}
                    </span>
                  </p>

                  <p>
                    Volume de transações:{" "}
                    <span>
                      {formatCurrency(Number(specficData?.volume_change))}
                    </span>
                  </p>
                </div>
              </>
            )}
          </div>
        </>
      )}
    </Container>
  );
}

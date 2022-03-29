import React, { useEffect, useState } from "react";
import { MdCompareArrows } from "react-icons/md";
import { formatCurrency } from "../../utils/formatCurrency";
import { numberMask } from "../../utils/numberMask";
import { Container } from "./styles";

interface ICalculator {
  logo_url: string;
  id: string;
  name: string;
  price: number;
}

export default function Calculator({ logo_url, id, name, price }: ICalculator) {
  const [inputValue, setInputValue] = useState<number>(0);
  const [result, setResult] = useState<string>("0");
  const [isConvertingToCrypto, setIsConvertingToCryto] = useState(false);

  function convertToCrypto(value: number) {
    const convertedResult = formatCurrency(value / price);
    setResult(convertedResult);
  }

  function convertToReal(value: number) {
    const convertedResult = formatCurrency(value * price);
    setResult(convertedResult);
  }

  function handleInputValueChage(event: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(Number(event.target.value.replaceAll(",", ".")));

    if (isConvertingToCrypto) {
      convertToCrypto(Number(event.target.value));
    } else {
      convertToReal(Number(event.target.value));
    }
  }

  useEffect(() => {
    if (isConvertingToCrypto) {
      convertToCrypto(inputValue);
    } else {
      convertToReal(inputValue);
    }
  }, [isConvertingToCrypto]);

  return (
    <Container>
      <div className="calculator-card">
        <div className="calculator-card-title">
          <label htmlFor="calc-value">Valor</label>
          <input
            type="number"
            name="calc-value"
            value={inputValue}
            onChange={(event) => handleInputValueChage(event)}
            maxLength={14}
          />
        </div>

        {isConvertingToCrypto ? (
          <div className="calculator-convert">
            <div className="to">
              <span>Para: </span>
              <div className="to-card">
                <small>R$</small>
                <h3>Reais brasileiros</h3>
              </div>
            </div>

            <div className="btn-change">
              <button
                onClick={() => setIsConvertingToCryto(!isConvertingToCrypto)}
              >
                <MdCompareArrows size={24} />
              </button>
            </div>

            <div className="from">
              <span>De: </span>
              <div className="from-card">
                <img src={logo_url} alt="Logo" />
                <div className="from-card-title">
                  <small>{id}</small>
                  <h3>{name}</h3>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="calculator-convert">
            <div className="from">
              <span>De: </span>
              <div className="from-card">
                <img src={logo_url} alt="Logo" />
                <div className="from-card-title">
                  <small>{id}</small>
                  <h3>{name}</h3>
                </div>
              </div>
            </div>

            <div className="btn-change">
              <button
                onClick={() => setIsConvertingToCryto(!isConvertingToCrypto)}
              >
                <MdCompareArrows size={24} />
              </button>
            </div>

            <div className="to">
              <span>Para: </span>
              <div className="to-card">
                <small>R$</small>
                <h3>Reais brasileiros</h3>
              </div>
            </div>
          </div>
        )}

        {isConvertingToCrypto ? (
          <div className="result">
            <strong>{String(inputValue).replace(".", ",")} </strong>
            Reais brasileiros (R$) = <strong>{result}</strong> {name} ({id})
          </div>
        ) : (
          <div className="result">
            <strong>{String(inputValue).replace(".", ",")} </strong>
            {name} ({id}) = <strong>{result}</strong> Reais brasileiros (R$)
          </div>
        )}
      </div>
    </Container>
  );
}

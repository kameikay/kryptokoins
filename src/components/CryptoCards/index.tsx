import React, { useEffect, useState } from "react";
import { api } from "../../services/api";
import { DataTypes } from "../../types/data.types";
import { formatCurrency } from "../../utils/formatCurrency";
import { formatPercentage } from "../../utils/formatPercentage";
import { Container } from "./styles";

interface ICryptoCards {
  data: DataTypes.TickerProps;
}

export function CryptoCards({ data }: ICryptoCards) {
  return (
    <Container>
      <header>
        <img src={data.logo_url} alt={`Logo ${data?.name}`} />
        <h3>{data.name}</h3>
        <small>{data.currency}</small>
      </header>

      <div className="values">
        <p>
          <span
            className={
              Number(data["1d"].price_change_pct) > 0
                ? "positive-number"
                : "negative-number"
            }
          >
            {data && formatPercentage(data["1d"].price_change_pct)}
          </span>{" "}
          nas últimas 24 horas
        </p>
        <p>
          Cotação:{" "}
          <span className="price">{formatCurrency(Number(data?.price))}</span>
        </p>
      </div>
    </Container>
  );
}

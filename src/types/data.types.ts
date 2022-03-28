export declare module DataTypes {
  export interface OneHour {
    volume: string;
    price_change: string;
    price_change_pct: string | undefined;
    volume_change: string;
    volume_change_pct: string;
    market_cap_change: string;
    market_cap_change_pct: string;
  }

  export interface OneDay {
    volume: string;
    price_change: string;
    price_change_pct: string;
    volume_change: string;
    volume_change_pct: string;
    market_cap_change: string;
    market_cap_change_pct: string;
  }

  export interface SevenDays {
    volume: string;
    price_change: string;
    price_change_pct: string;
    volume_change: string;
    volume_change_pct: string;
    market_cap_change: string;
    market_cap_change_pct: string;
  }

  export interface OneMonth {
    volume: string;
    price_change: string;
    price_change_pct: string;
    volume_change: string;
    volume_change_pct: string;
    market_cap_change: string;
    market_cap_change_pct: string;
  }

  export interface OneYear {
    volume: string;
    price_change: string;
    price_change_pct: string;
    volume_change: string;
    volume_change_pct: string;
    market_cap_change: string;
    market_cap_change_pct: string;
  }

  export interface TickerProps {
    id: string;
    currency: string;
    symbol: string;
    name: string;
    logo_url: string;
    status: string;
    platform_currency: string;
    price: string | undefined;
    price_date: Date;
    price_timestamp: Date;
    circulating_supply: string;
    market_cap: string;
    market_cap_dominance: string;
    num_exchanges: string;
    num_pairs: string;
    num_pairs_unmapped: string;
    first_candle: Date;
    first_trade: Date;
    first_order_book: Date;
    rank: string;
    high: string;
    high_timestamp: Date;
    "1h": OneHour;
    "1d": OneDay;
    "7d": SevenDays;
    "30d": OneMonth;
    "365d": OneYear;
  }
}

import pandas as pd
from oandapyV20 import API
import oandapyV20.endpoints.instruments as instruments

access_token = "c87cfc903924f8c576f3a87709be150f-d6faeb98896a18eef84ce8d37c06d1fc"

api = API(access_token=access_token, environment="practice")

params = {
    "granularity": "D",  # 取得する足
    "count": 50,         # 取得する足数
    "price": "B",        # Bid
}

instrument = "USD_JPY"   # 通貨ペア

instruments_candles = instruments.InstrumentsCandles(instrument=instrument, params=params)

api.request(instruments_candles)
response = instruments_candles.response
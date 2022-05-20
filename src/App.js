import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar';
import './App.css'
import 'react-dropdown/style.css';

export default function App() {
  const [value, setValue] = useState(0);
  const [moedas, setMoedas] = useState()
  const [input, setInput] = useState(1);
  const [coins, setCoins] = useState([]);
  const [currentCoin, setCurrentCoin] = useState(null);


  useEffect(() => {
    axios.get("https://plugins.capittalx.com/api/cryptosCurrency")
      .then((response) => {
        setMoedas(response.data[0])
        setCoins(response.data)
        setCurrentCoin(response.data[0])
        console.log(response.data)
      })
      .catch(() => {
        console.log("Erro")
      })
  }, [])

  useEffect(() => {
    console.log(currentCoin)
    console.log(coins.length)
  }, [currentCoin])


  function converteMoedaFloat(valor) {
    if (valor === "") {
      valor = 0;
    } else {
      valor = valor.replace(".", "");
      valor = valor.replace(",", ".");
      valor = parseFloat(valor);
    }
    return valor;
  }

  function CoinChanged(event, index) {
    console.log(index)
    setCurrentCoin(coins[index])
  }

  if (!moedas) return (<h1>Carregando</h1>)

  return (
    <div>
      <Navbar />
      <h1 className='titulo'>Conversor de Criptomoedas </h1>
      <h2 id="selecione">Selecione uma moeda</h2>
      <div>
        {coins.length !== 0 ? coins.map((coin, key) => {
          return (
            <div className='moedas'>
              <button className='opcoes' onClick={(event) => CoinChanged(event, key)} key={key}>{coin.name}</button>
            </div>
          )
        })
          : <h1></h1>}

      </div>
      <ul>

        <input
          type="currency"
          value={input}
          step="any"
          pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$"
          min="0.00" max="10000.00"
          onChange={(e) => setInput(e.target.value)}
        />

        <button className='btn first' onClick={() => {
          setValue(
            input / converteMoedaFloat(currentCoin.lastPriceReal)
          )
        }}>
          Calcular
        </button>
        <br />
        <span>
          R${input} = {value} {currentCoin.name}
        </span>
      </ul>


      <h1 id="titulo-cotacao">Cotação</h1>
      <div className='tabela'>
        <table className="content-table">
          <thead>
            <tr>
              <th>CRIPTOMOEDA</th>
              <th>ULTIMO PREÇO</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{coins[0].name}</td>
              <td>R$ {coins[0].lastPriceReal}</td>
            </tr>
            <tr>
              <td>{coins[1].name}</td>
              <td>R$ {coins[1].lastPriceReal}</td>
            </tr>
            <tr>
              <td>{coins[2].name}</td>
              <td>R$ {coins[2].lastPriceReal}</td>
            </tr>
            <tr>
              <td>{coins[3].name}</td>
              <td>R$ {coins[3].lastPriceReal}</td>
            </tr>
            <tr>
              <td>{coins[4].name}</td>
              <td>R$ {coins[4].lastPriceReal}</td>
            </tr>
            <tr>
              <td>{coins[5].name}</td>
              <td>R$ {coins[5].lastPriceReal}</td>
            </tr>
            <tr>
              <td>{coins[6].name}</td>
              <td>R$ {coins[6].lastPriceReal}</td>
            </tr>
            <tr>
              <td>{coins[7].name}</td>
              <td>R$ {coins[7].lastPriceReal}</td>
            </tr>

          </tbody>
        </table>
      </div>

    </div >
  )
}
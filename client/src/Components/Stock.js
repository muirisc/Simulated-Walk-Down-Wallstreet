function Stock( {stock, stockCounter, addStock}){

  return(

    <div className="stockCard">
      <div>
      <img alt="stock img" src={stock.img} />
      </div>
      <div>
      <h3> {stock.name}</h3>
      <li> {stock.cap.toUpperCase()}</li>
      <li>{stock.industry.toUpperCase()}</li>
      <p> {stock.price.toFixed(2)}</p>
      <p> {stock.stock_count} </p>
      </div>
      <div>

      {stockCounter ? <button> Sell!</button> :       <button onClick={addStock}> Add Stock Card!</button>}
      </div>
    </div>

  )
}

export default Stock;


// Access-Control-Allow-Origin: http://localhost:3000
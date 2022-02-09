import { useState } from "react";

function MyStock( {stock, purchaseMoreStock, sellStock, funds, setFunds, deleteStockCard}){

  const [stockCount, setStockCount] = useState(stock.stock_count);

  function stockCountUp(stockPick){
    purchaseMoreStock(stockPick)
    // console.log('stockinmystock',stockPick)
    setStockCount(stockCount + 1)
  }

  function stockCountDown(stockPick){
    sellStock(stockPick)
    setStockCount(stockCount -1)
  }

// console.log(setFunds)

 
  return(
    <div className="myStockCard">
      <button className="deleteButton" onClick={()=>deleteStockCard(stock)}>X</button>
      <div></div>
      <div>
      <img alt="stock img" src={stock.stock.img} />
      </div>
      <div>
      <h3> {stock.stock.name }</h3>
      <li> {stock.stock.cap}</li>
      <li>{stock.stock.industry}</li>
      <p> {stock.stock.price.toFixed(2)}</p>
      <p> Shares Owned: {stock.stock_count} </p>
      <button  className="myStockButton" onClick={()=>stockCountUp(stock)}> Buy More Stock</button>
      <button className="myStockButton" onClick={()=>stockCountDown(stock)}> Sell Stock</button>
      </div>
     </div>
     
  
  )
}

export default MyStock;
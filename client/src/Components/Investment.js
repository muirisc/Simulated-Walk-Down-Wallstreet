function Investment( {investment, stockCounter, purchaseStock}){

  return(
    <div className="stockCard">
      <div>
      <img alt="stock img" src={investment.img} />
      </div>
      <div>
      <h3> {investment.name}</h3>
      <li> {investment.cap}</li>
      <li>{investment.industry}</li>
      <p> {investment.price}</p>
      <button>Buy! </button>
      {/* <p> {investment.Investment_count} </p> */}
      </div>
      <div>
{/* 
      {InvestmentCounter ? <button> Sell!</button> :       <button onClick={purchaseStock}> Buy!</button>} */}
      </div>
    </div>
  )
}

export default Investment;
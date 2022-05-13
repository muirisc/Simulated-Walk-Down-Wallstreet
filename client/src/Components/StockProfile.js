import { useState, useEffect } from "react";
import Stock from "./Stock";
import MyStock from "./MyStock";

function StockProfile({ currentUser }) {
  const [funds, setFunds] = useState(0);
  const [allStocks, setStocks] = useState([]);
  const [myStocks, setMyStocks] = useState([]);
  const [prices, setPrices] = useState([]);
  const [value, setValue] = useState(0);
  const [loanPayment, setLoanPayment] = useState(0);
  const [gameDifficulty, setGameDifficulty] = useState("freeplay");
  const [month, setMonth] = useState(0);

  useEffect(() => {
    setLoan();
  }, [changeDifficulty]);

  function changeDifficulty(e) {
    setGameDifficulty(e.target.name);
    window.sessionStorage(gameDifficulty)
  }
  function setLoan() {
    if (gameDifficulty === "advanced") {
      setLoanPayment(150.0);
    }
    if (gameDifficulty === "medium") {
      setLoanPayment(100.0);
    }
    if (gameDifficulty === "easy") {
      setLoanPayment(40.0);
    }
    if (gameDifficulty === "freeplay") {
      setLoanPayment(0.0);
    }
  }
  useEffect(() => {
    fetch(`me`)
      .then((r) => r.json())
      .then((turn) => {
        setMonth(turn.turn);
      });
  }, []);

  useEffect(() => {
    fetch(`me`)
      .then((r) => r.json())
      .then((cash) => {
        setFunds(cash.cash);
      });
  }, []);

  useEffect(() => {
    fetch("/stocks")
      .then((r) => r.json())
      .then((stocks) => setStocks(stocks));
  }, []);

  useEffect(() => {
    fetch("/stocks")
      .then((r) => r.json())
      .then((newStocks) =>
        newStocks.map((stock) => setPrices([...prices, stock.price]))
      );
  }, []);


  useEffect(() => {
    fetch("/user_stock")
      .then((r) => r.json())
      .then((ownedStocks) => setMyStocks(ownedStocks));
  }, [allStocks]);

  useEffect(() => {
    let myValue = myStocks.map(
      (stock) => stock.stock_count * stock.stock.price
    );
    let totalValue = myValue.reduce((partialSum, a) => partialSum + a, 0);
    setValue(totalValue);
  });

  function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function progressTime() {
    if (funds < 0) {
      alert("Please pay your deficit before continuing!");
    } else {
      let largeCap = allStocks.filter((stock) => {
        if (stock.cap === "Largecap") {
          return true;
        }
      });

      let midCap = allStocks.filter((stock) => {
        if (stock.cap === "Middlecap") {
          return true;
        }
      });

      let smallCap = allStocks.filter((stock) => {
        if (stock.cap === "Smallcap") {
          return true;
        }
      });

      let speculative = allStocks.filter((stock) => {
        if (stock.cap === "speculative") {
          return true;
        }
      });

      if (gameDifficulty === "advanced") {
        let newFunds = funds - 150;
        let configObj1 = {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ cash: newFunds }),
        };

        fetch(`/users/${currentUser.id}}`, configObj1)
          .then((r) => r.json())
          .then((data) => {
            setFunds(newFunds);
          });
      }

      if (gameDifficulty === "medium") {
        let newFunds = funds - 100;
        let configObj1 = {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ cash: newFunds }),
        };

        fetch(`/users/${currentUser.id}}`, configObj1)
          .then((r) => r.json())
          .then((data) => {
            console.log(data);
            setFunds(newFunds);
          });
      }

      if (gameDifficulty === "easy") {
        let newFunds = funds - 40;
        let configObj1 = {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ cash: newFunds }),
        };

        fetch(`/users/${currentUser.id}}`, configObj1)
          .then((r) => r.json())
          .then((data) => {
            console.log(data);
            setFunds(newFunds);
          });
      }

      if (getRandomNum(1, 101) < 3) {
        allStocks.map((stock) => {
          let newStockPrice = stock.price + getRandomNum(-80.64, -5.23);
          if (newStockPrice <= 0) {
            newStockPrice = 1.0;
          }
          let config = {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ price: newStockPrice }),
          };
          fetch(`/stocks/${stock.id}`, config)
            .then((r) => r.json())
            .then((newPrice) => {
              alert("Prices dropped from Stock Crash", newPrice);
            });
          setStocks([...allStocks, stock]);
          alert("STOCK CRASH!");
        });
      } else {
        largeCap.map((addStock) => {
          let newStockPrice = addStock.price + getRandomNum(-7.23, 10.21);
          if (newStockPrice <= 0) {
            newStockPrice = 1.0;
          }
          let config = {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ price: newStockPrice }),
          };
          fetch(`/stocks/${addStock.id}`, config)
            .then((r) => r.json())
            .then((newPrice) => {
              console.log("new Large-cap prices", newPrice);
            });
          addStock.price = newStockPrice;
          let completedStocks = [...allStocks, addStock];
          let filteredStocks = completedStocks.filter((stock) => {
            if (stock.id !== addStock.id) return true;
          });
          setStocks(filteredStocks);
        });

        midCap.map((stock) => {
          let newStockPrice = stock.price + getRandomNum(-13.27, 15.83);
          if (newStockPrice <= 0) {
            newStockPrice = 1.0;
          }
          let config = {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ price: newStockPrice }),
          };
          fetch(`/stocks/${stock.id}`, config)
            .then((r) => r.json())
            .then((newPrice) => {
              console.log("new mid-cap prices", newPrice);
            });
          addStock.price = newStockPrice;
          let completedStocks = [...allStocks, addStock];
          let filteredStocks = completedStocks.filter((stock) => {
            if (stock.id !== addStock.id) return true;
          });
          setStocks(filteredStocks);
        });

        smallCap.map((stock) => {
          let newStockPrice = stock.price + getRandomNum(-10.14, 10.91);
          if (newStockPrice <= 0) {
            newStockPrice = 0.45;
          }
          let config = {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ price: newStockPrice }),
          };
          fetch(`/stocks/${stock.id}`, config)
            .then((r) => r.json())
            .then((newPrice) => {
              console.log("new small cap stocks", newPrice);
            });
          addStock.price = newStockPrice;
          let completedStocks = [...allStocks, addStock];
          let filteredStocks = completedStocks.filter((stock) => {
            if (stock.id !== addStock.id) return true;
          });
          setStocks(filteredStocks);
        });
      }
      let newMonth = month + 1;
      let configObj1 = {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ turn: newMonth }),
      };

      fetch(`/users/${currentUser.id}}`, configObj1)
        .then((r) => r.json())
        .then((data) => {
          setMonth(newMonth);
        });

      setTime();
    }
  }

  function setTime() {
    setMonth(month + 1);
  }



function addStock(stockPicked) {
let match = false;
myStocks.forEach( (stockP) => {
if(stockP.stock.name === stockPicked.name){
  return match = true;
}
})
if(match === true){
  alert('You already have that stock')
}else{
    let stockPurchase = {
      user_id: currentUser.id,
      stock_id: stockPicked.id,
      stock_count: 0,
    };
    let config = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(stockPurchase),
    };
    fetch("/user_stock", config)
      .then((r) => r.json())
      .then((newStock) => setMyStocks([...myStocks, newStock]));
  }}

  function purchaseMoreStock(stockPicked) {

    let newFunds = funds - stockPicked.stock.price;

    if (newFunds < 0) {
      alert("You cannot pay for this stock!");
    } else {
      let configObj1 = {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cash: newFunds }),
      };

      fetch(`/users/${currentUser.id}}`, configObj1)
        .then((r) => r.json())
        .then((data) => {
          setFunds(newFunds);
        });

      let submitCount = stockPicked.stock_count + 1;

      let configObj = {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ stock_count: submitCount }),
      };

      fetch(`/user_stocks/${stockPicked.id}`, configObj)
        .then((r) => r.json())
        .then((data) => {
          console.log(data);
        });
      stockPicked.stock_count = stockPicked.stock_count + 1;
    }
  }

  function sellStock(stockPicked) {
    console.log("purchasing Stock", stockPicked);

    let newStockCount = stockPicked.stock_count - 1;

    if (newStockCount < 0) {
      alert("You do not have another stock to sell!");
    } else {
      let newFunds = funds + stockPicked.stock.price;
      let configObj1 = {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cash: newFunds }),
      };

      fetch(`/users/${currentUser.id}}`, configObj1)
        .then((r) => r.json())
        .then((data) => {
          console.log(data);
          setFunds(newFunds);
        });

      let submitCount = stockPicked.stock_count - 1;

      let configObj = {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ stock_count: submitCount }),
      };
      console.log("id", stockPicked.id);
      fetch(`/user_stocks/${stockPicked.id}`, configObj)
        .then((r) => r.json())
        .then((data) => {
          console.log(data);
        });
      stockPicked.stock_count = stockPicked.stock_count - 1;
    }
  }

  function deleteStockCard(deleteStock) {
    if (deleteStock.stock_count > 0) {
      alert("Please sell off your stock before deleting this card");
    } else {
      let config = { method: "DELETE" };
      fetch(`/user_stocks/${deleteStock.id}`, config);
      let destroyStock = myStocks.filter(
        (stock) => stock.id !== deleteStock.id
      );
      setMyStocks(destroyStock);
    }
  }

  return (
    <>
      {currentUser ? (
        <section>
          <div className="difficultySlider">
            <h4>
              {" "}
              Want a challenge? Simulate taking a loan to make money on the
              Stock Market!
            </h4>
            {/* <style jsx>{` .difficultySlider button {color: ${color}; }`}</style> */}

            <button
              onClick={changeDifficulty}
              className={gameDifficulty === "freeplay" ? "active" : ""}
              name="freeplay"
            >
              {" "}
              Freeplay{" "}
            </button>
            <button
              onClick={changeDifficulty}
              className={gameDifficulty === "easy" ? "active" : ""}
              name="easy"
            >
              {" "}
              Easy{" "}
            </button>

            <button
              onClick={changeDifficulty}
              className={gameDifficulty === "medium" ? "active" : ""}
              name="medium"
            >
              Medium
            </button>
            <button
              onClick={changeDifficulty}
              className={gameDifficulty === "advanced" ? "active" : ""}
              name="advanced"
            >
              Advanced
            </button>
          </div>
          <div className="userStockInfo">
            <h3>Your Funds ${funds.toFixed(2)} </h3>
            <p> Overall Stock Value: ${value.toFixed(2)} </p>
            {loanPayment ? (
              <p>
                {" "}
                Your (theoretical!) monthly loan payment is: ${loanPayment}{" "}
              </p>
            ) : null}
            <p>Month {month} </p>
            {/* <button onClick={calculateValue}> Calculate Value </button> */}
            <button onClick={() => progressTime()}> Progress Time</button>
          </div>
          <h2 className="YourStocks">Your Stocks!</h2>
          <div className="ownedStocks">
            {myStocks.map((stock) => (
              <MyStock
                stock={stock}
                purchaseMoreStock={() => purchaseMoreStock(stock)}
                sellStock={() => sellStock(stock)}
                funds={funds}
                setFunds={setFunds}
                allStocks={allStocks}
                deleteStockCard={() => deleteStockCard(stock)}
              />
            ))}
          </div>
          <h2 className="YourStocks">Possible Investments </h2>
          <section className="userDataSection"></section>
          <section className="stockDisplay">
            <div className="stocksSection">
              {allStocks.map((stock) => (
                <Stock
                  key={stock.id}
                  addStock={() => addStock(stock)}
                  stock={stock}
                />
              ))}
            </div>
            <section className="investmentSection"></section>
            <div className="myStockSection"></div>
          </section>
        </section>
      ) : (
        <div className="userStockAlert">
          <h3>
            Please log in or create an account in order to play this simulation
            of the stock market!
          </h3>
        </div>
      )}
    </>
  );
}

export default StockProfile;

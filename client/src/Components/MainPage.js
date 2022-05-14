import "./CSS/MainPage.css";

function MainPage({currentUser, authenticated}){



  return(
    <section className="mainPage">
      
    <h1 className="mainPageIntro"> A Simulated Walk Down Wall Street</h1>
    <img src="https://www.nycgo.com/images/venues/3800/new-york-stock-exchange-julienne-schaer-077__large.jpg"/>
    <p> Putting Fun in Finance</p>
    <p> The goal of this app is to introduce our audience to the world of finance and account in a fun and engaging way.</p>
    <p> Play our parody stock market app and raise funds in a turbulent economic enviroment!</p>

    {currentUser ? <p> Welcome {currentUser.username}! Thank you for logging in!</p> : <button className="mainPageLogin"><a href="/login"> Log In Here</a></button>}




    </section>
  )
}
export default MainPage;
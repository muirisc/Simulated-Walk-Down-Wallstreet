## React/Rails Project: A Simulated Walk Down Wallstreet 
This project was created using JavaScript and React as a framework for the frontend, along with Ruby on Rails as the backend. 
## Description

This project is intended to be a tool to teach  audiences about financial systems in our world. The app allows users to buy and sell paraody stocks as the numbers are randomly altered based on their cap size. Users can see how long they keep selling stock with a fixed cost depleting their cash each period or a user may play in "freestyle" mode where there the turns simply change the prices. When the user clicks "progress time", the user will see prices change and their cash will deplete based on the difficulty selected. 

In some ways the app is intended to be an "anti-game" in the same way Monopoly was first introduced to teach a lesson. As Burton Malkiel suggested in his book, A Random Walk Down Wallstreet, the markets are so complex that is largely impossible to find patterns that can be exploited to make money. Sometimes the best play is simply to invest in the market and follow its ups and downs. In the same way that you cannot 'restart' your engagement with the stock market, the app does not allow for resets. However, there is a way to earn cash outside of the stock game. 

The app also includes a template for a daily quiz including functionality that only allows the user to play once. Once the quiz is complete, the user gains cash based on their correct answers that may be used in the stock game. The questions are pulled from financial news and basic financial concepts. 

Finally, there is a very basic definition of terms to help the user understand the terms used in the app.


## Requirements

- Ruby 2.7.4
- NodeJS (v16), and npm
- Heroku CLI
- Postgresql


You can use the following commands to run the application:

- `rails s`: will run the backend on [http://localhost:3000](http://localhost:3000)
- `npm start --prefix client`: will run the frontend on
  [http://localhost:4000](http://localhost:4000)






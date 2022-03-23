# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Destroying seeds"
UserStock.destroy_all

Stock.destroy_all
Investment.destroy_all
User.destroy_all


puts "Reseeding"
Stock1 = Stock.create(name:"Orange", img:"https://i.imgur.com/wN4CtCy.png", cap:'Largecap', industry:"tech", price: 174.78, market_cap: 2850000000000000)
Stock2 = Stock.create(name:"MacroHard", img:"https://i.redd.it/a8a5nmzgias51.jpg", cap:"Largecap", industry:"tech", price: 310.98, market_cap: 2331000000000000)
Stock3 = Stock.create(name:"ABCs", img:"https://i.imgur.com/ldqeHvo.jpg", cap:"Largecap", industry:"tech", price:2960.00, market_cap: 1830000000000000  )
Stock4 = Stock.create(name:"Big Mac's", img:"https://ak.picdn.net/shutterstock/videos/34850332/thumb/7.jpg", cap:"Largecap", industry:"real estate", price:262.28, market_cap:195990000000000)
Stock5 = Stock.create(name:"OOPS", img:"https://i.imgur.com/ZK1qBW8.jpg", cap:"Largecap", industry:"shipping", price: 224.79)
Stock6 = Stock.create(name:"Mario Company", img:"https://miro.medium.com/max/800/1*XAksToqI3TyMLhcszTCmhg.png", cap:"Largecap", industry:'gaming', price:63.02 )
Stock7 = Stock.create(name:"Canadian Beaver", img:"https://static.vecteezy.com/system/resources/previews/001/878/764/non_2x/canadian-beaver-with-flag-for-happy-canada-day-design-free-vector.jpg", cap:'Middlecap', industry:"retail", price:22.46)
Stock8 = Stock.create(name:"Phil's Philly Cheese Steaks", img:"https://previews.123rf.com/images/squarelogo/squarelogo1701/squarelogo170100003/69165868-フィラデルフィア-チーズ-ステーキのレストランの看板.jpg", cap:"Smallcap", industry:"culinary", price: 4.50)
Stock9 = Stock.create(name:"Woobly Tech Support", img:"https://i.imgur.com/LpDFrR6.jpg", cap:"Smallcap", industry:'tech', price:10.00)
Stock10 = Stock.create(name:"Green Mermaid Lady", img:"https://i.imgur.com/mdz1p0m.png", cap:"Largecap", industry:"culinary", price:95.00)
Stock11 = Stock.create(name:"Disinterested Orangutan", img:"https://nypost.com/wp-content/uploads/sites/2/2021/08/orangutan-sunglasses-52.jpg?quality=90&strip=all", cap:"sepeculative", industry:"crypto", price: 240000)
Stock12 = Stock.create(name:"Gold", img:"https://editorial.fxstreet.com/images/Markets/Commodities/Metals/Gold/stack-of-golden-bars-in-the-bank-vault-60756080_1x1.jpg", cap:"speculative", industry:'gold', price:1816.47)
Stock13 = Stock.create(name:"Insho", img:"https://i.imgur.com/Il51x5R.jpg", cap: "Largecap", industry: "tech", price:48.45)
Stock14 = Stock.create(name:"Omega", img:"https://i.imgur.com/JcpgR1C.jpg?1", cap: "Largecap", industry:"airline", price: 45.11)
User1 = User.create(id: 1, username:"test", password:"test", cash: 10000.00, turn: 0, quiz_taken: false)
UserStock1 = UserStock.create(user_id: User1.id, stock_id: Stock1.id, stock_count: 1)
#Stocks
# t.string :name
# t.string :type
# t.string :industry

# t.float :price
# t.float :market_cap
# puts "Seeding Complete!"                   
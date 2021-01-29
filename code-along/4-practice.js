// Cryptocurrency is all the rage. You have decided to create your own,
// KelloggCoin, that will massively disrupt financial markets at the Global
// Hub.

// Don't change the following code, which represents a series of transactions, each
// of which represents a transfer of KelloggCoin from one user to another – the first 
// transaction is the "ICO" (Initial Coin Offering)
let blockchain = [
  { fromUser: null, toUser: 'brian', amount: 20000 },
  { fromUser: 'brian', toUser: 'ben', amount: 9000 },
  { fromUser: 'brian', toUser: 'evan', amount: 7000 },
  { fromUser: 'ben', toUser: 'evan', amount: 400 },
  { fromUser: 'evan', toUser: 'katleiah', amount: 4500 },
  { fromUser: 'kateliah', toUser: 'anthony', amount: 1200 },
  { fromUser: 'anthony', toUser: 'nate', amount: 150 },
  { fromUser: 'ben', toUser: 'nate', amount: 2000 }
]

// Loop through the blockchain, printing the details of each 
// transaction with each iteration of the loop, e.g. 
// 'brian transferred 7000 KelloggCoin to evan', to the 
// JavaScript console

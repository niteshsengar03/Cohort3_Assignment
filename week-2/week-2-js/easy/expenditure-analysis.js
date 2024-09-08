/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const length = transactions.length;
  const arr=[];
  const cattergory = [];
  for(let i =0;i<transactions.length;i++){
    for(let j =i ;j<transactions.length;j++){
      let amount = transactions[i].price;
      if(transactions[i].category == transactions[j].category){
        amount += transactions[j].price;  
      }
    arr.push({category:transactions[i].category,totalSpent:amount});
      
    }
  }
  return arr;
}

module.exports = calculateTotalSpentByCategory;

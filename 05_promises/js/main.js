//1
const stock = {
    apple: 10,
    banana: 0,
    orange: 5,
  };
  
  function checkStock(product) {
    return new Promise((resolve, reject) => {
      if (stock[product] > 0) {
        resolve(`Product ${product} is in stock.`);
      } else {
        reject(`Product ${product} is out of stock.`);
      }
    });
  }
  
  checkStock("apple")
    .then(console.log)
    .catch(console.error);
  
  checkStock("banana")
    .then(console.log)
    .catch(console.error);
  
  checkStock("orange")
    .then(console.log)
    .catch(console.error);

//2
function fetchUser(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (id === 1) {
          resolve({ id: 1, name: 'John Doe' });
        } else {
          reject('User not found');
        }
      }, 2000);
    });
  }
  
  fetchUser(1)
    .then(user => console.log('User found:', user))
    .catch(error => console.error('Error:', error));
  
  fetchUser(2)
    .then(user => console.log('User found:', user))
    .catch(error => console.error('Error:', error));
  
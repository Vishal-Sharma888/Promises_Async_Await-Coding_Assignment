// Soluction 1

function doTask(taskName, callback) {
    console.log(`Starting task: ${taskName}`);
    

    setTimeout(function () {
      console.log(`Completed task: ${taskName}`);
      

      callback();
    }, 2000);
  }
  
 
  function afterTaskCompleted() {
    console.log("Callback function executed. Task is finished!");
  }
  
  
  doTask("Task 1", afterTaskCompleted);
  
  console.log("Main program continues to execute...");

// Soluction2
function printNumbersWithDelays() {
    let number = 1;
  
    function printNumber() {
      if (number <= 7) {
        console.log(number);
        number++;
        setTimeout(printNumber, number * 1000); 
      }
    }
  
    printNumber();
  }
  
  printNumbersWithDelays();

//   Soluction3
function printNumbersWithDelay() {
    let number = 1;
  
    function printNumber() {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log(number);
          resolve();
        }, number * 1000); 
      });
    }
  
    async function printSequentially() {
      while (number <= 7) {
        await printNumber();
        number++;
      }
    }
  
    printSequentially();
  }
  
  printNumbersWithDelay();
  
//   Soluction4
function myPromise(argument) {
    return new Promise((resolve, reject) => {
      if (argument === 'yes') {
        resolve('Promise Resolved');
      } else {
        reject('Promise Rejected');
      }
    });
  }
  
  // Usage example:
  myPromise('yes')
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error); 
    });
  
  myPromise()
    .then((result) => {
      console.log(result); 
    })
    .catch((error) => {
      console.error(error);
    });

// Soluction 5
function fetchData(url, callback) {
   
    setTimeout(() => {
      const data = { id: 1, name: 'John' };
      callback(data);
    }, 1000); 
  }
  
  function processData(data) {
    console.log('Received data:', data);
  }
  
  fetchData('https://example.com/api/data', processData);

// Soluction 6
getUser(function(user) {
    getOrders(user.id, function(orders) {
        getOrderDetails(orders[0].id, function(orderDetails) {
            showOrderDetails(orderDetails);
        });
    });
});

// Soluction 7
const fetchData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = { id: 1, name: 'John' };
        resolve(data);
      }, 2000);
    });
  };
  
  fetchData()
    .then(data => {
      console.log('Data:', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  
//   Soluction 8
function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  
  
  async function asyncExample() {
    console.log("Start");
    await delay(2000); // Pause for 2 seconds
    console.log("End after 2 seconds");
  }
  
  asyncExample();

// Soluction 9
const p1 = Promise.resolve("Promise P1");
const p2 = new Promise((resolve, reject) => { 
    reject("Promise P2");
});
const p3 = new Promise((resolve, reject) => { 
    resolve("Promise P3"); 
});

Promise.all([p1, p2, p3]).then(values => { 
    console.log(values); 
});

  
  
  
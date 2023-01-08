function writeCards(array, event) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
      let message = `Thank you, ${array[i]}, for the wonderful ${event} gift!`;
      newArray.push(message);
    }
    return newArray
  }

  function countDown(integer) {
    while (integer >= 0) {
      console.log(integer);
      integer--;
    }
  }
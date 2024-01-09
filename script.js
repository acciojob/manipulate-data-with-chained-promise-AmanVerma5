//your JS code here. If required.
   function manipulateArray(inputArray) {
      return new Promise((resolve) => {
        setTimeout(() => {
          // Filter out odd numbers and print after 1 second
          const filteredArray = inputArray.filter(num => num % 2 === 0);
          document.getElementById('output').innerText = `Filtered Array: ${filteredArray}`;
          resolve(filteredArray);
        }, 1000);

        setTimeout(() => {
          // Multiply even numbers by 2 and print after 2 seconds
          const modifiedArray = inputArray.map(num => num % 2 === 0 ? num * 2 : num);
          document.getElementById('output').innerText += `\nModified Array: ${modifiedArray}`;
          resolve(modifiedArray);
        }, 2000);
      });
    }

    const inputArray = [1,2,3,4,5,6,7,8];

    manipulateArray(inputArray)
      .then(finalArray => {
        // You can use the finalArray here if needed
        console.log('Final Array:', finalArray);
      });
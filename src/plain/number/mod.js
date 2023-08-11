export function modNumber(x, y) {
    const epsilon = 0.01; // Set epsilon value to round result to two decimal places
    const result = x - y * Math.floor(x / y);
    const roundedResult = Math.round(result * 100) / 100; // Rounding the result to two decimal places
  
    if (Math.abs(result - roundedResult) < epsilon) {
      return roundedResult.toFixed(2); // Return desired result (2 d.p.)
    } else {
      return result.toFixed(2); // Return the original result but converted to two decimal places
    }
  }
  

// Call the modNumber function
try {
    const result = modNumber(5,-3);
    console.log('Result:', result);
    console.log(Math.floor(-6 / 5))
  } catch (error) {
    console.error('Error:', error.message);
  
  }
    
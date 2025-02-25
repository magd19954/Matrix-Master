function bunnyEars(bunnies) {
    if (bunnies == 0) {
      return 0;
    }
    return 2 + bunnyEars(bunnies - 1);
  }
  
  console.log(bunnyEars(0)); 
  console.log(bunnyEars(1)); 
  console.log(bunnyEars(2)); 
  console.log(bunnyEars(3));
  console.log(bunnyEars(5));
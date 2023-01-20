function swap(x, y){
    // Task 1: Add code here

    // return -1 if x and y are not numbers
    if (typeof x != "number")
      return -1

    // sum the values of both x and y. You can also use multiplication or division, etc.
    x = x + y;

    // y now gets the original value of x
    y = x - y;

    // x now receives the original value of x
    x = x - y;

    console.log("New values are: x =" + x + ", y=" + y);
}

// Task 2: Add code here
swap(10, 2)

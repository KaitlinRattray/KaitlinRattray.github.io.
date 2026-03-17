// Name & Intro
  let name = prompt("Hi what is your name?");
  alert("Welcome " + name + ", it's nice to meet you!");

  // Age BirthYear
  let age = parseInt(prompt("How old are you?"));
  let birthYear = 2026 - age;
  alert("You must have been born around " + birthYear + ", right?");

  // Temperature form F to C
  let tempF = parseFloat(prompt("What's the current temperature in F?"));
  let tempC = (tempF - 32) * 5 / 9;
  alert("Well, " + tempF + " F would be " + tempC.toFixed(0) + " in C!");

  // Integer math
  let num1 = parseInt(prompt("Please enter an integer value:"));
  let num2 = parseInt(prompt("Please enter a second integer value:"));

  alert("Let me show you what I can do with the numbers " + num1 + " and " + num2 + ":");
  alert(num1 + " + " + num2 + " = " + (num1 + num2));
  alert(num1 + " - " + num2 + " = " + (num1 - num2));
  alert(num1 + " * " + num2 + " = " + (num1 * num2));
  alert(num1 + " / " + num2 + " = " + (num1 / num2));
  alert(num1 + " % " + num2 + " = " + (num1 % num2));
  alert("The max of " + num1 + " and " + num2 + " is " + Math.max(num1, num2));
  alert("The min of " + num1 + " and " + num2 + " is " + Math.min(num1, num2));

  alert(num1 + " is an " + (num1 % 2 === 0 ? "EVEN" : "ODD") + " number");
  alert(num2 + " is an " + (num2 % 2 === 0 ? "EVEN" : "ODD") + " number");

  alert(num1 > num2 ? num1 + " is greater than " + num2 : num2 + " is greater than " + num1);

  // Decimal math
  let decimal = parseFloat(prompt("Please enter a value with a decimal part:"));
  alert("Let me show you what I can do with the number " + decimal + ":");
  alert("The negative of " + decimal + " is " + (-decimal));
  alert("The sine of " + decimal + " radians is " + Math.sin(decimal));
  alert("The cosine of " + decimal + " radians is " + Math.cos(decimal));
  alert(decimal + "^10 = " + Math.pow(decimal, 10));
  alert("Square root of " + decimal + " = " + Math.sqrt(decimal));
  alert("Rounded " + decimal + " = " + Math.round(decimal));

  let decimals = parseInt(prompt("How many decimals to round to?"));
  alert(decimal + " rounded to " + decimals + " decimals = " + decimal.toFixed(decimals));
  alert("Floor of " + decimal + " = " + Math.floor(decimal));
  alert("Ceiling of " + decimal + " = " + Math.ceil(decimal));
  alert("Absolute value of " + decimal + " = " + Math.abs(decimal));

  // Year of university
  let year = parseInt(prompt("What year of university are you in? 1->Freshman, 2->Sophomore, 3->Junior, 4->Senior"));
  let percentDone = (year / 4) * 100;

  alert("You are about " + percentDone + "% done with your undergrad degree!");
  alert("You got this just lock in!!!");

  // Goodbye
  alert("Thanks for calculaitng together, " + name + "! Bye I hope you have a great day!!!");

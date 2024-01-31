// Important Note - No Built-in functions to be used
// Progression 1: Names and Input

// 1.1 Create a variable `Kalvian-1` with the driver's name.
// 1.2 Print `"The driver's name is XXXX"`.
// 1.3 Create a variable `Kalvian-2` with the navigator's name.
// 1.4 Print `"The navigator's name is YYYY"`.

const KalvianOne = "XXXX";
console.log(`The driver's name is ${KalvianOne}` )

const KalvianTwo = "YYY";
console.log(`The navigator's name is ${KalvianTwo}` )


// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.

// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the name, and also print the vowel letters along with the vowel index. or
// - print no vowels
// - for example. In String Kalvian - a and i are vowels. Print Kalvian a i a 1 4 5. 

// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters

function checkLongestLength(){
  if(lengthOne>lengthTwo){
    console.log(`The driver has the longest name, it has ${lengthOne} characters.`);
  }
  else if(lengthTwo>lengthOne){
    console.log(`It seems that the navigator has the longest name, it has ${lengthTwo} characters.`);
  }
  else{
    console.log(`Wow, you both have equally long names, X${lengthOne} characters!.`);
  }
  
}

function checkForVowels(givenString){
  const vowels = ["a","e","i","o","u"];
  let indexArray = [];
  let vowelsArray = [];
  for(let index=0; index<givenString.length;index++){
    // can use vowels.include -- but inbuilt functions are to be avoided
    for(let vowelIndex=0; vowelIndex<vowels.length; vowelIndex++){
      if(vowels[vowelIndex]==givenString[index]){
        vowelsArray.push(givenString[index]);
        indexArray.push(index);
      }

    }
  }
  if(vowelsArray.length>0){
    //Kalvian a i a 1 4 5
    console.log(`${givenString} ${[...vowelsArray]} ${[...indexArray]}`);
  }
  else{
    console.log("no vowels")
  }

}

function checkForUpperCase(givenString){
  // can be done without toUpperCase or toLowerCase -- by creating a list of all the letters in lowercase.
  // then looping over the givenString and the above list, and comparing whether they match or not.

  let uppercase=0;
  let lowercase=0;

  for(let index=0; index<givenString.length; index++){
    if(givenString[index]==givenString[index].toUpperCase()){
      uppercase++;
    }
    else{
      lowercase++;
    }
  }

  console.log(`Uppercase: ${uppercase}, Lowercase: ${lowercase}`)
}



// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "Kalvian"

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. Example "naivlaK"

// 3.3 Merge both the characters such that driver is followed by Navigator like "DriverName NavigatorName"
// - Now bring the NavigatorName to the start and send DriverName to the back like "NavigatorName DriverName"

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?

// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.
// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

function playWithChar(driver, navigator){
  let ans = "";
  for(let index=0; index<driver.length; index++){
    ans+= driver[index].toUpperCase()+ " "
  }
  console.log(ans)

  // reverse order:
  let reversedNav = "";
  for(let index=(navigator.length)-1; index>=0; index--){
    reversedNav+= navigator[index]
  }
  console.log(reversedNav);

  let mergedName = driver+" "+navigator;
  let reverseMerge = navigator+" "+driver;

  console.log(mergedName,reverseMerge);

  // lexicographic order:
  let lexicographicOrderList = [driver,navigator];
  lexicographicOrderList.sort();
  if(lexicographicOrderList[0]=="Driver"){
    console.log(`The driver's name goes first.`);
  }
  else if(lexicographicOrderList[0]=="Navigator"){
    console.log(`Yo, the navigator goes first definitely.`);
  }
  else{
    console.log(`What?! You both have the same name?`);
  }
}

function loremGenerator(){

  let textCounter = 0;

  let text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra pretium
  dapibus. Fusce nulla dolor, ornare blandit purus sed, accumsan mattis sem. Quisques
  uscipit urna a vestibulum rutrum. In nec finibus nibh, viverra fringilla nunc. Aenean
  lobortis fermentum eros vel dictum. Praesent sit amet tellus sodales, vehicula justo id,
  euismod purus. Aliquam at tortor arcu. Suspendisse neque tortor, fermentum eu ullamcorper a,
  vehicula et leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rhoncus
  ullamcorper lobortis. Etiam lacus tortor, venenatis a hendrerit ac, venenatis a erat. Fusce
  velit nibh, fringilla eu scelerisque vitae, interdum et nibh.
  Phasellus vehicula purus libero, id dictum quam iaculis vitae. Maecenas quis metus bibendum, 
  commodo tortor eget, placerat urna. Sed facilisis tincidunt diam ac mollis. Donec suscipit 
  malesuada massa sit amet blandit. Phasellus in consequat nibh. Vivamus vestibulum dolor metus, 
  id molestie odio porttitor quis. Mauris tempus tempus gravida. Aenean consequat blandit odio, eu 
  eleifend dolor hendrerit nec. Aliquam volutpat tortor in eros porta, consequat facilisis ipsum 
  lacinia. Vestibulum facilisis tempus ligula id sodales. Donec at libero magna. Donec egestas lacus 
  tellus, vitae suscipit felis tristique eget. Praesent ex erat, imperdiet a molestie facilisis, 
  laoreet a ipsum. Vestibulum et metus a turpis fringilla egestas quis vitae leo. Maecenas tempus 
  eu nunc sed pellentesque. Suspendisse ultricies metus eget porta pharetra.
  Donec interdum dapibus dolor, vitae tempor magna maximus id. Nullam ut erat at odio accumsan 
  molestie non non dolor. Integer in vehicula ipsum, ornare efficitur nibh. Praesent in gravida velit. 
  Aliquam vitae nisi dictum justo sollicitudin suscipit quis condimentum arcu. Vivamus ac ex sollicitudin 
  tortor eleifend dignissim. Maecenas ultrices arcu augue, quis cursus nisi aliquam quis. Nunc egestas nibh 
  augue, id sollicitudin quam tincidunt in.
  `
  
  console.log(text.split(' ').filter(function(n) { return n != '' }).length);
  console.log(text.split(' ').filter(function(n) { return n != '' }).filter(function(m) { return m == 'et' })
  .length);
  
}

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".

// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin' 

function palindromeCheck(givenString){
  let newString = givenString.toLowerCase();
  newString = newString.split(' ').filter(function(n) { return n != '' })
  let mainString = "";
  for(let index=0; index<givenString.length; index++){
    if(givenString[index]!==" " && givenString[index]!==","){
      mainString+=givenString[index]
    }
  }
  mainString = mainString.toLowerCase()

  const len = mainString.length;

  for (let i = 0; i < len / 2; i++) {

    if (mainString[i] !== mainString[len - 1 - i]) {
      return 'It is not a palindrome';
    }
  }
    return 'It is a palindrome';
}

checkForVowels("Kalvian");
checkForUpperCase("Kalvian");
playWithChar("Driver","Navigator");
loremGenerator()
console.log(palindromeCheck("A man, a plan, a canal, Panama"))


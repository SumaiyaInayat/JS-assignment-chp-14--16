                      // CHAPTER: ARRAYS
//  1. Declare an empty array using JS literal notation to store
// student names in future.

// var student=[];

// 2. Declare an empty array using JS object notation to store
// student names in future.

// var x=new Array();

//3. Declare and initialize a strings array.

// var str=['Sumaiya','Inayat','Laiba']
// document.write(str);

// 4. Declare and initialize a numbers array.

// var num=[10,14,123,12322,1666]
// document.write(num);

// 5. Declare and initialize a boolean array.

// var bool=[true,false,true]
// document.write(bool)
// 6. Declare and initialize a mixed array.

// var z=['Sumaiya','Inayat',20,true];
// document.write(z)

// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil.,

// document.write("<h1> Qualifications </h1> <br>")
// var qualifications=[ '1 :SSC', '2 :HSC', '2 :BCS' ,'3 :BS', '4 :BCOM', '5 :MS', '6 :M. Phil'];
// for (var i=0;i<qualifications.length;i++){

//     document.write(qualifications[i]+"<br>");
// }

// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:

// var std_name=['Sumiaya','Saquib','Aquib'];
// var std_score=[420,450,490];
// var totalscore=500;
//  for(var i=0;i < std_name.length;i++){
//      document.write("Score of "+std_name[i]+" is = "+std_score[i]+"  Percentage : "+(std_score[i]/totalscore)*100+"% <br>")
//  }

// 9. Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

// var colours=['Red','Green','Grey','Blue','Purple','Orange','Yellow'];
// document.write(colours+"<br>");
//a
// var colours=['Red','Green','Grey','Blue','Purple','Orange','Yellow'];
// var x=prompt("Which color do you you want to add in the begging of list ?" )
// colours.unshift(x);
// document.write(colours +"<br>");
//b
// var colours=['Red','Green','Grey','Blue','Purple','Orange','Yellow'];
// var y=prompt("Which color do you you want to add in the last of list ?<br>")
// colours.push(y);
// document.write(colours +"<br>");
//c
// var y=prompt("Which two colors do you you want to add in the last of list ?<br>");
// var z=prompt("Which two colors do you you want to add in the last of list ?<br>");
// colours.push(y);
// colours.push(z);
// document.write(colours +"<br>");
//d
// var colours=['Red','Green','Grey','Blue','Purple','Orange','Yellow'];
// colours.shift();
// document.write(colours);

//e
// var colours=['Red','Green','Grey','Blue','Purple','Orange','Yellow'];
// colours.pop();
// document.write(colours);

//f
// var colours=['Red','Green','Grey','Blue','Purple','Orange','Yellow'];
// var a=+prompt("At which index you want to add color");
// var b=prompt("Which color do you want to add ");
// colours.splice(a,0,b);
// document.write(colours);

//g
// var colours=['Red','Green','Grey','Blue','Purple','Orange','Yellow'];
// var a=+prompt("From which index you want to delete color");
// var b=prompt("How many colors do you want to add ");
// colours.splice(a,b);
// document.write(colours);

// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.

// var scores=[20,8,100,72,87];
// scores.sort(function(a, b){return a - b});
// document.write(scores);

//11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

// var cities=['Karachi','Hyderabad','Lahore','Multan'];
// var selectedCities=['Islamabad','Quetta'];
// selectedCities.push(cities[0],cities[1],cities[3]);
// document.write(selectedCities);

// 12.Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
//  var arr=['This','is','my','cat'];
//  var x=arr.join("&nbsp")
//  document.write(arr+"<br>");
//  document.write(x);

// 13.Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)

// var z=[];
// z.push("Keyboard");
// z.push("Mouse");
// z.push("Monitor");
// z.push("CPU");
// document.write(z+"<br>")
// for (var i=0; i<4;i++){
//     document.write("Out :"+"<br>"+z[i]+"<br>")
// }

// 14. Create a new array. Store values one by one in such a way

// that you can access the values in reverse order. (Last In-
// First Out)
// var z=[];
// z.unshift("Keyboard");
// z.unshift("Mouse");
// z.unshift("Monitor");
// z.unshift("CPU");

// document.write(z+"<br>");
// for (var i=0; i<4;i++){
//     document.write("Out :"+"<br>"+z[i]+"<br>")
// }

// 15. Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array.
//     Display the following dropdown/select menu in your
//     browser using document.write() method:
  


var phone=["Apple","Samsung", "Motorola", "Nokia", "Sony & Haier"];
var option=" ";
for (var i=0;i<phone.length;i++){
    option+='<option value="' + phone[i] +'">' + phone[i] + "</option>";
}
document.getElementById('phone').innerHTML=option;


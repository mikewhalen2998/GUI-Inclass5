// ADD NEW ITEM TO END OF LIST
var end= document.createElement("li");
var end_text=document.createTextNode("cream");

end.appendChild(end_text);

var list= document.getElementsByTagName("ul")[0];
list.insertBefore(end, list.childNodes[8]);


// ADD NEW ITEM START OF LIST
var first= document.createElement("li");
var first_text=document.createTextNode("kale");

first.appendChild(first_text);

list= document.getElementsByTagName("ul")[0];

list.insertBefore(first, list.childNodes[0]);

// ADD A CLASS OF COOL TO ALL LIST ITEMS
document.getElementsByTagName("li")[0].setAttribute("class", "cool");
document.getElementsByTagName("li")[1].setAttribute("class", "cool");
document.getElementsByTagName("li")[2].setAttribute("class", "cool");
document.getElementsByTagName("li")[3].setAttribute("class", "cool");
document.getElementsByTagName("li")[4].setAttribute("class", "cool");
document.getElementsByTagName("li")[5].setAttribute("class", "cool");



// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
//Select all elements with the li tag and count them
var item_number=document.querySelectorAll("li");
var count= item_number.length;

//Display count in a span element
var my_span= document.createElement("span");
var span_text=document.createTextNode(count);

my_span.appendChild(span_text);

//append span to header
var buy_groceries=document.getElementsByTagName("h2")[0];
buy_groceries.appendChild(my_span);

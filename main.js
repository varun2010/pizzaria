var menu_list_array=[
    "Chicken Tandori Pizza",
    "Duluxe Veggie Pizza",
    "Extra Cheesy Pizza",
    "Hot and Spicy Pizza",
    "Paneer Tikka Pizza",
    "Tasty Mushroom Pizza"
];
function getmenu(){
    var htmldata;
    htmldata="<ol class='list' style='color: darkorange;font-size: 40px;'>"
    menu_list_array.sort();
    for(var i=0;i<menu_list_array.length;i++){
        htmldata=htmldata+"<li>"+menu_list_array[i]+"</li>"
    }
    htmldata=htmldata+"</ol>"
    document.getElementById("display_menu").innerHTML=htmldata;
};
function add_item(){
    var htmldata;
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
    menu_list_array.sort();
    for(var z=0;z<menu_list_array.length;z++){
        htmldata="<span style='background-color: darkgoldenrod;padding-top: 40px;padding-bottom: 30px;padding-right: 5px;'>"+"<span>"+"<img style='background-color: rgb(0, 255, 242);margin-bottom: 15px;' height='100' src='pizzaImg.png'>"+"</span>"+"<span style='font-size: 35px;'>"+menu_list_array[z]+"</span>"+"&nbsp;&nbsp;&nbsp;";
    }
    document.getElementById("display_addmenu").innerHTML=htmldata;
}
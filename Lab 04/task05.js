let districts = ["Nowshera", "Charsadda", "Mardan", "Peshawar", "Bannu"];

document.write("<br> Select your District <br>");
document.write("<select>")

districts.forEach(function(value){
    document.write("<option>" + value + "</option>");
});

document.write("</select>");


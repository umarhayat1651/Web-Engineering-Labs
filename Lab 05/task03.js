function new_entry() {
    var dropdown = document.getElementById("choice");
    var textbox = document.createElement("input");
    textbox.type = "text";
    textbox.id = "NewEntry";
    dropdown.parentElement.replaceChild(textbox, dropdown);
}
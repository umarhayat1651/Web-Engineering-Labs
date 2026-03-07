function display() {
    var select = document.getElementById("select");
    var selectedValue = select.value.substring(select.selectionStart, select.selectionEnd);
    document.getElementById("display").innerText = selectedValue;
}
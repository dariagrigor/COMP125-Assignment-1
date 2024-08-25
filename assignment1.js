function generateTable() {
    var rows = document.getElementById("rows").value;
    var columns = document.getElementById("columns").value;

    var table = document.getElementById("multiplicationTable");

    table.innerHTML = '';

    for (var i = 1; i <= rows; i++) {
        var row = table.insertRow();
        for (var j = 1; j <= columns; j++) {
            var cell = row.insertCell();
            cell.textContent = i * j;
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("button").addEventListener("click", generateTable);
});
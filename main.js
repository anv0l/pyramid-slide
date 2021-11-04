
function impPyramid(height, symbol) {
    let result = "";
    for (let i = 1; i <= height; i++) {
        result = result + "<div class='p-line'>" + "&nbsp;".repeat(height - i) + symbol.repeat(i + 1) + "</div>";
    }
    //	console.log(result);
    return result;

}

function applyChanges(h, s) {
    let p = impPyramid(h, s);

    document.getElementById("pyramid").innerHTML = p;
    document.getElementById("rangeValue").innerHTML = h;
}


function rangeOnChange() {
    let height = document.getElementById("range").value;
    let symbol = document.getElementById("symbol").value;
    applyChanges(height, symbol);
}

document.getElementById("range").addEventListener('input', rangeOnChange, false);
document.getElementById("symbol").addEventListener('input', rangeOnChange, false);
rangeOnChange();
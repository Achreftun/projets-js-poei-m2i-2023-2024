var voiture = document.getElementById('voiture');
var columnPosition = 1;
var rowPosition = 1;
var possibleValuesOfRowsAndColumns = [1, 5, 9];

function moveLeft() {
    if (columnPosition > 1 && moveLeftRightIsPossible()) {
        voiture.style.gridColumnStart = (columnPosition - 1).toString();
        columnPosition -= 1;
    }
}

function moveTop() {
    if (rowPosition > 1 && moveTopBottomIsPossible()) {
        rowPosition -= 1;
        voiture.style.gridRowStart = (rowPosition).toString();
    }
}

function moveBottom() {
    if (rowPosition < 9 && moveTopBottomIsPossible()) {
        rowPosition += 1;
        voiture.style.gridRowStart = (rowPosition).toString();
    }
}

function moveRight() {
    if (columnPosition < 9 && moveLeftRightIsPossible()) {
        columnPosition += 1;
        voiture.style.gridColumnStart = (columnPosition).toString();
    }
}

function moveLeftRightIsPossible() {
    return possibleValuesOfRowsAndColumns.includes(rowPosition);
}

function moveTopBottomIsPossible() {
    return possibleValuesOfRowsAndColumns.includes(columnPosition);
}
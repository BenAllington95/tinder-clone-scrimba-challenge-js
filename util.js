function disableButtons() {
    document.getElementById('swipe-btn').disabled = true
    document.getElementById('match-btn').disabled = true
}

function enableButtons() {
    document.getElementById('swipe-btn').disabled = false
    document.getElementById('match-btn').disabled = false
}


export { disableButtons, enableButtons }
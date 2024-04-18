function validateForm() {
    let x = document.forms["checkoutForm"]["fullname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}
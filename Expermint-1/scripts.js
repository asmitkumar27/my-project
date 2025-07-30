function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const age = document.getElementById("age").value;

    if (name === "" || email === "" || age === "") {
        alert("Please fill all fields.");
        return false;
    }
    return true;
}
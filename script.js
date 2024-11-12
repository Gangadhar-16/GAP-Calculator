function calculateGPA() {
    // Example GPA calculation (replace with actual calculation logic)
    const name = document.getElementById("studentName").value.trim();
    const totalPoints = 75; // Replace with actual totalPoints calculation
    const gpa = totalPoints / 24.5; // Adjust the divisor if needed

    if (name === "") {
        alert("Please enter your name.");
        return;
    }

    // Send the calculated GPA data to PHP via fetch API
    fetch("send_email.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name: name, totalPoints: totalPoints, gpa: gpa.toFixed(2) })
    })
    .then(response => response.text())
    .then(data => {
        alert(data);  // Success message from PHP
    })
    .catch(error => {
        console.error("Error:", error);
    });
}
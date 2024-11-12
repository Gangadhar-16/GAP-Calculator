<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = json_decode(file_get_contents("php://input"), true);

    $name = $data['name'];
    $totalPoints = $data['totalPoints'];
    $gpa = $data['gpa'];

    $to = "your-email@example.com";  // Replace with your email
    $subject = "GPA Results for $name";
    $message = "$name's GPA Results:\n\nTotal Points: $totalPoints\nGPA: $gpa";
    $headers = "From: noreply@yourdomain.com";

    if (mail($to, $subject, $message, $headers)) {
        echo "GPA results successfully sent to $to!";
    } else {
        echo "Failed to send GPA results.";
    }
} else {
    echo "Invalid request method.";
}
?>
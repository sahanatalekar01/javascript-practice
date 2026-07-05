function checkGrade() {
    let marks = document.getElementById("marks").value;
    let result = document.getElementById("result");

    if (marks === "") {
        result.innerText = "Please enter marks.";
    } else if (marks < 0 || marks > 100) {
        result.innerText = "Please enter marks between 0 and 100.";
    } else if (marks >= 90) {
        result.innerText = "Grade: A";
    } else if (marks >= 80) {
        result.innerText = "Grade: B";
    } else if (marks >= 70) {
        result.innerText = "Grade: C";
    } else if (marks >= 60) {
        result.innerText = "Grade: D";
    } else if (marks >= 35) {
        result.innerText = "Grade: E (Pass)";
    } else {
        result.innerText = "Grade: F (Fail)";
    }
}
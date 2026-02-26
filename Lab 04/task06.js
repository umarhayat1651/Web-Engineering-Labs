let reg = prompt("Enter your registration number: ");
let name = prompt("Enter your name: ");
let semester = prompt("Enter your semester: ");
let we = prompt("Enter your web engineering marks: ");
let cp = prompt("Enter your computer programming marks: ");
let oop = prompt("Enter your object oriented programming marks: ");
let dsa = prompt("Enter your data structure and algorithm marks: ");
let ai = prompt("Enter your artificial intelligence marks: ");

we = parseInt(we);
cp = parseInt(cp);
oop = parseInt(oop);
dsa = parseInt(dsa);
ai = parseInt(ai);

let percentage = ((we + cp + oop + dsa + ai) / 500) * 100;
let grade;

if (percentage >= 90) {
    grade = "A+";
} else if (percentage >= 80) {
    grade = "A";
} else if (percentage >= 70) {
    grade = "B";
} else if (percentage >= 60) {
    grade = "C";
} else if (percentage >= 50) {
    grade = "D";
} else {
    grade = "F";
}

document.write("<h3>Result:</h3>");
document.write("<table border='1' width='100%'> <tr> <th>Registration Number</th>");
document.write("<th>Name</th>");
document.write("<th>Semester</th>");
document.write("<th>Web Engineering</th>");
document.write("<th>Computer Programming</th>");
document.write("<th>Object Oriented Programming</th>");
document.write("<th>Data Structure and Algorithm</th>");
document.write("<th>Artificial Intelligence</th>");
document.write("<th>Percentage</th>");
document.write("<th>Grade</th>");
document.write("</tr> <tr> <td>" + reg + "</td>");
document.write("<td>" + name + "</td>");
document.write("<td>" + semester + "</td>");
document.write("<td>" + we + "</td>");
document.write("<td>" + cp + "</td>");
document.write("<td>" + oop + "</td>");
document.write("<td>" + dsa + "</td>");
document.write("<td>" + ai + "</td>");
document.write("<td>" + percentage + "</td>");
document.write("<td>" + grade + "</td>");
document.write("</tr> </table>");

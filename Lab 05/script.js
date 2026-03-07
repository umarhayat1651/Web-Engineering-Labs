// var obj = {
//     firstName: "Umar",
//     lastName: "Hayat",
//     age: 21,
//     address:["Nowshera", "KPK"], 
//     skills: {extraDuty: "CR",
//         designation: "Student",
//         interest: "Web Engineering"
//     }
// };

// document.write("First Name is: " + obj.firstName + "<br>");
// document.write("Last Name is: " + obj.lastName + "<br>");
// document.write("Age is: " + obj.age + "<br>");
// document.write("Address is: " + obj.address + "<br>");
// document.write("Address is: " + obj.address[1] + "<br>");
// document.write("Extra Duty:  " + obj.skills.extraDuty + "<br>");
// document.write("Designation:  " + obj.skills.designation + "<br>");
// document.write("Interest:  " + obj.skills.interest + "<br><br>");


// var obj_two = {
//     firstName: "Afaq",
//     lastName: "Alam",
//     age: 20
// };

// for (var data in obj_two) {
//     document.write(obj_two[data] + "<br>");
// }

// var obj_three = {
//     firstName: "Umar",
//     lastName: "Hayat",
//     age: 21,
//     address:["Nowshera", "KPK"], 
//     skills: {extraDuty: "CR",
//         designation: "Student",
//         interest: "Web Engineering"
//     }
// };

// for (var data in obj_three) {
//     if (typeof(obj_three[data]) === "object"){
//         for (var nestedItem in obj_three[data]){
//             document.write(obj_three[data][nestedItem] + "<br>");
//         }
//     }
//     else {
//         document.write(obj_three[data] + "<br>");
//     }
// }

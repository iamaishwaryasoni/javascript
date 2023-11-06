// SWITCH STATEMENT


// Basic syntax of switch statement
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;

    default:
        console.log("default case");
        break;
}

// If we  dont use break then it will execute all the codes from where the condition matchs except default condition.

const mon = "april"
switch (mon) {
    case "Jan":
        console.log("January");
        break;
    case "feb":
        console.log("Feb");
        break;
    case "march":
        console.log("March");
        break;
    case "april":
        console.log("April");
        break;

    default:
        console.log("default case");
        break;
}
const course = {
    cousrseName: "Javascript",
    price: "1999",
    courseInstructor: "Aishwarya"
}

// another way of accessing object value 
// const {courseInstructor} = course
//console.log(courseInstructor);

const {courseInstructor: instructor} = course // we can also change the key name
console.log(instructor);
// This is called de-structureing. 

// JSON SYNTAX

// {
//     "Name": "Soni",
//     "age": "23",
//     "course": "mca"
// }


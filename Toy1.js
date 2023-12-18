
// Write a function that prompts the user to input student marks. The input should be between 0 and 100. 

//The output should correspond the correct grade, as shown below: 

// A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.

function calculate() {
  const marks = prompt('Enter student marks: ')  //prompt user to enter marks and converts input into a number
}while (marks < 0 || marks > 100) {
  prompt('invalid value. Please enter a number between 0 and 100: ') 
}
// logic to calculate the grade
let grade
if (marks > 79) {
  grade = 'A'
}else if (marks > 60 && marks < 79) {
  grade = 'B'

}else if (marks > 49 && marks < 60) {
  grade = C

}else if (marks >= 40 && marks < 49) {
  grade = 'D'
}else {
  grade = 'E'
}
return alert(`Grade: ${grade}`)

calGrade()
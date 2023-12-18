
// Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic 
// salary and benefits. Calculate the payee (i.e. Tax), NHIF Deductions, NSSF Deductions, gross salary, 
// and net salary. 

const basicSalary = parseInt(prompt('Enter your basic salary:'))
if (typeof basicSalary !== 'number' && basicSalary > 0 ) {

}
const benefits = parseInt(prompt('Enter your benefits:'))

const grossSalary = basicSalary + benefits
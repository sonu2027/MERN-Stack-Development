/*4. Employee Class Challenge.
Create a class called Employee with three properties: name, position, and salary. The class should have a method called getSalary that returns the employee's salary. Instantiate an instance of the Employee class and call the getSalary method. */

class Employee {
  #name;
  #position;
  #salary;
  constructor(n, p, s) {
    this.#name = n;
    this.#position = p;
    this.#salary = s;
  }
  getSalary() {
    return this.#salary;
  }
}
const e1 = new Employee("Sonu Mondal", "SDE", 150000);
const e1Salary = e1.getSalary();
console.log(e1Salary);
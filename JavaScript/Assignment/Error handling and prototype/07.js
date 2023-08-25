/*7. Password Checker.
Create a class called User with properties username and password. Implement a getter method for password that returns the password with all characters replaced by asterisks. Implement a setter method for password that checks if the new password is at least 8 characters long and contains at least one number and one uppercase letter. If the password is valid, set the new password. If not, log an error message. */

class User {
  #username;
  #password;

  isNumber(password) {
    for (let i of password) {
      if (i >= "0" && i <= "9") {
        return true;
      }
    }
    return false;
  }

  isUpperCase(password) {
    for (let i of password) {
      if (i >= "A" && i <= "Z") {
        return true;
      }
    }
    return false;
  }

  getPassword(p) {
    this.#password = p;
    this.#password = Array.from(this.#password);
    const newPassword = this.#password.filter((e, i, a) => {
      if (e == "*") {
      } else {
        return e;
      }
    });
    this.#password = newPassword.join("");
  }
  setPassword() {
    if (
      this.#password.length >= 8 &&
      this.isNumber(this.#password) === true &&
      this.isUpperCase(this.#password) === true
    ) {
      return this.#password;
    } else {
      return "error";
    }
  }
}

const u1 = new User();
u1.getPassword("wcch*h**bbv06Xbbbvv&");
const newPassword = u1.setPassword();
console.log(newPassword);

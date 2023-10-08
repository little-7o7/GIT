class Employee {
  String name;
  String surname;
  String phoneNumber;
  String passport;

  Employee(this.passport, this.name, this.surname, this.phoneNumber);
}

class EmployeeModel extends Employee {
  EmployeeModel(
      String passport, String name, String surname, String phoneNumber)
      : super(passport, name, surname, phoneNumber);

  Map toJson() {
    return {
      "name": name,
      "surname": surname,
      "phoneNumber": phoneNumber,
      "passport": passport,
    };
  }

  EmployeeModel fromEmployee(Employee employee) {
    return EmployeeModel(
      employee.passport,
      employee.name,
      employee.surname,
      employee.phoneNumber,
    );
  }
}

void main() {
  EmployeeModel empMod =
      EmployeeModel("3399484", "Alex", "A", "+998123456789");
  Map empJs = empMod.toJson();
  print(empJs);

  Employee employee = Employee("11029477", "Max", "M", "+998123456789");
  EmployeeModel convEmpMod = empMod.fromEmployee(employee);
  Map convEmpJs = convEmpMod.toJson();
  print(convEmpJs);
}

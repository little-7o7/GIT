class Book {
  String author;
  int year;
  String title;

  Book(this.author, this.year, this.title);

  static String getInfo(Book book) {
    return "Title: ${book.title}, Author: ${book.author}, Year: ${book.year}";
  }
}

class Student {
  String name;
  int age;
  List<String> subjects = [];
  List<int> grades = [];

  Student(this.name, this.age);

  void addSubject(String subject) {
    subjects.add(subject);
  }

  void removeSubject(String subject) {
    subjects.remove(subject);
  }

  String getInfo() {
    return "Name: $name, Age: $age, Subjects: $subjects";
  }

  double getAverageGrade() {
    if (grades.isEmpty) {
      return 0.0;
    }
    double sum = 0;
    for (var grade in grades) {
      sum += grade;
    }
    return sum / grades.length;
  }

  bool hasSubject(String subject) {
    return subjects.contains(subject);
  }
}

class Person {
  String name;
  int age;

  Person(this.name, this.age);

  static String getInfo(Person person) {
    return "Name: ${person.name}, Age: ${person.age}";
  }

  static bool isAdult(Person person) {
    return person.age >= 18;
  }
}

class PersonWithBook {
  String name;
  Book book;

  PersonWithBook(this.name, this.book);

  String getInfo() {
    return "Name: $name. Reading book: ${book.title}, ${book.year} year";
  }
}

void main() {
  Book book = Book("little Muniskhonov", 2025, "Dart Programming");
  print(Book.getInfo(book));

  Student student = Student("Alex", 20);
  student.addSubject("Math");
  student.addSubject("History");
  student.grades = [70, 65];
  print(student.getInfo());
  print("Average Grade: ${student.getAverageGrade()}");
  print("Has Math subject: ${student.hasSubject("Math")}");

  Person person = Person("Alisa", 25);
  print(Person.getInfo(person));
  print("Is Adult: ${Person.isAdult(person)}");

  PersonWithBook personWithBook = PersonWithBook("Michael", book);
  print(personWithBook.getInfo());
}

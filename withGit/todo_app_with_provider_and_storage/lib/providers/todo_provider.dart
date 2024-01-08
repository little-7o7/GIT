import 'package:flutter/material.dart';
import '../models/todo_model.dart';
import '../utils/hive_db.dart';

class TodoProvider extends ChangeNotifier {
  List<TodoModel> _todos = [];
  bool _isDateDown = false;
  String _queryField = '';

  List<TodoModel> get todos => _todos;
  bool get isDateDown => _isDateDown;
  String get queryField => _queryField;

  sortByDate() {
    final todos = HiveDB.todoBox.values.toList();
    todos.sort((a, b) => b.date.compareTo(a.date));
    notifyListeners();
    return todos;
  }

  void setIsDateDown(bool query) {
    _isDateDown = query;
    notifyListeners();
  }

  void setQueryField(String query) {
    _queryField = query;
    notifyListeners();
  }

  void queryClean() {
    _isDateDown = false;
    _queryField = '';
    notifyListeners();
  }

  Future<void> loadTodos() async {
    List<TodoModel> box = HiveDB.todoBox.values.toList();

    if (_isDateDown) {
      if (_queryField == '') {
        _todos = sortByDate();
      } else {
        _todos = sortByDate();
        _todos.removeWhere((element) => !element.title.contains(_queryField) && !element.description.contains(_queryField));
      }
    } else {
      if (_queryField == '') {
        _todos = box;
      } else {
        _todos = box;
        _todos.removeWhere((element) => !element.title.contains(_queryField) && !element.description.contains(_queryField));
      }
    }
    notifyListeners();
  }

  Future<void> addTodo(TodoModel task) async {
    final newTodo = TodoModel(
      id: task.id,
      title: task.title,
      description: task.description,
      date: task.date,
      status: task.status,
    );
    await HiveDB.todoBox.put(newTodo.id, newTodo);
    notifyListeners();
  }

  Future<void> toggleTodoCompletion(TodoModel todo) async {
    todo.status = !todo.status;
    await HiveDB.todoBox.put(todo.key, todo);
    notifyListeners();
  }

  Future<void> deleteTodo(TodoModel todo) async {
    await HiveDB.todoBox.delete(todo.key);
    notifyListeners();
  }

  Future<void> deleteAllTodos() async {
    await HiveDB.todoBox.clear();
    notifyListeners();
  }
}

// import 'package:cloud_firestore/cloud_firestore.dart';
// import 'package:flutter/material.dart';
// import '../models/todo_model.dart';

// class TodoProvider extends ChangeNotifier {
//   List<TodoModel> _todos = [];
//   bool _isDateDown = false;
//   String _queryField = '';

//   List<TodoModel> get todos => _todos;
//   bool get isDateDown => _isDateDown;
//   String get queryField => _queryField;

//   Future<void> sortByDate() async {
//     final QuerySnapshot querySnapshot = await FirebaseFirestore.instance
//         .collection('todos')
//         .orderBy('date', descending: true)
//         .get();

//     _todos = querySnapshot.docs.map((doc) => TodoModel.fromMap(doc.data())).toList();
//     notifyListeners();
//   }

//   void setIsDateDown(bool query) {
//     _isDateDown = query;
//     notifyListeners();
//   }

//   void setQueryField(String query) {
//     _queryField = query;
//     notifyListeners();
//   }

//   void queryClean() {
//     _isDateDown = false;
//     _queryField = '';
//     notifyListeners();
//   }

//   Future<void> loadTodos() async {
//     if (_isDateDown) {
//       if (_queryField == '') {
//         await sortByDate();
//       } else {
//         await sortByDate();
//         _todos.removeWhere((element) =>
//             !element.title.contains(_queryField) &&
//             !element.description.contains(_queryField));
//       }
//     } else {
//       if (_queryField == '') {
//         await loadTodosFromFirestore();
//       } else {
//         await loadTodosFromFirestore();
//         _todos.removeWhere((element) =>
//             !element.title.contains(_queryField) &&
//             !element.description.contains(_queryField));
//       }
//     }
//     notifyListeners();
//   }

//   Future<void> loadTodosFromFirestore() async {
//     final QuerySnapshot querySnapshot =
//         await FirebaseFirestore.instance.collection('todos').get();

//     _todos = querySnapshot.docs.map((doc) => TodoModel.fromMap(doc.data())).toList();
//   }

//   Future<void> addTodo(TodoModel task) async {
//     await FirebaseFirestore.instance.collection('todos').add(task.toMap());
//     notifyListeners();
//   }

//   Future<void> toggleTodoCompletion(TodoModel todo) async {
//     todo.status = !todo.status;
//     await FirebaseFirestore.instance
//         .collection('todos')
//         .doc(todo.id)
//         .update({'status': todo.status});
//     notifyListeners();
//   }

//   Future<void> deleteTodo(TodoModel todo) async {
//     await FirebaseFirestore.instance
//         .collection('todos')
//         .doc(todo.id)
//         .delete();
//     notifyListeners();
//   }

//   Future<void> deleteAllTodos() async {
//     final QuerySnapshot querySnapshot =
//         await FirebaseFirestore.instance.collection('todos').get();

//     for (QueryDocumentSnapshot doc in querySnapshot.docs) {
//       await doc.reference.delete();
//     }
//     notifyListeners();
//   }
// }

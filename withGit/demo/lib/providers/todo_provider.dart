import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';
import '../models/todo_model.dart';

class TodoProvider extends ChangeNotifier {
  List<TodoModel> _todos = [];
  bool _isDateDown = false;
  String _queryField = '';

  List<TodoModel> get todos => _todos;
  bool get isDateDown => _isDateDown;
  String get queryField => _queryField;

  Future<void> sortByDate() async {
    try {
      final QuerySnapshot querySnapshot = await FirebaseFirestore.instance.collection('todos').orderBy('date', descending: false).get();
      _todos = querySnapshot.docs.map((doc) => TodoModel.fromMap(doc.data() as Map<String, dynamic>, doc.id)).toList();
      notifyListeners();
    } catch (error) {
      print('Error in sortByDate: $error');
    }
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
    
    if (_isDateDown) {
      if (_queryField == '') {
        await sortByDate();
      } else {
        await sortByDate();
        _todos.removeWhere((element) => !element.title.contains(_queryField) && !element.description.contains(_queryField));
      }
    } else {
      if (_queryField == '') {
        await loadTodosFromFirestore();
      } else {
        await loadTodosFromFirestore();
        _todos.removeWhere((element) => !element.title.contains(_queryField) && !element.description.contains(_queryField));
      }
    }
    notifyListeners();
  }

  Future<void> loadTodosFromFirestore() async {
    final QuerySnapshot querySnapshot = await FirebaseFirestore.instance.collection('todos').get();

    _todos = querySnapshot.docs.map((doc) => TodoModel.fromMap(doc.data() as Map<String, dynamic>, doc.id)).toList();
  }

  Future<void> addTodo(TodoModel task) async {
    await FirebaseFirestore.instance.collection('todos').add(task.toMap());
    notifyListeners();
  }

  Future<void> toggleTodoCompletion(TodoModel todo) async {
    todo.status = !todo.status;
    await FirebaseFirestore.instance.collection('todos').doc(todo.id).update({'status': todo.status});
    notifyListeners();
  }

  Future<void> deleteTodo(TodoModel todo) async {
    await FirebaseFirestore.instance.collection('todos').doc(todo.id).delete();
    notifyListeners();
  }

  Future<void> deleteAllTodos() async {
    final QuerySnapshot querySnapshot = await FirebaseFirestore.instance.collection('todos').get();

    for (QueryDocumentSnapshot doc in querySnapshot.docs) {
      await doc.reference.delete();
    }
    notifyListeners();
  }
}

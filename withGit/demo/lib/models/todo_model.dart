// todo_model.dart
import 'package:cloud_firestore/cloud_firestore.dart';

class TodoModel {
  late String id;
  late String title;
  late String description;
  late DateTime date;
  late bool status;

  TodoModel({
    required this.id,
    required this.title,
    required this.description,
    required this.date,
    required this.status,
  });

  // Factory method to create TodoModel from Firestore data
  factory TodoModel.fromMap(Map<String, dynamic> map, String id) {
    return TodoModel(
      id: id,
      title: map['title'],
      description: map['description'],
      date: (map['date'] as Timestamp).toDate(),
      status: map['status'],
    );
  }

  // Method to convert TodoModel to a map for Firestore
  Map<String, dynamic> toMap() {
    return {
      'title': title,
      'description': description,
      'date': date,
      'status': status,
    };
  }
}

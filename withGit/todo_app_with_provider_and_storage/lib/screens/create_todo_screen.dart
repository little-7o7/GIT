// ignore_for_file: library_private_types_in_public_api

import 'package:counter_with_provider/models/todo_model.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../providers/todo_provider.dart';

class CreateTodoScreen extends StatefulWidget {
  const CreateTodoScreen({super.key});

  @override
  _CreateTodoScreenState createState() => _CreateTodoScreenState();
}

class _CreateTodoScreenState extends State<CreateTodoScreen> {
  final TextEditingController _titleController = TextEditingController();
  final TextEditingController _descriptionController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Create new Todo'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            TextField(
              controller: _titleController,
              decoration: const InputDecoration(labelText: 'Title'),
            ),
            const SizedBox(height: 16.0),
            TextField(
              controller: _descriptionController,
              decoration: const InputDecoration(labelText: 'Description'),
            ),
            const SizedBox(height: 16.0),
            ElevatedButton(
              onPressed: () async {
                String title = _titleController.text;
                String description = _descriptionController.text;
                DateTime date = DateTime.now();

                final newTask = TodoModel(
                  id: DateTime.now().millisecondsSinceEpoch.toString(),
                  title: title,
                  description: description,
                  date: date,
                  status: false,
                );

                final task = _titleController.text.trim();
                if (task.isNotEmpty) {
                  Provider.of<TodoProvider>(context, listen: false).addTodo(newTask);
                  Navigator.pop(context);
                }
              },
              child: const Text('Create Todo'),
            ),
          ],
        ),
      ),
    );
  }

  @override
  void dispose() {
    _titleController.dispose();
    _descriptionController.dispose();
    super.dispose();
  }
}

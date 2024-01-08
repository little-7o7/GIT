import '../models/todo_model.dart';
import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
import 'package:provider/provider.dart';
import '../providers/todo_provider.dart';

class TodoWidget extends StatelessWidget {
  final TodoModel todo;
  const TodoWidget({super.key, required this.todo});

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        border: Border.all(
          color: Colors.grey,
          width: 1,
        ),
        borderRadius: BorderRadius.circular(20),
        boxShadow: [
          BoxShadow(
            color: Colors.grey.withOpacity(0.3),
            spreadRadius: 2,
            blurRadius: 5,
            offset: const Offset(0, 2),
          ),
        ],
      ),
      margin: const EdgeInsets.only(top: 5, bottom: 5),
      padding: const EdgeInsets.symmetric(vertical: 10),
      child: Row(
        children: [
          Checkbox(
            value: todo.status,
            onChanged: (_) => _toggleTodoCompletion(context),
          ),
          const SizedBox(width: 5),
          Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                todo.title,
                style: const TextStyle(
                  fontWeight: FontWeight.bold,
                  fontSize: 18,
                ),
              ),
              const SizedBox(height: 5),
              Text(
                todo.description,
                style: const TextStyle(fontSize: 16),
              ),
              const SizedBox(height: 5),
              Text(
                'Date: ${DateFormat('MMM dd, yyyy').format(todo.date)}',
                style: const TextStyle(fontSize: 14),
              ),
            ],
          ),
          const Spacer(),
          IconButton(
            icon: const Icon(
              Icons.delete,
              color: Colors.grey,
            ),
            onPressed: () => _deleteTodo(context),
          ),
        ],
      ),
    );
  }

  void _toggleTodoCompletion(BuildContext context) {
    TodoProvider todoProvider = Provider.of<TodoProvider>(context, listen: false);
    todoProvider.toggleTodoCompletion(todo);
  }

  void _deleteTodo(BuildContext context) {
    TodoProvider todoProvider = Provider.of<TodoProvider>(context, listen: false);
    todoProvider.deleteTodo(todo);
  }
}

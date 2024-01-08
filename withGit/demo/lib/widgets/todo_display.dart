import 'package:demo/widgets/todo_widget.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import '../providers/todo_provider.dart';

class TodoDisplay extends StatelessWidget {
  const TodoDisplay({super.key});

  @override
  Widget build(BuildContext context) {
    return Consumer<TodoProvider>(
      builder: (context, todoProvider, a) {
        final todos = todoProvider.todos;

        return Expanded(
          child: Padding(
            padding: const EdgeInsets.symmetric(horizontal: 12),
            child: ListView.builder(
              itemCount: todos.length,
              itemBuilder: (context, index) {
                final todo = todos[index];
                return TodoWidget(todo: todo);
              },
            ),
          ),
        );
      },
    );
  }
}

import 'package:demo/screens/create_todo_screen.dart';
import 'package:demo/widgets/search_field_widget.dart';
import 'package:flutter/material.dart';

import '../widgets/todo_display.dart';
import '../utils/animated_navigation.dart';
import 'package:provider/provider.dart';
import '../providers/todo_provider.dart';
import '../providers/theme_provider.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    Provider.of<TodoProvider>(context, listen: true).loadTodos();

    return Scaffold(
      appBar: AppBar(
        title: const Text('Todo App'),
        actions: [
          IconButton(
            onPressed: () {
              Provider.of<ThemeProvider>(context, listen: false).toggleTheme();
            },
            icon: const Icon(
              Icons.brightness_6,
            ),
          ),
          IconButton(
            onPressed: () {
              Provider.of<TodoProvider>(context, listen: false).queryClean();
            },
            icon: const Icon(
              Icons.refresh,
            ),
          ),
          IconButton(
            onPressed: () {
              Provider.of<TodoProvider>(context, listen: false).deleteAllTodos();
            },
            icon: const Icon(
              Icons.delete,
              color: Colors.red,
            ),
          ),
          IconButton(
            onPressed: () {
              Provider.of<TodoProvider>(context, listen: false).setIsDateDown(true);
            },
            icon: const Icon(
              Icons.arrow_drop_up,
            ),
          ),
          IconButton(
            
            onPressed: () {
              Provider.of<TodoProvider>(context, listen: false).setIsDateDown(false);
            },
            icon: const Icon(
              Icons.arrow_drop_down,
            ),
          ),
        ],
      ),
      body: const Column(
        children: [
          SizedBox(height: 15),
          SearchField(),
          SizedBox(height: 10),
          TodoDisplay(),
        ],
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          AnimatedNavigation.push(
            context: context,
            page: const CreateTodoScreen(),
          );
        },
        child: const Icon(Icons.add),
      ),
    );
  }
}

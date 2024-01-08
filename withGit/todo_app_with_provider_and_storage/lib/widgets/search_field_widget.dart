import 'package:flutter/material.dart';

import 'package:provider/provider.dart';
import '../providers/todo_provider.dart';

class SearchField extends StatelessWidget {
  const SearchField({super.key});

  @override
  Widget build(BuildContext context) {
    return TextField(
      onChanged: (query) {
        Provider.of<TodoProvider>(context, listen: false).setQueryField(query);
      },
      decoration: const InputDecoration(
        hintText: 'Search todos',
        prefixIcon: Icon(Icons.search),
      ),
    );
  }
}

import 'package:counter_with_provider/providers/counter_provider.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import '../widgets/counter_display.dart';
import '../widgets/counter_buttons.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Counter App'),
      ),
      body: const Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            CounterDisplay(),
            SizedBox(height: 30),
            CounterButtons(),
          ],
        ),
      ),
      floatingActionButton: IconButton(
        icon: const Icon(Icons.brightness_6),
        onPressed: () {
          Provider.of<CounterProvider>(context, listen: false).toggleTheme();
        },
      ),
    );
  }
}

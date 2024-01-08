import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import '../providers/counter_provider.dart';

class CounterButtons extends StatelessWidget {
  const CounterButtons({super.key});

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        FloatingActionButton(
          onPressed: () {
            Provider.of<CounterProvider>(context, listen: false).increment();
          },
          child: const Icon(Icons.add),
        ),
        const SizedBox(width: 20),
        FloatingActionButton(
          onPressed: () {
            Provider.of<CounterProvider>(context, listen: false).decrement();
          },
          child: const Icon(Icons.remove),
        ),
      ],
    );
  }
}

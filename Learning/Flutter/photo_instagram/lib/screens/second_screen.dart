import 'package:flutter/material.dart';

class SecondScreen extends StatelessWidget {
  final VoidCallback toggleScreen;

  SecondScreen(this.toggleScreen);

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Text('Screen 2 Content'),
          ElevatedButton(
            onPressed: () {
              toggleScreen();
            },
            child: Text('Go to Screen 1'),
          ),
        ],
      ),
    );
  }
}

import 'package:flutter/material.dart';

class FirstScreen extends StatelessWidget {
  final VoidCallback toggleScreen;

  FirstScreen(this.toggleScreen);

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Text('Screen 1 Content'),
          ElevatedButton(
            onPressed: () {
              toggleScreen();
            },
            child: Text('Go to Screen 2'),
          ),
        ],
      ),
    );
  }
}
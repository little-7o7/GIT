import 'package:flutter/material.dart';
import 'package:photo_instagram/screens/first_screen.dart';
import 'package:photo_instagram/screens/second_screen.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: CustomScreenTransition(),
    );
  }
}

class CustomScreenTransition extends StatefulWidget {
  @override
  _CustomScreenTransitionState createState() => _CustomScreenTransitionState();
}

class _CustomScreenTransitionState extends State<CustomScreenTransition> {
  bool showScreen1 = true;

  void toggleScreen() {
    setState(() {
      showScreen1 = !showScreen1;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Custom Screen Transition'),
      ),
      body: AnimatedSwitcher(
        duration: Duration(milliseconds: 500),
        child: showScreen1 ? FirstScreen(toggleScreen) : SecondScreen(toggleScreen),
        switchInCurve: Curves.easeIn,
        switchOutCurve: Curves.easeOut,
      ),
    );
  }
}
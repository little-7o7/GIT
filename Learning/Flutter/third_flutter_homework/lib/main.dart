import 'package:flutter/material.dart';
// ignore: depend_on_referenced_packages
import 'package:flutter_svg/flutter_svg.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Login Form',
      theme: ThemeData(
        colorScheme: const ColorScheme.dark(),
        useMaterial3: true,
      ),
      home: const HomePage(),
    );
  }
}

class HomePage extends StatelessWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    final Size screenSize = MediaQuery.of(context).size;

    return Scaffold(
      backgroundColor: const Color(0xff383838),
      body: Container(
        padding: const EdgeInsets.only(top: 70, left: 16, right: 16),
        width: screenSize.width,
        height: screenSize.height,
        child: Column(
          children: <Widget>[
            SvgPicture.asset(
              'assets/images/logo.svg',
            ),
            const SizedBox(
              height: 22,
            ),
            const Column(
              children: <Widget>[
                Text(
                  'Login',
                  style: TextStyle(
                    fontSize: 36,
                    fontWeight: FontWeight.w800,
                  ),
                ),
                Text(
                  'Please sign in to continue',
                  style: TextStyle(
                    fontSize: 13,
                    fontFamily: 'Open Sans',
                  ),
                ),
              ],
            ),
            const SizedBox(
              height: 40,
            ),

          ],
        ),
      ),
    );
  }
}

import 'package:Login_Page/secondPage.dart';
import 'package:flutter/material.dart';
// ignore: depend_on_referenced_packages
import 'package:flutter_svg/flutter_svg.dart';

import 'CustomAuthTextField.dart';

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
      initialRoute: '/',
      routes: {
        '/': (context) => const FirstScreen(),
        '/second': (context) => const SecondPage(),
      },
    );
  }
}

class FirstScreen extends StatelessWidget {
  const FirstScreen({super.key});

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
            CustomAuthTextField(
              hint: "Email",
              icon: Icons.email,
              onChanged: (value) {},
            ),
            const SizedBox(height: 30),
            CustomAuthTextField(
              hint: "Password",
              icon: Icons.lock,
              isPassword: true,
              onChanged: (value) {},
            ),
            Container(
              alignment: Alignment.centerRight,
              margin: const EdgeInsets.only(top: 5),
              child: TextButton(
                onPressed: () {},
                child: const Text(
                  'Forgot Password?',
                  style: TextStyle(
                    color: Color(0xffD87070),
                    fontSize: 14,
                    fontWeight: FontWeight.w600,
                  ),
                ),
              ),
            ),
            const SizedBox(height: 30),
            SizedBox(
              width: 200,
              height: 51,
              child: ElevatedButton(
                // style: style,
                style: ElevatedButton.styleFrom(
                  backgroundColor: const Color(0xffFF748C),
                ),
                onPressed: () {
                  Navigator.pushNamed(context, '/second');
                },
                child: const Text(
                  'Login',
                  style: TextStyle(
                    fontSize: 18,
                    fontWeight: FontWeight.w600,
                    color: Colors.white,
                  ),
                ),
              ),
            ),
            const SizedBox(height: 20),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                const Text('Don’t have an account?'),
                TextButton(
                  style: ButtonStyle(
                    padding: MaterialStateProperty.all(EdgeInsets.zero),
                  ),
                  onPressed: () {},
                  child: const Text(
                    'Sign Up',
                    style: TextStyle(
                      color: Color(0xffD87070),
                      fontSize: 14,
                      fontWeight: FontWeight.w800,
                    ),
                  ),
                ),
              ],
            ),
            const SizedBox(height: 20),
            const Text(
              'Or connect with',
              style: TextStyle(
                color: Color(0xff828282),
                fontSize: 13,
              ),
            ),
            const SizedBox(height: 25),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                InkWell(
                  onTap: () {},
                  child: Container(
                    height: 42,
                    decoration: const BoxDecoration(
                      shape: BoxShape.circle,
                    ),
                    child: Image.asset(
                      'assets/images/google.png',
                    ),
                  ),
                ),
                const SizedBox(width: 37),
                InkWell(
                  onTap: () {},
                  child: Container(
                    height: 42,
                    decoration: const BoxDecoration(
                      shape: BoxShape.circle,
                    ),
                    child: Image.asset(
                      'assets/images/facebook.png',
                    ),
                  ),
                ),
                const SizedBox(width: 37),
                InkWell(
                  onTap: () {},
                  child: Container(
                    height: 42,
                    decoration: const BoxDecoration(
                      shape: BoxShape.circle,
                    ),
                    child: Image.asset(
                      'assets/images/twitter.png',
                    ),
                  ),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
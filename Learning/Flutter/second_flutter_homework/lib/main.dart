import 'package:flutter/material.dart';
// ignore: depend_on_referenced_packages
import 'package:flutter_svg/flutter_svg.dart';
import 'package:second_flutter_homework/components/UserButton.dart';
// ignore: depend_on_referenced_packages
import 'package:google_fonts/google_fonts.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Second Homework',
      theme: ThemeData(
        useMaterial3: true,
        textTheme: GoogleFonts.nunitoTextTheme(),
      ),
      initialRoute: '/',
      routes: {
        '/': (context) => const FirstScreen(),
        '/second': (context) => const SecondScreen(),
      },
    );
  }
}

class FirstScreen extends StatelessWidget {
  const FirstScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final Size screenSize = MediaQuery.of(context).size;

    return MaterialApp(
      home: Scaffold(
        body: Center(
          child: Container(
            padding: const EdgeInsets.symmetric(horizontal: 30),
            width: screenSize.width,
            height: screenSize.height,
            decoration: const BoxDecoration(
              image: DecorationImage(
                image: AssetImage('assets/images/firstScBg.png'),
                fit: BoxFit.fitWidth,
                alignment: Alignment.topRight,
              ),
            ),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.end,
              children: <Widget>[
                Container(
                  alignment: Alignment.centerLeft,
                  child: SvgPicture.asset(
                    'assets/icons/firstScIcon.svg',
                  ),
                ),
                const SizedBox(
                  height: 22,
                ),
                const Text(
                  style: TextStyle(
                    fontSize: 28,
                    fontWeight: FontWeight.w700,
                    letterSpacing: 0.3,
                    height: 1.38,
                  ),
                  'Discover restaurants on the go',
                ),
                const SizedBox(height: 10),
                const Text(
                  style: TextStyle(
                      fontWeight: FontWeight.w400,
                      fontSize: 15,
                      letterSpacing: -0.2),
                  'You can instantly search, browse and buy or buy best restaurants all over',
                ),
                Container(
                  height: 44,
                  width: 350,
                  margin: const EdgeInsets.only(bottom: 50, top: 30),
                  child: ElevatedButton(
                    onPressed: () {
                      Navigator.pushNamed(context, '/second');
                    },
                    style: ElevatedButton.styleFrom(
                      backgroundColor: const Color(0xff0047B3),
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(2),
                      ),
                    ),
                    child: const Text('Next'),
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

class SecondScreen extends StatelessWidget {
  const SecondScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final Size screenSize = MediaQuery.of(context).size;

    return Scaffold(
      appBar: AppBar(
        automaticallyImplyLeading: false,
        centerTitle: false,
        backgroundColor: const Color(0xff45AAD6),
        title: const Row(
          children: <Widget>[
            Text(
              'Page title',
              style: TextStyle(
                fontFamily: 'Roboto',
                fontSize: 20,
                fontWeight: FontWeight.w500,
                color: Colors.white,
              ),
            ),
          ],
        ),
      ),
      body: Container(
        width: screenSize.width,
        margin: const EdgeInsets.only(
          top: 80,
          left: 17,
          right: 17,
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: <Widget>[
            const Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: <Widget>[
                Text(
                  'Sign in',
                  style: TextStyle(
                    fontFamily: 'Roboto',
                    fontSize: 36,
                    fontWeight: FontWeight.w500,
                  ),
                ),
                Text(
                  'welcome back, chose account',
                  style: TextStyle(
                    fontFamily: 'Roboto',
                    fontSize: 16,
                    fontWeight: FontWeight.w500,
                    color: Color(0xffB4B4B4),
                  ),
                ),
              ],
            ),
            const SizedBox(
              height: 40,
            ),
            Column(
              children: <Widget>[
                UserButton(
                    onPressed: () {},
                    name: 'little',
                    image: '',
                    notifications: 1,
                    color: const Color(0xff1765FF)),
                UserButton(
                    onPressed: () {},
                    name: 'little',
                    image: '',
                    notifications: 1,
                    color: const Color(0xff17C7FF)),
                UserButton(
                    onPressed: () {},
                    name: 'little',
                    image: '',
                    notifications: 1,
                    color: const Color(0xff0E00AE)),
                UserButton(
                    onPressed: () {},
                    name: 'little',
                    image: '',
                    notifications: 1,
                    color: const Color.fromRGBO(255, 0, 0, 0.67)),
              ],
            ),
          ],
        ),
      ),
    );
  }
}

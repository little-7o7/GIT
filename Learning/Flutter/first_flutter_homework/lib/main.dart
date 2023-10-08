import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'My Flutter App',
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
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: <Widget>[
              Row(
                children: <Widget>[
                  IconButton(
                    splashRadius: 27,
                    icon: const Icon(Icons.menu, size: 28),
                    onPressed: () => {},
                  ),
                  Container(
                    margin: const EdgeInsets.all(12),
                    child: const Text(
                      'Page title',
                      style: TextStyle(fontSize: 24),
                    ),
                  ),
                ],
              ),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: <Widget>[
                  IconButton(
                    splashRadius: 27,
                    icon: const Icon(Icons.notifications, size: 28),
                    onPressed: () => {},
                  ),
                  const SizedBox(width: 10),
                  IconButton(
                    splashRadius: 27,
                    icon: const Icon(Icons.share_sharp, size: 28),
                    onPressed: () => {},
                  ),
                  const SizedBox(width: 10),
                  IconButton(
                    splashRadius: 27,
                    icon: const Icon(Icons.search, size: 28),
                    onPressed: () => {},
                  ),
                ],
              ),
            ],
          ),
          centerTitle: false,
          backgroundColor: const Color(0xFF6200EE),
        ),
        body: Column(
          children: <Widget>[
            Container(
              padding: const EdgeInsets.symmetric(vertical: 30, horizontal: 60),
              child: Container(
                width: MediaQuery.of(context).size.width,
                height: 195,
                decoration: const BoxDecoration(
                  color: Color(0xffFF4444),
                  borderRadius: BorderRadius.all(
                    Radius.circular(10),
                  ),
                ),
              ),
            ),
            Container(
              padding: const EdgeInsets.symmetric(vertical: 0, horizontal: 5),
              child: Column(
                mainAxisSize: MainAxisSize.max,
                children: <Widget>[
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    mainAxisSize: MainAxisSize.max,
                    children: <Widget>[
                      Image.asset(
                        'assets/images/img_1.png',
                        width: 125,
                      ),
                      Image.asset(
                        'assets/images/img_1.png',
                        width: 125,
                      ),
                    ],
                  ),
                  const SizedBox(height: 10),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.end,
                    mainAxisSize: MainAxisSize.max,
                    children: <Widget>[
                      Image.asset(
                        'assets/images/img_1.png',
                        width: 125,
                      ),
                      const SizedBox(width: 5),
                      Image.asset(
                        'assets/images/img_1.png',
                        width: 125,
                      ),
                    ],
                  ),
                  const SizedBox(height: 10),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.start,
                    mainAxisSize: MainAxisSize.max,
                    children: <Widget>[
                      Image.asset(
                        'assets/images/img_1.png',
                        width: 125,
                      ),
                      const SizedBox(width: 5),
                      Image.asset(
                        'assets/images/img_1.png',
                        width: 125,
                      ),
                    ],
                  ),
                ],
              ),
            ),
            Container(
              padding: const EdgeInsets.symmetric(vertical: 20),
              child: const Text(
                "Lorem Ipsum is simply dummy text",
                style: TextStyle(fontSize: 14, fontWeight: FontWeight.bold),
              ),
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                IconButton(
                  splashRadius: 20,
                  icon: const Icon(
                    Icons.delete_outline,
                    size: 28,
                    color: Colors.red,
                  ),
                  onPressed: () => {},
                ),
                IconButton(
                  splashRadius: 20,
                  icon: const Icon(
                    Icons.delete_forever,
                    size: 28,
                    color: Colors.cyanAccent,
                  ),
                  onPressed: () => {},
                ),
                IconButton(
                  splashRadius: 20,
                  icon: const Icon(
                    Icons.delete,
                    size: 28,
                    color: Colors.black,
                  ),
                  onPressed: () => {},
                ),
              ],
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: <Widget>[
                IconButton(
                  splashRadius: 20,
                  icon: const Icon(
                    Icons.delete_outline,
                    size: 28,
                    color: Colors.red,
                  ),
                  onPressed: () => {},
                ),
                IconButton(
                  splashRadius: 20,
                  icon: const Icon(
                    Icons.delete_forever,
                    size: 28,
                    color: Colors.cyanAccent,
                  ),
                  onPressed: () => {},
                ),
                IconButton(
                  splashRadius: 20,
                  icon: const Icon(
                    Icons.delete,
                    size: 28,
                    color: Colors.black,
                  ),
                  onPressed: () => {},
                ),
              ],
            ),
          ],
        ),
        floatingActionButton: FloatingActionButton(
          onPressed: () {
            Navigator.pushNamed(context, '/second');
          },
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(12), // Set the shape (optional)
          ),
          backgroundColor: Colors.tealAccent,
          child: const Icon(
            Icons.add_shopping_cart,
            size: 30,
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
    return MaterialApp(
      home: Scaffold(
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              const Text(
                'Welcome',
                style: TextStyle(fontSize: 48, fontWeight: FontWeight.w700),
              ),
              Container(
                margin: const EdgeInsets.only(bottom: 24),
                width: 250,
                child: const Text(
                  'Find our perfect, healthy Fresh Juices & Smoothies',
                  textAlign: TextAlign.center,
                  style: TextStyle(fontSize: 20, fontWeight: FontWeight.w400),
                ),
              ),
              Image.asset(
                'assets/images/fruits.png',
                width: 377,
                height: 472,
              ),
              const SizedBox(height: 40),
              ElevatedButton(
                  onPressed: () {
                    Navigator.pushNamed(context, '/');
                  },
                  style: ElevatedButton.styleFrom(
                    backgroundColor: const Color(0xffFE7656),
                    minimumSize: const Size(300, 53),
                    shape: RoundedRectangleBorder(
                      borderRadius:
                          BorderRadius.circular(20.0), // Set the border radius
                    ),
                  ),
                  child: const Text(
                    'Let’s drink healthy!',
                    style: TextStyle(fontSize: 24, fontWeight: FontWeight.w400),
                  )),
            ],
          ),
        ),
      ),
    );
  }
}

import 'package:flutter/material.dart';
import 'package:epi_help/screens/contacts_screen.dart';
import 'package:epi_help/screens/add_contacts_screen.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        useMaterial3: true,
      ),
      initialRoute: '/contacts',
      routes: {
        '/contacts': (context) => const ContactsScreen(),
        '/add_contacts': (context) => const AddContactsScreen(),
      },
    );
  }
}
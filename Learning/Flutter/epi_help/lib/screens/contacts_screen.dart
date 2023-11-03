import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

import '../widgets/contact.dart';
import '../widgets/my_custom_button.dart';

class ContactsScreen extends StatelessWidget {
  const ContactsScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: SafeArea(
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 20),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            const SizedBox(height: 10),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: <Widget>[
                Text(
                  'Contacts',
                  style: GoogleFonts.nunito(
                    textStyle: const TextStyle(
                      fontSize: 28,
                      fontWeight: FontWeight.w800,
                    ),
                  ),
                ),
                MyCustomButton(
                  text: 'ADD CONTACT',
                  onTap: () {
                    Navigator.of(context).pushNamed('/add_contacts');
                  },
                ),
              ],
            ),
            const SizedBox(height: 30),
            const Column(
              children: <Widget>[
                Contact(
                  id: 1,
                  name: 'Mum',
                  avatar: 'https://i.pravatar.cc/100',
                  isActive: true,
                ),
                Contact(
                  id: 1,
                  name: 'Elis',
                  avatar: 'https://i.pravatar.cc/200',
                  isActive: false,
                ),
                Contact(
                  id: 1,
                  name: 'Dad ',
                  avatar: 'https://i.pravatar.cc/300',
                  isActive: true,
                ),
              ],
            ),
          ],
        ),
      ),
    ));
  }
}

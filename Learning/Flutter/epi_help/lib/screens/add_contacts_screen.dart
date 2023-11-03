import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

import '../widgets/my_custom_button.dart';
import '../widgets/my_custom_inputs.dart';

class AddContactsScreen extends StatelessWidget {
  const AddContactsScreen({super.key});

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
              crossAxisAlignment: CrossAxisAlignment.center,
              children: <Widget>[
                InkWell(
                  borderRadius: BorderRadius.circular(100),
                  onTap: () {
                    Navigator.pop(context);
                  },
                  child: Container(
                    width: 55,
                    height: 55,
                    decoration: BoxDecoration(
                      shape: BoxShape.circle,
                      border: Border.all(
                        color: const Color(0xffEBEAEC),
                        width: 1.0,
                      ),
                    ),
                    child: const Center(
                      child: Icon(
                        Icons.arrow_back_rounded,
                        size: 20,
                        color: Color(0xff3F414E),
                      ),
                    ),
                  ),
                ),
                MyCustomButton(
                  text: 'SAVE',
                  onTap: () {},
                ),
              ],
            ),
            const SizedBox(height: 15),
            const CircleAvatar(
              radius: 60,
              backgroundImage: NetworkImage('https://i.pravatar.cc/500'),
            ),
            const SizedBox(height: 30),
            const Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: <Widget>[
                MyCustomInputs(
                  placeholder: 'First name',
                  type: 'text',
                  size: 0.5,
                ),
                SizedBox(width: 30),
                MyCustomInputs(
                  placeholder: 'Last name',
                  type: 'text',
                  size: 0.5,
                ),
              ],
            ),
            const SizedBox(height: 40),
            const MyCustomInputs(
              placeholder: 'Disable contact',
              type: 'toggle',
              size: 1,
            ),
            const SizedBox(height: 5),
            const MyCustomInputs(
              placeholder: 'E-mail',
              type: 'text',
              size: 1,
            ),
            const SizedBox(height: 5),
            const MyCustomInputs(
              placeholder: 'Phone number',
              type: 'text',
              size: 1,
            ),
            const Spacer(),
            Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  'Alert Methods',
                  style: GoogleFonts.nunito(
                    textStyle: const TextStyle(
                      fontSize: 16,
                      color: Color(0xffA0A3B1),
                      fontWeight: FontWeight.w600,
                    ),
                  ),
                ),
                const SizedBox(height: 15),
                Row(
                  children: <Widget>[
                    MyCustomButton(
                      text: 'Text',
                      onTap: () {},
                      outlined: true,
                    ),
                    const SizedBox(width: 10),
                    MyCustomButton(
                      text: 'E-mail',
                      onTap: () {},
                      outlined: false,
                    ),
                  ],
                ),
                const SizedBox(height: 10),
                Row(
                  children: [
                    MyCustomButton(
                      text: 'Phone call',
                      onTap: () {},
                      outlined: false,
                    ),
                    const SizedBox(width: 10),
                    MyCustomButton(
                      text: 'Phone Call Retry Attempts',
                      onTap: () {},
                      outlined: true,
                      width: 210,
                    ),
                  ],
                ),
              ],
            ),
          ],
        ),
      )),
    );
  }
}

import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:flutter/cupertino.dart';

class MyCustomInputs extends StatelessWidget {
  final String placeholder;
  final double size;
  final String type;

  const MyCustomInputs({
    super.key,
    required this.placeholder,
    required this.type,
    this.size = 1,
  });

  @override
  Widget build(BuildContext context) {
    if (size == 1 && type == 'toggle') {
      return Container(
        padding: const EdgeInsets.only(bottom: 15),
        decoration: const BoxDecoration(
          border: Border(
            bottom: BorderSide(
              color: Color(0xffE6E4EA),
              width: 1.0,
            ),
          ),
        ),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: <Widget>[
            Text(
              placeholder,
              style: GoogleFonts.openSans(
                fontSize: 16,
                color: const Color(0xffA0A3B1),
                fontWeight: FontWeight.w600,
              ),
            ),
            const MyCupertinoToggle(),
          ],
        ),
      );
    } else if (size == 0.5 && type == 'text') {
      return Expanded(
        flex: 1,
        child: Container(
          decoration: const BoxDecoration(
            border: Border(
              bottom: BorderSide(
                color: Color(0xffE6E4EA),
                width: 1.0,
              ),
            ),
          ),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                placeholder,
                style: GoogleFonts.openSans(
                  fontSize: 16,
                  color: const Color(0xffA0A3B1),
                  fontWeight: FontWeight.w600,
                ),
              ),
              TextField(
                style: GoogleFonts.openSans(
                  fontSize: 16,
                  fontWeight: FontWeight.w700,
                  color: const Color(0xff070417),
                ),
                decoration: const InputDecoration(
                  border: InputBorder.none,
                ),
              ),
            ],
          ),
        ),
      );
    } else if (size == 1 && type == 'text') {
      return Container(
        padding: const EdgeInsets.only(bottom: 7),
        decoration: const BoxDecoration(
          border: Border(
            bottom: BorderSide(
              color: Color(0xffE6E4EA),
              width: 1.0,
            ),
          ),
        ),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: <Widget>[
            Text(
              placeholder,
              style: GoogleFonts.openSans(
                fontSize: 16,
                color: const Color(0xffA0A3B1),
                fontWeight: FontWeight.w600,
              ),
            ),
            SizedBox(
              width: 200,
              child: TextField(
                textDirection: TextDirection.rtl,
                style: GoogleFonts.openSans(
                  fontSize: 16,
                  fontWeight: FontWeight.w700,
                  color: const Color(0xff070417),
                ),
                decoration: const InputDecoration(
                  border: InputBorder.none,
                ),
              ),
            ),
          ],
        ),
      );
    }
    return const SizedBox();
  }
}

class MyCupertinoToggle extends StatefulWidget {
  const MyCupertinoToggle({super.key});

  @override
  _MyCupertinoToggleState createState() => _MyCupertinoToggleState();
}

class _MyCupertinoToggleState extends State<MyCupertinoToggle> {
  bool isToggled = false;

  @override
  Widget build(BuildContext context) {
    return Transform.scale(
      scale: 0.9, // Adjust the scale factor for desired size
      child: CupertinoSwitch(
        value: isToggled,
        onChanged: (value) {
          setState(() {
            isToggled = value;
          });
        },
      ),
    );
  }
}

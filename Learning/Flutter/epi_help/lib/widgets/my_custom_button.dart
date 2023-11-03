import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class MyCustomButton extends StatelessWidget {
  final String text;
  final bool outlined;
  final Color color;
  final double width;
  final VoidCallback? onTap;

  const MyCustomButton({
    super.key,
    required this.text,
    required this.onTap,
    this.color = const Color(0xff73D13D),
    this.outlined = false,
    this.width = 131,
  });

  @override
  Widget build(BuildContext context) {
    Color containerColor = outlined == false ? color : const Color(0xffffffff);
    Color borderColor = outlined == true ? color : const Color(0xffffffff);
    TextStyle textStyle = outlined
        ? GoogleFonts.openSans(
            fontSize: 14,
            color: Colors.black,
            fontWeight: FontWeight.w400,
          )
        : GoogleFonts.openSans(
            fontSize: 14,
            color: Colors.white,
            fontWeight: FontWeight.w800,
          );

    return InkWell(
      borderRadius: BorderRadius.circular(10),
      onTap: onTap,
      child: Container(
        width: width,
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(10),
          color: containerColor,
          border: Border.all(
            width: 1,
            color: borderColor,
          ),
        ),
        alignment: Alignment.center,
        height: 35,
        child: Text(
          text,
          style: GoogleFonts.nunito(
            textStyle: textStyle,
          ),
        ),
      ),
    );
  }
}

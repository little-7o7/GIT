import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:google_fonts/google_fonts.dart';

class BottomNavigationBarItemWidget extends StatelessWidget {
  final Function() onTap;
  final IconData icon;
  final String title;
  final bool isActive;
  const BottomNavigationBarItemWidget(
      {Key? key, required this.onTap, required this.icon, required this.title, required this.isActive})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () {
        onTap.call();
      },
      child: SizedBox(
        height: 58.h,
        width: 64.w,
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            SizedBox(
              height: 24.h,
              width: 24.w,
              child: Icon(icon,color: isActive ? Colors.black:const Color(0xffACB8C2),),
            ),
            Text(
              title,
              style: GoogleFonts.rubik(
                  textStyle:
                      TextStyle(fontSize: 14.sp, fontWeight: FontWeight.w400,
                      color: isActive ? Colors.black:const Color(0xffACB8C2))),
            )
          ],
        ),
      ),
    );
  }
}

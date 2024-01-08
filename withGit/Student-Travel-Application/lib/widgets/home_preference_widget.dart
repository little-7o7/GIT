import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:flutter_svg/svg.dart';
import 'package:google_fonts/google_fonts.dart';

import '../entity/category_entity.dart';

class HomePreferenceWidget extends StatelessWidget {
  final CategoryEntity entity;
  const HomePreferenceWidget({Key? key, required this.entity})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 158.w,
      height: 56.h,
      decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(16).r, color: entity.color),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          Container(width: 24, height: 24, child: SvgPicture.asset(entity.image)),
          SizedBox(
            width: 16.w,
          ),
          Text(entity.place,style: GoogleFonts.nunito(
            fontWeight: FontWeight.w800,
            fontSize: 14,
            color: Color(0xff656F77)
          ),),
        ],
      ),
    );
  }
}

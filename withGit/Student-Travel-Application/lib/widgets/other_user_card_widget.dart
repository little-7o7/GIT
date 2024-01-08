import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:google_fonts/google_fonts.dart';
import '../entity/others_user_entity.dart';

class OtherUserCardWidget extends StatelessWidget {
  final OtherUserEntity entity;
  const OtherUserCardWidget({Key? key, required this.entity}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 154,
      height: 248,
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(16),
        color: const Color(0xffFFFFFF)
      ),
      child: Column(
        children: [
          SizedBox(height: 40.h,),
          Container(
            width: 122,
              height: 126,
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(100),
              ),
              child: Image.asset(entity.avatar)),
          SizedBox(height: 34.h,),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceAround,
            children: [
              Text(entity.name,style: GoogleFonts.nunito(
                fontSize: 18,
                fontWeight: FontWeight.w800,
                color: const Color(0xff656F77)
              ),),
              Text(entity.cost,style: GoogleFonts.nunito(
                fontSize: 14,
                fontWeight: FontWeight.w400,
                color: const Color(0xff656F77)
              ),),
            ],
          )
        ],
      ),
    );
  }
}
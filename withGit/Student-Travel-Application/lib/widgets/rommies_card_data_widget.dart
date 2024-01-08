import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:google_fonts/google_fonts.dart';
import '../entity/rommies_entity.dart';

class RommiesCardDataWidget extends StatelessWidget {
  final RommmiesCardEntity entity;
  const RommiesCardDataWidget({Key? key, required this.entity}) : super(key: key);

  @override
  Widget build(BuildContext context) {

    return Container(
      child: Container(
        width: 343.w,
        height: 72.h,
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(8).r,
          color: Colors.white
        ),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          Container(
            width: 40.w,
            height: 40.h,
            padding: const EdgeInsets.all(4),
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(112.r),
              border: Border.all(color: const Color(0xffACB8C2),width: 1.w)
            ),
            child: Container(
              width: 32.w,
              height: 32.h,
              child: Image.asset(entity.avatar),
            ),
          ),
          Container(
            width: 247,
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(entity.name,style: GoogleFonts.nunito(
                    fontWeight: FontWeight.w800,
                    fontSize: 16.sp,
                    color: const Color(0xff000000)
                ),),
                Text(entity.country,style: GoogleFonts.nunito(
                    fontSize: 14.sp,
                    fontWeight: FontWeight.w400,
                    color: const Color(0xff656F77)
                ),)
              ],
            ),
          ),
        const  Icon(Icons.more_vert_outlined,color: Color(0xff656F77),),
        ],
        ),
      ),

    );
  }
}
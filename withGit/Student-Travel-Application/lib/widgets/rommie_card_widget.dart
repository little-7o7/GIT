import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:google_fonts/google_fonts.dart';
import '../entity/users_rommie_card_entity.dart';

class RommieCardWidget extends StatelessWidget {
  final UsersRommieCardEntity entity;
  const RommieCardWidget({Key? key, required this.entity}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: EdgeInsets.all(16),
      width: 240.w,
      height: 450.h,
      decoration: BoxDecoration(
        color: entity.color,
        borderRadius: BorderRadius.circular(16).r
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Container(
            width: 192.w,
            height: 181.h,
            child: Image.asset(entity.avatar),
          ),
          Text(entity.name,style: GoogleFonts.nunito(
            fontSize: 32.sp,
            fontWeight: FontWeight.w800
          ),),
          Text(entity.text,style: GoogleFonts.nunito(
            fontWeight: FontWeight.w400,
            fontSize: 16.sp,
            color: Color(0xff656F77)
          ),),
          SizedBox(height: 8.h,),
          Text(entity.data,style: GoogleFonts.nunito(
            fontSize: 14.sp,
            fontWeight: FontWeight.w800,
            color: Colors.black
          ),),
          SizedBox(height: 24.h,),
          Container(

            width: 208.w,
            height: 40.h,
            decoration: BoxDecoration(
              color: Colors.white,
              borderRadius: BorderRadius.circular(4),
              border: Border.all(color: Color(0xff191D21),width: 1.w)
            ),
            child: Center(
              child: Text("Connect with Lou",style: GoogleFonts.nunito(
                fontWeight: FontWeight.w600,
                fontSize: 16.sp,
              ),),
            ),
          )

        ],
      ),

    );
  }
}
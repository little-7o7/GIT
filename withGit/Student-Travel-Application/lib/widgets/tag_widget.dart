import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:student_travel_application/entity/tag_entity.dart';

class TagWidget extends StatelessWidget {
  final TagEntity tagEntity;
  const TagWidget({Key? key, required this.tagEntity}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(16).r,
        color: const Color(0xff191D21),
      ),
      child: Center(
        child: Padding(
          padding:
              const EdgeInsets.only(left: 16, right: 16, top: 8, bottom: 8).r,
          child: Row(
            children: [
              Text(
                "#${tagEntity.title}",
                style: GoogleFonts.nunito(
                    textStyle: TextStyle(
                        fontWeight: FontWeight.w800,
                        fontSize: 14.sp,
                        color: Colors.white)),
              ),
              SizedBox(width: 4.w),
              SizedBox(
                height: 16.h,
                width: 16.w,
                child: const Center(
                    child: Icon(
                  Icons.close,
                  color: Colors.white,
                  size: 16,
                )),
              )
            ],
          ),
        ),
      ),
    );
  }
}

import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:google_fonts/google_fonts.dart';
import '../entity/trips_entity.dart';

class TripsEntityWidgets extends StatelessWidget {
  final TripsEntity entity;
  const TripsEntityWidgets({Key? key, required this.entity}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 343.w,

    decoration: BoxDecoration(boxShadow: [
        BoxShadow(
          blurRadius: 16.r,
          color: Colors.black.withOpacity(0.12),
          offset: const Offset(0, 8),
        )
      ]),
      child: Center(
        child: Container(
          // height: 277.5.h,
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(16),
            color: const Color(0xffCBE3FF),
          ),
          child: Column(
            children: [
              Container(child: Image.asset(entity.image)),
              SizedBox(
                height: 16.h,
              ),
              Container(
                padding: const EdgeInsets.only(left: 16),
                width: 343.w,
                height: 86.h,
                decoration: BoxDecoration(
                    color: Colors.white,
                    borderRadius: BorderRadius.only(
                        bottomLeft: const Radius.circular(8).r,
                        bottomRight: const Radius.circular(8).r)),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    SizedBox(
                      height: 16.h,
                    ),
                    Text(
                      entity.title,
                      style: GoogleFonts.nunito(
                          fontWeight: FontWeight.w400,
                          fontSize: 14.sp,
                          color: const Color(0xff656F77)),
                    ),
                    Text(
                      entity.location,
                      style: GoogleFonts.nunito(
                        fontSize: 24.sp,
                        fontWeight: FontWeight.w800,
                      ),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

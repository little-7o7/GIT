import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:student_travel_application/core/utils/assets.dart';

import 'on_boarding_two_screen.dart';

class OnBoardingScreen extends StatelessWidget {
  const OnBoardingScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Center(
          child: SizedBox(
            width: 343.w,
            child: Column(
              mainAxisAlignment: MainAxisAlignment.start,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                Image.asset(Assets.tAva),
                Text(
                  'Find a Roomie',
                  style: GoogleFonts.nunito(
                    textStyle: TextStyle(
                      fontSize: 32.sp,
                      fontWeight: FontWeight.w800,
                    ),
                  ),
                ),
                const SizedBox(height: 16),
                SizedBox(
                  width: 343,
                  child: Text(
                    'We\'ve helped millions across the nation find their perfect match... and you\'re next ',
                    textAlign: TextAlign.center,
                    style: GoogleFonts.nunito(
                      textStyle: TextStyle(
                        fontSize: 16.sp,
                        fontWeight: FontWeight.w400,
                        color: const Color(0xff656F77),
                      ),
                    ),
                  ),
                ),
                SizedBox(height: 120.h),
                Padding(
                  padding: const EdgeInsets.only(
                    left: 16,
                    right: 16,
                  ),
                  child: Row(
                    children: [
                      Container(
                        width: 147.5.w,
                        height: 56.1.h,
                        padding: const EdgeInsets.only(left: 55, top: 10),
                        decoration: BoxDecoration(
                            borderRadius: BorderRadius.circular(4).r,
                            border: Border.all(
                              color: const Color(0xff191D21),
                              width: 1,
                            )),
                        child: GestureDetector(
                          onTap: () {},
                          child: Text(
                            'Skip',
                            style: GoogleFonts.nunito(
                              textStyle: TextStyle(
                                  fontSize: 23.sp,
                                  fontWeight: FontWeight.w600,
                                  color: const Color(0xff191D21)),
                            ),
                          ),
                        ),
                      ),
                      SizedBox(width: 16.w),
                      InkWell(
                        onTap: () {
                          Navigator.push(
                            context,
                            MaterialPageRoute(
                              builder: (context) => OnBoardingTwoScreen(),
                            ),
                          );
                        },
                        child: Ink(
                          height: 56.1.h,
                          width: 147.5.w,
                          padding: const EdgeInsets.only(left: 50, top: 10),
                          decoration: BoxDecoration(
                            borderRadius: BorderRadius.circular(4).r,
                            color: const Color(0xff191D21),
                            border: Border.all(
                                color: const Color(0xff191D21), width: 1.w),
                          ),
                          child: Text(
                            'Next',
                            style: GoogleFonts.nunito(
                              textStyle: TextStyle(
                                fontSize: 23.sp,
                                fontWeight: FontWeight.w600,
                                color: const Color(0xffFFFFFF),
                              ),
                            ),
                          ),
                        ),
                      ),
                    ],
                  ),
                )
              ],
            ),
          ),
        ),
      ),
    );
  }
}

import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:student_travel_application/core/utils/assets.dart';
import 'package:student_travel_application/screens/login_screen.dart';

class OnBoardingTwoScreen extends StatelessWidget {
  const OnBoardingTwoScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xffCBE3FF),
      body: SafeArea(
        child: SizedBox(
          height: MediaQuery.of(context).size.height,
          width: MediaQuery.of(context).size.width,
          child: Padding(
            padding: const EdgeInsets.only(left: 16, right: 16).r,
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  'Find the Perfect Rommate',
                  style: GoogleFonts.nunito(
                      textStyle: TextStyle(
                    fontSize: 32.sp,
                    fontWeight: FontWeight.w800,
                  )),
                ),
                Text(
                  'We\'ve helped millions across the nation find their perfect match... and you\'re next',
                  style: GoogleFonts.nunito(
                    textStyle: TextStyle(
                      fontSize: 16.sp,
                      fontWeight: FontWeight.w400,
                      color: const Color(0xff656F77),
                    ),
                  ),
                ),
                SizedBox(height: 20.h),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Container(
                      decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(4).r,
                        color: const Color(0xff191D21),
                      ),
                      child: InkWell(
                        onTap: () {},
                        child: Ink(
                          height: 40.h,
                          width: 163.5.w,
                          padding: const EdgeInsets.only(
                            left: 61,
                            top: 8.5,
                          ),
                          child: Text(
                            'Explore',
                            style: GoogleFonts.nunito(
                              textStyle: TextStyle(
                                fontSize: 16.sp,
                                fontWeight: FontWeight.w600,
                                color: const Color(0xffFFFFFF),
                              ),
                            ),
                          ),
                        ),
                      ),
                    ),
                    Container(
                      decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(4).r,
                        color: const Color(0xffFFFFFF),
                        border: Border.all(
                          width: 1,
                          color: const Color(0xff191D21),
                        ),
                      ),
                      child: InkWell(
                        onTap: () {
                          Navigator.push(
                            context,
                            MaterialPageRoute(
                              builder: (context) => const SigningAccount(),
                            ),
                          );
                        },
                        child: Ink(
                          height: 40.h,
                          width: 163.5.w,
                          padding: const EdgeInsets.only(),
                          child: Row(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: [
                              Text(
                                'Log in',
                                style: GoogleFonts.nunito(
                                    textStyle: TextStyle(
                                        fontSize: 16.sp,
                                        fontWeight: FontWeight.w600,
                                        color: const Color(0xff191D21),),),
                              ),
                              const Icon(Icons.keyboard_arrow_down_rounded)
                            ],
                          ),
                        ),
                      ),
                    )
                  ],
                ),
                SizedBox(height: 65.h),
                Image.asset(Assets.tStanding)
              ],
            ),
          ),
        ),
      ),
    );
  }
}

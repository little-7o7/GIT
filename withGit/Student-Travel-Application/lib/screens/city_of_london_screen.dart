import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:flutter_svg/svg.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:student_travel_application/core/utils/assets.dart';

class CityOfLondonScreen extends StatefulWidget {
  const CityOfLondonScreen({Key? key}) : super(key: key);

  @override
  State<CityOfLondonScreen> createState() => _CityOfLondonScreenState();
}

class _CityOfLondonScreenState extends State<CityOfLondonScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.only(left: 16, right: 16).r,
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            //mainAxisSize: MainAxisSize.max,
            //mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Container(
                height: 280.h,
                width: 343.w,
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(8).r,
                  color: const Color(0xffFFDBF5),
                ),
                child: Image.asset(Assets.tCityOfLondon),
              ),
              SizedBox(height: 24.h),
              Text(
                "City of London",
                style: GoogleFonts.nunito(
                  textStyle: TextStyle(
                    fontWeight: FontWeight.w800,
                    fontSize: 32.sp,
                  ),
                ),
              ),
              SizedBox(height: 12.h),
              Row(
                children: [
                  SizedBox(
                    height: 24.h,
                    width: 24.w,
                    child: Center(
                      child: SvgPicture.asset(Assets.tLocationIcon),
                    ),
                  ),
                  SizedBox(width: 8.w),
                  Text(
                    "Unlimited downloads",
                    style: GoogleFonts.nunito(
                        textStyle: TextStyle(
                            fontSize: 16.sp, fontWeight: FontWeight.w400)),
                  )
                ],
              ),
              SizedBox(height: 8.h),
              Row(
                children: [
                  SizedBox(
                    height: 24.h,
                    width: 24.w,
                    child: Center(
                      child: SvgPicture.asset(Assets.tMuseumIcon),
                    ),
                  ),
                  SizedBox(width: 8.w),
                  Text(
                    "Unlimited downloads",
                    style: GoogleFonts.nunito(
                        textStyle: TextStyle(
                            fontSize: 16.sp, fontWeight: FontWeight.w400)),
                  )
                ],
              ),
              SizedBox(height: 8.h),
              Row(
                children: [
                  SizedBox(
                    height: 24.h,
                    width: 24.w,
                    child: Center(
                      child: SvgPicture.asset(Assets.tLikeIcon),
                    ),
                  ),
                  SizedBox(width: 8.w),
                  Text(
                    "Unlimited downloads",
                    style: GoogleFonts.nunito(
                        textStyle: TextStyle(
                            fontSize: 16.sp, fontWeight: FontWeight.w400)),
                  )
                ],
              ),
              SizedBox(height: 8.h),
              Row(
                children: [
                  SizedBox(
                    height: 24.h,
                    width: 24.w,
                    child: Center(
                      child: SvgPicture.asset(Assets.tPhotoIcon),
                    ),
                  ),
                  SizedBox(width: 8.w),
                  Text(
                    "Unlimited downloads",
                    style: GoogleFonts.nunito(
                        textStyle: TextStyle(
                            fontSize: 16.sp, fontWeight: FontWeight.w400)),
                  )
                ],
              ),
              SizedBox(height: 8.h),
              Row(
                children: [
                  SizedBox(
                    height: 24.h,
                    width: 24.w,
                    child: Center(
                      child: SvgPicture.asset(Assets.tFaceIcon),
                    ),
                  ),
                  SizedBox(width: 8.w),
                  Text(
                    "Unlimited downloads",
                    style: GoogleFonts.nunito(
                        textStyle: TextStyle(
                            fontSize: 16.sp, fontWeight: FontWeight.w400)),
                  )
                ],
              ),
              SizedBox(height: 12.h),
              SizedBox(
                height: 120.h,
                width: 327.w,
                child: Text(
                  "Hey you, looking for a roommate? We've helped millions across the nation find their perfect match... and you're next! Hey you, looking for a roommate? We've helped millions across the nation find their perfect match... and you're next!",
                  style: GoogleFonts.inter(
                      textStyle: const TextStyle(
                    height: 1.8,
                    fontWeight: FontWeight.w400,
                    fontSize: 14,
                    color: Color(0xff656F77),
                  )),
                ),
              ),
              SizedBox(height: 16.h),
              Container(
                decoration: BoxDecoration(
                    color: const Color(0xffFFDBF5),
                    borderRadius: BorderRadius.circular(8).w),
                child: Padding(
                  padding: const EdgeInsets.only(
                          left: 8, right: 8, bottom: 4, top: 8)
                      .r,
                  child: Row(
                    children: [
                      Container(
                        height: 40.h,
                        width: 40.w,
                        decoration: BoxDecoration(
                          border: Border.all(width: 1, color: Colors.grey),
                          borderRadius: BorderRadius.circular(100).w,
                          color: Colors.tealAccent.withOpacity(0.2),
                        ),
                        child: Center(
                          child: Container(
                              height: 32.h,
                              width: 32.w,
                              decoration: BoxDecoration(
                                borderRadius: BorderRadius.circular(100),
                              ),
                              child: Image.asset(
                                Assets.tAvatarGirlIcon,
                                fit: BoxFit.cover,
                              )),
                        ),
                      ),
                      SizedBox(width: 8.w),
                      Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        mainAxisSize: MainAxisSize.min,
                        children: [
                          Text(
                            "Title",
                            style: GoogleFonts.nunito(
                                textStyle: TextStyle(
                                    fontSize: 16.sp,
                                    fontWeight: FontWeight.w800)),
                          ),
                          Text(
                            "Label",
                            style: GoogleFonts.nunito(
                                textStyle: TextStyle(
                                    fontWeight: FontWeight.w400,
                                    fontSize: 14.sp)),
                          ),
                        ],
                      ),
                      SizedBox(width: 150.w),
                      SizedBox(
                        height: 24.h,
                        width: 24.w,
                        child: Center(
                          child: SvgPicture.asset(
                            Assets.tLikeIcon,
                            color: const Color(0xff656F77),
                          ),
                        ),
                      ),
                      SizedBox(width: 8.w),
                      SizedBox(
                        height: 24.h,
                        width: 24.w,
                        child: Center(
                          child: SvgPicture.asset(Assets.tSendIcon),
                        ),
                      ),
                      SizedBox(width: 8.w),
                      SizedBox(
                        height: 24.h,
                        width: 24.w,
                        child: Center(
                          child: SvgPicture.asset(Assets.tMoreVerticalIcon),
                        ),
                      ),
                    ],
                  ),
                ),
              )
            ],
          ),
        ),
      ),
    );
  }
}

import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:student_travel_application/core/utils/assets.dart';
import 'package:student_travel_application/widgets/tag_widget.dart';

import '../entity/tag_entity.dart';

class CampingInLaScreen extends StatefulWidget {
  const CampingInLaScreen({Key? key}) : super(key: key);

  @override
  State<CampingInLaScreen> createState() => _CampingInLaScreenState();
}

class _CampingInLaScreenState extends State<CampingInLaScreen> {
  List<TagEntity> listOfTag = [
    const TagEntity(title: "Mountains"),
    const TagEntity(title: "PetFriendly"),
    const TagEntity(title: "Relax"),
    const TagEntity(title: "Easy"),
    const TagEntity(title: ("Relax"))
  ];
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        bottom: false,
        child: Container(
          height: MediaQuery.of(context).size.height,
          width: MediaQuery.of(context).size.width,
          color: const Color(0xff191D21),
          child: Column(
            children: [
              Container(
                height: 692.h,
                decoration: BoxDecoration(
                    color: Colors.white,
                    borderRadius: BorderRadius.only(
                        bottomLeft: const Radius.circular(20).r,
                        bottomRight: const Radius.circular(20).r,),),
                child: Padding(
                  padding: const EdgeInsets.only(left: 16, bottom: 16).r,
                  child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        SizedBox(height: 16.h),
                        IconButton(
                            onPressed: () {
                              Navigator.pop(context);
                            },
                            icon: const Icon(Icons.arrow_back_ios_rounded)),
                        SizedBox(height: 16.h),
                        SizedBox(
                          height: 260.h,
                          width: 347.w,
                          child: Image.asset(Assets.tCampingImage,
                              fit: BoxFit.fill),
                        ),
                        SizedBox(height: 24.h),
                        Text(
                          "Camping in L.A.",
                          style: GoogleFonts.nunito(
                              textStyle: TextStyle(
                            fontWeight: FontWeight.w800,
                            fontSize: 32.sp,
                          )),
                        ),
                        SizedBox(height: 12.h),
                        Text(
                          "Los Angels, USA - 3 weeks",
                          style: GoogleFonts.nunito(
                              textStyle: TextStyle(
                                  fontSize: 16.sp,
                                  fontWeight: FontWeight.w800)),
                        ),
                        SizedBox(height: 12.h),
                        Text(
                          "Hey you, looking for a roommate? We've helped millions across the nation find their perfect match... and you're next! Hey you, looking for a roommate? We've helped millions across the nation find their perfect match... and you're next!",
                          style: GoogleFonts.nunito(
                              textStyle: TextStyle(
                                  fontWeight: FontWeight.w400,
                                  fontSize: 14.sp,
                                  color: const Color(0xff656F77))),
                        ),
                        SizedBox(height: 20.h),
                        Text(
                          "Tags",
                          style: GoogleFonts.nunito(
                              textStyle: TextStyle(
                                  fontSize: 16.sp,
                                  fontWeight: FontWeight.w800)),
                        ),
                        SizedBox(height: 12.h),
                        SingleChildScrollView(
                          scrollDirection: Axis.horizontal,
                          child: Row(
                            children: [
                              ...List.generate(
                                  listOfTag.length,
                                  (index) => Padding(
                                        padding:
                                            const EdgeInsets.only(right: 8).r,
                                        child: TagWidget(
                                            tagEntity: listOfTag[index]),
                                      ))
                            ],
                          ),
                        )
                      ]),
                ),
              ),
              TextButton(
                  onPressed: () {},
                  child: Text(
                    "Select Date",
                    style: GoogleFonts.nunito(
                      textStyle: TextStyle(
                          color: Colors.white,
                          fontSize: 18.sp,
                          fontWeight: FontWeight.w800),
                    ),
                  ))
            ],
          ),
        ),
      ),
    );
  }
}

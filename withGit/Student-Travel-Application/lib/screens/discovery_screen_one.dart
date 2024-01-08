import 'package:flutter/material.dart';
import 'package:flutter_keyboard_visibility/flutter_keyboard_visibility.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:student_travel_application/widgets/trips_category_widgets.dart';
import 'package:student_travel_application/entity/trips_entity.dart';
import 'package:student_travel_application/widgets/trips_widgets.dart';
import '../core/utils/assets.dart';
import '../entity/trips_category_entity.dart';

class DiscoveryScreenOneScreen extends StatefulWidget {
  const DiscoveryScreenOneScreen({super.key});

  @override
  State<DiscoveryScreenOneScreen> createState() =>
      _DiscoveryScreenOneScreenState();
}

class _DiscoveryScreenOneScreenState extends State<DiscoveryScreenOneScreen> {
  List<TripsCategoryEntity> listEntity = [
    TripsCategoryEntity(
      color: const Color(0xffCBE3FF),
      image: Assets.tCamPhoto,
    ),
    TripsCategoryEntity(
      color: const Color(0xffECDDFF),
      image: Assets.tHeartIcon,
    ),
    TripsCategoryEntity(
      color: const Color(0xffFFDBF5),
      image: Assets.tMountainIcon,
    ),
    TripsCategoryEntity(
      color: const Color(0xffFFF2AE),
      image: Assets.tAvaUsersFace,
    ),
    TripsCategoryEntity(
      color: const Color(0xffECDDFF),
      image: Assets.tHeartIcon,
    ),
    TripsCategoryEntity(
      color: const Color(0xffCBE3FF),
      image: Assets.tCamPhoto,
    ),
  ];

  List<TripsEntity> listEntityTrip = [
    TripsEntity(
        image: Assets.tDiscoveryImageTwo,
        title: "USA, Los Angeles - 2 Weeks",
        location: "City of Los Angeles"),
    TripsEntity(
        image: Assets.tDiscoveryImageTwo,
        title: "USA, Los Angeles - 2 Weeks",
        location: "City of Los Angeles"),
    TripsEntity(
        image: Assets.tDiscoveryImageTwo,
        title: "USA, Los Angeles - 2 Weeks",
        location: "City of Los Angeles"),
    TripsEntity(
        image: Assets.tDiscoveryImageTwo,
        title: "USA, Los Angeles - 2 Weeks",
        location: "City of Los Angeles"),
  ];

  @override
  Widget build(BuildContext context) {
    return KeyboardDismissOnTap(
      child: Scaffold(
        body: SafeArea(
          child: Column(
            children: [
              Padding(
                padding: EdgeInsets.symmetric(horizontal: 16.w),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    SizedBox(
                      width: 295.w,
                      height: 40.h,
                      child: TextFormField(
                        decoration: InputDecoration(
                          hintText: "Search",
                          contentPadding: EdgeInsets.zero,
                          prefixIcon: const Icon(Icons.search_rounded,
                              color: Color(0xff656F77)),
                          border: OutlineInputBorder(
                            borderRadius: BorderRadius.circular(4).r,
                            borderSide: BorderSide(
                              width: 1.w,
                              color: const Color(0xffACB8C2),
                            ),
                          ),
                        ),
                      ),
                    ),
                    SizedBox(
                      width: 32.w,
                      height: 32.h,
                      child: Image.asset(Assets.tNomadsAva),
                    )
                  ],
                ),
              ),
              SizedBox(height: 16.h),
              Container(
                alignment: Alignment.centerLeft,
                padding: const EdgeInsets.only(left: 16),
                child: Text(
                  "Upcoming meetups",
                  style: GoogleFonts.nunito(
                      fontSize: 32.sp, fontWeight: FontWeight.w800),
                ),
              ),
              SizedBox(height: 16.h),
              SingleChildScrollView(
                scrollDirection: Axis.horizontal,
                child: Row(
                  children: [
                    ...List.generate(
                      listEntity.length,
                      (index) => Padding(
                          padding: EdgeInsets.only(left: 16.w),
                          child: TripsCategoryWidgets(
                            entity: listEntity[index],
                            onTap: () {},
                          )),
                    )
                  ],
                ),
              ),
              SizedBox(height: 16.h),
              Expanded(
                child: ListView.builder(
                  itemBuilder: (context, index) {
                    return Padding(
                      padding: const EdgeInsets.only(bottom: 16),
                      child: TripsEntityWidgets(entity: listEntityTrip[index]),
                    );
                  },
                  itemCount: listEntityTrip.length,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

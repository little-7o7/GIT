import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:google_fonts/google_fonts.dart';
import '../core/utils/assets.dart';
import '../entity/category_entity.dart';
import '../entity/users_rommie_card_entity.dart';
import '../widgets/home_preference_widget.dart';
import '../widgets/rommie_card_widget.dart';

class DiscoveryScreenTwoScreen extends StatefulWidget {
  const DiscoveryScreenTwoScreen({super.key});

  @override
  State<DiscoveryScreenTwoScreen> createState() =>
      _DiscoveryScreenTwoScreenState();
}

class _DiscoveryScreenTwoScreenState extends State<DiscoveryScreenTwoScreen> {
  @override
  Widget build(BuildContext context) {
    List<UsersRommieCardEntity> listEntityRommie = [
      UsersRommieCardEntity(
        avatar: Assets.tAvatarLouSmith,
        name: 'Lou Smith',
        text:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet.',
        data: '2 weeks',
        color: const Color(0xffCFFFF6)
      ),
      UsersRommieCardEntity(
        avatar: Assets.tAvatarLouSmith,
        name: 'Lou Smith',
        text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet.',
        data: '2 weeks',
        color: const Color(0xffFFF2AE),
      ),
      UsersRommieCardEntity(
        avatar: Assets.tAvatarLouSmith,
        name: 'Lou Smith',
        text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet.',
        data: '2 weeks', color: const Color(0xffCFFFF6),
      ),
      UsersRommieCardEntity(
        avatar: Assets.tAvatarLouSmith,
        name: 'Lou Smith',
        text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet.',
        data: '2 weeks', color: const Color(0xffCBE3FF),
      ),
    ];
    List<CategoryEntity> listEntityPreference = [
      CategoryEntity(
          image: Assets.tMountainIcon,
          place: 'Mountains',
          color: const Color(0xffFFE3D2,)
      ),
      CategoryEntity(
          image: Assets.tMuseumIcon,
          place: 'City',
          color: const Color(0xffFFF2AE,)
      ),
      CategoryEntity(
          image: Assets.tMountainIcon,
          place: 'Museum',
          color: const Color(0xffCFFFF6,)
      ),
      CategoryEntity(
          image: Assets.tMuseumIcon,
          place: 'Mountains',
          color: const Color(0xffFFE3D2,)
      ),
    ];
    return Scaffold(
      body: SingleChildScrollView(
        child: Center(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              SizedBox(
                height: 60.h,
              ),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceAround,
                children: [
                  Text(
                    "Find Your Perfect\nRommie",
                    style: GoogleFonts.nunito(
                      fontWeight: FontWeight.w800,
                      fontSize: 32.sp,
                    ),
                  ),
                  SizedBox(
                      height: 56.h,
                      width: 24.w,
                      child: const Icon(
                        Icons.more_vert_rounded,
                        color: Color(0xff656F77),
                      )),
                ],
              ),
              SizedBox(height: 16.h),
              SingleChildScrollView(
                scrollDirection: Axis.horizontal,
                child: Row(
                  children: [
                    ...List.generate(
                        listEntityRommie.length,
                        (index) => Padding(
                              padding: EdgeInsets.only(left: 16.w),
                              child: RommieCardWidget(
                                  entity: listEntityRommie[index]),
                            ))
                  ],
                ),
              ),
              SizedBox(height: 24.h,),
              Container(
                padding: EdgeInsets.only(left: 20.w),
                child: Text("Home Preference",style: GoogleFonts.nunito(
                  fontSize: 16,
                  fontWeight: FontWeight.w600,
                ),),
              ),
              SizedBox(height: 24.h,),
              SingleChildScrollView(
                scrollDirection: Axis.horizontal,
                child: Row(
                  children: [
                    ...List.generate(
                        listEntityPreference.length,
                            (index) => Padding(
                          padding: EdgeInsets.only(left: 16.w),
                          child: HomePreferenceWidget(
                              entity: listEntityPreference[index]),
                        ))
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

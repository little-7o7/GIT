import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:student_travel_application/core/utils/assets.dart';
import 'package:student_travel_application/screens/favorites_section_first_screen.dart';
import '../entity/others_user_entity.dart';
import '../entity/rommies_entity.dart';
import '../widgets/other_user_card_widget.dart';
import '../widgets/rommies_card_data_widget.dart';

class DiscoveryScreenThree extends StatefulWidget {
  const DiscoveryScreenThree({super.key});

  @override
  State<DiscoveryScreenThree> createState() => _DiscoveryScreenThreeState();
}

class _DiscoveryScreenThreeState extends State<DiscoveryScreenThree> {
  List<RommmiesCardEntity> listCardEntity = [
    RommmiesCardEntity(
        avatar: Assets.tDiscoveryAvaNomads,
        name: "Courtney Henry",
        country: 'Viet Nam'),
    RommmiesCardEntity(
        avatar: Assets.tNomadsAvaFour,
        name: "Jenny Wilson",
        country: 'Algeria'),
    RommmiesCardEntity(
        avatar: Assets.tNomadsAvaThree,
        name: "Brooklyn Simmons",
        country: 'Åland Islands'),
  ];
  List<OtherUserEntity> lisUsersEntity = [
    OtherUserEntity(avatar: Assets.tAvatarLouSmith, name: "Gary", cost: "#500"),
    OtherUserEntity(
        avatar: Assets.tNomadsAvaThree, name: "Sassa", cost: "#500"),
    OtherUserEntity(avatar: Assets.tNomadsAvaFour, name: "Jessi", cost: "#500"),
    OtherUserEntity(avatar: Assets.tNomadsAva, name: "Simon", cost: "#500"),
  ];
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xffE8EEF3),
      body: Center(
        child: Column(
          children: [
            SizedBox(
              height: 60.h,
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceAround,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                Text(
                  "Your Roomies",
                  style: GoogleFonts.nunito(
                      fontSize: 32, fontWeight: FontWeight.w800),
                ),
                SizedBox(
                  width: 10.w,
                ),
                Row(
                  children: [
                    const Icon(Icons.search_rounded, color: Color(0xff656F77)),
                    SizedBox(
                      width: 16.w,
                    ),
                    GestureDetector(
                      onTap: () {
                        Navigator.push(
                            context,
                            MaterialPageRoute(
                              builder: (context) =>
                                  const FavoritesSectionFirstScreen(),
                            ));
                      },
                      child: const Icon(
                        Icons.star,
                        color: Color(0xff656F77),
                      ),
                    )
                  ],
                )
              ],
            ),
            Column(
              children: [
                ...List.generate(
                    listCardEntity.length,
                    (index) => Padding(
                        padding: EdgeInsets.only(top: 16.h),
                        child: RommiesCardDataWidget(
                          entity: listCardEntity[index],
                        )))
              ],
            ),
            SizedBox(
              height: 24.h,
            ),
            Row(mainAxisAlignment: MainAxisAlignment.start, children: [
              Container(
                padding: const EdgeInsets.only(left: 16),
                child: Text(
                  "Other Matches",
                  style: GoogleFonts.nunito(
                      fontWeight: FontWeight.w800,
                      fontSize: 32.sp,
                      color: const Color(0xff191D21)),
                ),
              ),
            ]),
            SizedBox(
              height: 10.h,
            ),
            SingleChildScrollView(
              scrollDirection: Axis.horizontal,
              child: Row(
                children: [
                  ...List.generate(
                      lisUsersEntity.length,
                      (index) => Padding(
                            padding: const EdgeInsets.only(left: 16),
                            child: OtherUserCardWidget(
                                entity: lisUsersEntity[index]),
                          ))
                ],
              ),
            )
          ],
        ),
      ),
    );
  }
}

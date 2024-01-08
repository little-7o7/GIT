import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:student_travel_application/core/utils/assets.dart';
import 'package:student_travel_application/screens/favorites_section_second_screen.dart';
import 'package:student_travel_application/widgets/favorites_section_first_screen_adv.dart';
import 'package:student_travel_application/widgets/favorites_section_first_screen_cells_widget.dart';
import 'package:student_travel_application/widgets/favorites_top_custom_icon_button.dart';
import 'package:student_travel_application/entity/favorites_section_adv_entity.dart';
import 'package:student_travel_application/entity/favorites_section_cells_entity.dart';

class FavoritesSectionFirstScreen extends StatefulWidget {
  static route() =>
      MaterialPageRoute(builder: (_) => const FavoritesSectionFirstScreen());
  const FavoritesSectionFirstScreen({super.key});

  @override
  State<FavoritesSectionFirstScreen> createState() =>
      _FavoritesSectionFirstScreenState();
}

class _FavoritesSectionFirstScreenState
    extends State<FavoritesSectionFirstScreen> {
  FavoritesSectionFirstScreenAdvEntity advEntity =
      FavoritesSectionFirstScreenAdvEntity(
    image: Assets.FavoritesSectionFirstScreenAdvImage,
    title: 'Italy',
    description: 'Meet new roomies and find new adventures.',
  );

  final List<FavoritesSectionFirstScreenCellsEntity> cellsList = [
    FavoritesSectionFirstScreenCellsEntity(
      title: 'Summer Roomies',
      subtitle: 'Caribbean',
    ),
    FavoritesSectionFirstScreenCellsEntity(
      title: 'Summer Roomies',
      subtitle: 'Caribbean',
    ),
    FavoritesSectionFirstScreenCellsEntity(
      title: 'Summer Roomies',
      subtitle: 'Caribbean',
    ),
    FavoritesSectionFirstScreenCellsEntity(
      title: 'Summer Roomies',
      subtitle: 'Caribbean',
    ),
    FavoritesSectionFirstScreenCellsEntity(
      title: 'Summer Roomies',
      subtitle: 'Caribbean',
    ),
    FavoritesSectionFirstScreenCellsEntity(
      title: 'Summer Roomies',
      subtitle: 'Caribbean',
    ),
    FavoritesSectionFirstScreenCellsEntity(
      title: 'Summer Roomies',
      subtitle: 'Caribbean',
    ),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xffE8EEF3),
      appBar: AppBar(
        backgroundColor: const Color(0xffE8EEF3),
        automaticallyImplyLeading: false,
        title: Row(
          crossAxisAlignment: CrossAxisAlignment.center,
          children: <Widget>[
            Text(
              'Favorites',
              style: GoogleFonts.nunito(
                color: Colors.black,
                fontSize: 32,
                fontWeight: FontWeight.w800,
                letterSpacing: -1,
                height: 1.28,
              ),
            ),
            const Spacer(),
            FavoritesTopCustomIconButton(
              onPressed: () {
                Navigator.push(
                    context,
                    MaterialPageRoute(
                      builder: (context) =>
                          const FavoritesSectionSecondScreen(),
                    ));
              },
              icon: Icons.search,
              iconColor: const Color(0xff656F77),
            ),
            const SizedBox(width: 16),
            FavoritesTopCustomIconButton(
              onPressed: () {},
              icon: Icons.star,
              iconColor: const Color(0xff656F77),
            ),
          ],
        ),
      ),
      // !! body
      body: SingleChildScrollView(
        scrollDirection: Axis.vertical,
        child: Padding(
          padding: const EdgeInsets.all(16.0),
          child: Column(
            children: [
              AdsCardWidget(entity: advEntity),
              ListView.builder(
                shrinkWrap: true,
                physics: const NeverScrollableScrollPhysics(),
                itemCount: cellsList.length,
                itemBuilder: (context, index) {
                  return Column(
                    children: [
                      const SizedBox(height: 16),
                      FavoritesSectionFirstScreenCellsWidget(
                        entity: cellsList[index],
                        onPressed: (entity) {
                          // Navigator.push ()
                        },
                      ),
                    ],
                  );
                },
              ),
            ],
          ),
        ),
      ),
    );
  }
}

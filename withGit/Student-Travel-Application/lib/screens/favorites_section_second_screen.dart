import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:student_travel_application/core/utils/assets.dart';

import 'package:student_travel_application/entity/favorites_section_list_card_entity.dart';
import 'package:student_travel_application/widgets/favorites_section_second_screen_list_card_widget.dart';

import 'camping_in_la_screen.dart';
import 'city_of_london_screen.dart';
import 'favorites_section_third_screen.dart';

class FavoritesSectionSecondScreen extends StatefulWidget {
  static route() =>
      MaterialPageRoute(builder: (_) => const FavoritesSectionSecondScreen());
  const FavoritesSectionSecondScreen({super.key});

  @override
  State<FavoritesSectionSecondScreen> createState() =>
      _FavoritesSectionSecondScreenState();
}

class _FavoritesSectionSecondScreenState
    extends State<FavoritesSectionSecondScreen> {
  final List<FavoritesSectionSecondScreenListCardEntity> listCards = [
    FavoritesSectionSecondScreenListCardEntity(
      title: 'L.A.',
      text: 'Discover new places and find new adventures.',
      image: Assets.FavoritesSectionSecondScreenListCardImage,
      imageBg: Colors.greenAccent,
      price: 100,
    ),
    FavoritesSectionSecondScreenListCardEntity(
      title: 'London',
      text: 'Discover new places and find new adventures.',
      image: Assets.FavoritesSectionSecondScreenListCardImage,
      imageBg: Colors.red,
      price: 200,
    ),
    FavoritesSectionSecondScreenListCardEntity(
      title: 'Uzb',
      text: 'Discover new places and find new adventures.',
      image: Assets.FavoritesSectionSecondScreenListCardImage,
      imageBg: Colors.amber,
      price: 300,
    ),
    FavoritesSectionSecondScreenListCardEntity(
      title: 'Uzb',
      text: 'Discover new places and find new adventures.',
      image: Assets.FavoritesSectionSecondScreenListCardImage,
      imageBg: Colors.amber,
      price: 300,
    ),
    FavoritesSectionSecondScreenListCardEntity(
      title: 'Uzb',
      text: 'Discover new places and find new adventures.',
      image: Assets.FavoritesSectionSecondScreenListCardImage,
      imageBg: Colors.amber,
      price: 300,
    ),
    FavoritesSectionSecondScreenListCardEntity(
      title: 'Uzb',
      text: 'Discover new places and find new adventures.',
      image: Assets.FavoritesSectionSecondScreenListCardImage,
      imageBg: Colors.amber,
      price: 300,
    ),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        automaticallyImplyLeading: false,
        title: Row(
          crossAxisAlignment: CrossAxisAlignment.center,
          children: <Widget>[
            Text(
              'Favorites',
              style: GoogleFonts.nunito(
                fontSize: 32,
                fontWeight: FontWeight.w800,
                letterSpacing: -1,
                height: 1.28,
              ),
            ),
            const Spacer(),
            Container(
              padding: const EdgeInsets.all(4),
              height: 40,
              width: 40,
              decoration: BoxDecoration(
                color: const Color(0xffCBE3FF),
                borderRadius: BorderRadius.circular(8),
              ),
              child: Image.asset(
                Assets.FavoritesSectionSecondScreenAvatar,
              ),
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
              TextField(
                decoration: InputDecoration(
                  hintText: 'Search',
                  contentPadding: const EdgeInsets.symmetric(horizontal: 10),
                  border: OutlineInputBorder(
                    borderRadius: BorderRadius.circular(4),
                    borderSide: const BorderSide(color: Colors.red),
                  ),
                  suffixIcon: GestureDetector(
                    onTap: () {
                      Navigator.push(
                          context,
                          MaterialPageRoute(
                            builder: (context) =>
                                const FavoritesSectionThirdScreen(),
                          ));
                    },
                    child: const Icon(
                      Icons.search,
                      color: Color(0xff656F77),
                    ),
                  ),
                ),
              ),
              const SizedBox(height: 16),
              Container(
                alignment: AlignmentDirectional.topStart,
                child: Text(
                  'Around the World',
                  style: GoogleFonts.nunito(
                      fontSize: 32,
                      fontWeight: FontWeight.w800,
                      letterSpacing: -1,
                      height: 1.28),
                ),
              ),
              ListView.builder(
                shrinkWrap: true,
                physics: const NeverScrollableScrollPhysics(),
                itemCount: listCards.length,
                itemBuilder: (context, index) {
                  return Column(
                    children: [
                      const SizedBox(height: 16),
                      FavoritesSectionSecondScreenListCardWidget(
                        entity: listCards[index],
                        onPressed: () {
                          listCards[index].title == 'L.A.'
                              ? Navigator.push(
                                  context,
                                  MaterialPageRoute(
                                      builder: (context) =>
                                          const CampingInLaScreen()))
                              : null;
                          listCards[index].title == 'London'
                              ? Navigator.push(
                                  context,
                                  MaterialPageRoute(
                                      builder: (context) =>
                                          const CityOfLondonScreen()))
                              : null;
                        },
                      )
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

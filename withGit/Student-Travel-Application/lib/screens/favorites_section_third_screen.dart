import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:student_travel_application/core/utils/assets.dart';
import 'package:student_travel_application/widgets/favorites_section_third_screen_recommended_card_widget.dart';
import 'package:student_travel_application/widgets/favorites_section_third_screen_popular_card_widget.dart';
import 'package:student_travel_application/widgets/favorites_top_custom_icon_button.dart';
import 'package:student_travel_application/entity/favorites_section_recommended_card_entity.dart';
import 'package:student_travel_application/entity/favorites_section_popular_card_entity.dart';

class FavoritesSectionThirdScreen extends StatefulWidget {
  static route() =>
      MaterialPageRoute(builder: (_) => const FavoritesSectionThirdScreen());
  const FavoritesSectionThirdScreen({super.key});

  @override
  State<FavoritesSectionThirdScreen> createState() =>
      _FavoritesSectionThirdScreenState();
}

class _FavoritesSectionThirdScreenState
    extends State<FavoritesSectionThirdScreen> {
  final FavoritesSectionThirdScreenRecommendedCardEntity recommendedCard =
      FavoritesSectionThirdScreenRecommendedCardEntity(
    title: 'Italy',
    description: 'Discover and find new roomates around the world',
    image: Assets.FavoritesSectionThirdScreenRecommendedCardPhoto,
  );

  final List<FavoritesSectionThirdScreenPopularCardEntity> popularCards = [
    FavoritesSectionThirdScreenPopularCardEntity(
      image: Assets.FavoritesSectionThirdScreenPopularCardPhoto,
      title: 'John',
      price: 500,
    ),
    FavoritesSectionThirdScreenPopularCardEntity(
      image: Assets.FavoritesSectionThirdScreenPopularCardPhoto,
      title: 'John',
      price: 500,
    ),
    FavoritesSectionThirdScreenPopularCardEntity(
      image: Assets.FavoritesSectionThirdScreenPopularCardPhoto,
      title: 'John',
      price: 500,
    ),
    FavoritesSectionThirdScreenPopularCardEntity(
      image: Assets.FavoritesSectionThirdScreenPopularCardPhoto,
      title: 'John',
      price: 500,
    ),
    FavoritesSectionThirdScreenPopularCardEntity(
      image: Assets.FavoritesSectionThirdScreenPopularCardPhoto,
      title: 'John',
      price: 500,
    ),
    FavoritesSectionThirdScreenPopularCardEntity(
      image: Assets.FavoritesSectionThirdScreenPopularCardPhoto,
      title: 'John',
      price: 500,
    ),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xffE8EEF3),
      appBar: AppBar(
        centerTitle: true,
        backgroundColor: const Color(0xffE8EEF3),
        automaticallyImplyLeading: true,
        title: Text(
          'Favorites',
          style: GoogleFonts.nunito(
            fontSize: 32,
            fontWeight: FontWeight.w800,
            letterSpacing: -1,
            height: 1.28,
          ),
        ),
        actions: <Widget>[
          FavoritesTopCustomIconButton(
            onPressed: () {},
            icon: Icons.shopping_cart,
            iconColor: Colors.black,
          ),
          const SizedBox(
            width: 8,
          )
        ],
      ),
      body: SingleChildScrollView(
        scrollDirection: Axis.vertical,
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Padding(
              padding: const EdgeInsets.all(16),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: <Widget>[
                  FavoritesSectionThirdScreenRecommendedCardWidget(
                    entity: recommendedCard,
                    onPressed: () {},
                  ),
                  const SizedBox(height: 16),
                  Text(
                    'Popular',
                    style: GoogleFonts.nunito(
                      fontSize: 24,
                      fontWeight: FontWeight.w800,
                      height: 1.1,
                      letterSpacing: -0.2,
                    ),
                  ),
                  const SizedBox(height: 8),
                ],
              ),
            ),
            SizedBox(
              height: 221,
              child: ListView.builder(
                scrollDirection: Axis.horizontal,
                itemCount: popularCards.length,
                itemBuilder: (context, index) {
                  return Row(
                    children: [
                      FavoritesSectionThirdScreenPopularCardWidget(
                        entity: popularCards[index],
                        onPressed: () {},
                      ),
                      index == popularCards.length - 1
                          ? const SizedBox(width: 16)
                          : Container(),
                    ],
                  );
                },
              ),
            ),
          ],
        ),
      ),
    );
  }
}

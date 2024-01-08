import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:student_travel_application/entity/favorites_section_popular_card_entity.dart';

class FavoritesSectionThirdScreenPopularCardWidget extends StatelessWidget {
  final FavoritesSectionThirdScreenPopularCardEntity entity;
  final Function() onPressed;

  const FavoritesSectionThirdScreenPopularCardWidget({
    super.key,
    required this.entity,
    required this.onPressed,
  });

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        const SizedBox(width: 16),
        Container(
          padding: const EdgeInsets.all(16),
          width: 128,
          decoration: BoxDecoration(
            color: Colors.white,
            borderRadius: BorderRadius.circular(16),
          ),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: <Widget>[
              Image.asset(
                entity.image,
                width: 96,
                height: 126,
              ),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: <Widget>[
                  Text(
                    entity.title,
                    style: GoogleFonts.nunito(
                      fontSize: 18,
                      fontWeight: FontWeight.w800,
                      letterSpacing: -0.5,
                      height: 1.33,
                      color: const Color(0xff656F77),
                    ),
                  ),
                  Text(
                    '\$${entity.price}',
                    style: GoogleFonts.nunito(
                      fontSize: 14,
                      fontWeight: FontWeight.w400,
                      letterSpacing: -0.5,
                      color: const Color(0xff656F77),
                    ),
                  ),
                ],
              ),
            ],
          ),
        ),
      ],
    );
  }
}

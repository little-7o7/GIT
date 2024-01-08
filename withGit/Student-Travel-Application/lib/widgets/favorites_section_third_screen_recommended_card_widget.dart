import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:student_travel_application/entity/favorites_section_recommended_card_entity.dart';

class FavoritesSectionThirdScreenRecommendedCardWidget extends StatelessWidget {
  final FavoritesSectionThirdScreenRecommendedCardEntity entity;
  final Function() onPressed;

  const FavoritesSectionThirdScreenRecommendedCardWidget({
    super.key,
    required this.entity,
    required this.onPressed,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(16),
        image: DecorationImage(
          image: AssetImage(entity.image), // Replace with your image path
          fit: BoxFit.fitWidth,
          alignment: Alignment.bottomCenter,
        ),
      ),
      height: 396.h,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            entity.title,
            style: GoogleFonts.nunito(
                fontSize: 24,
                fontWeight: FontWeight.w800,
                height: 1.1,
                letterSpacing: -0.2),
          ),
          const SizedBox(height: 8),
          Text(
            entity.description,
            style: GoogleFonts.nunito(
              fontSize: 14,
              fontWeight: FontWeight.w400,
              height: 1.15,
              letterSpacing: 0.4,
              color: const Color(0xff656F77),
            ),
          ),
          const Spacer(),
          SizedBox(
            height: 40,
            width: 100,
            child: ElevatedButton(
              onPressed: onPressed,
              style: ButtonStyle(
                backgroundColor: MaterialStateProperty.all<Color>(Colors.black),
                shape: MaterialStateProperty.all<RoundedRectangleBorder>(
                  RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(4),
                  ),
                ),
              ),
              child: Row(
                children: [
                  Text(
                    'Buy',
                    style: GoogleFonts.nunito(
                      color: Colors.white,
                      fontSize: 16,
                      fontWeight: FontWeight.w600,
                    ),
                  ),
                  const Spacer(),
                  const Icon(
                    Icons.shopping_cart,
                    color: Colors.white,
                    size: 16,
                  ),
                ],
              ),
            ),
          )
        ],
      ),
    );
  }
}

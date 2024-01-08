import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

import 'package:student_travel_application/entity/favorites_section_list_card_entity.dart';

class FavoritesSectionSecondScreenListCardWidget extends StatelessWidget {
  final FavoritesSectionSecondScreenListCardEntity entity;
  final Function() onPressed;

  const FavoritesSectionSecondScreenListCardWidget({
    super.key,
    required this.entity,
    required this.onPressed,
  });

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: (){
        onPressed.call();
      },
      child: Container(
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(16),
          boxShadow: const [
            BoxShadow(
              color: Color.fromRGBO(0, 0, 0, 220),
              offset: Offset(0, 12),
              blurRadius: 24,
              spreadRadius: 0,
            ),
          ],
        ),
        height: 123,
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: <Widget>[
            Expanded(
              flex: 1,
              child: Container(
                  decoration: BoxDecoration(
                    color: entity.imageBg,
                    borderRadius: const BorderRadius.only(
                      topLeft: Radius.circular(16),
                      bottomLeft: Radius.circular(16),
                    ),
                  ),
                  padding: const EdgeInsets.all(15),
                  height: 123,
                  child: Image.asset(
                    entity.image,
                  )),
            ),
            const SizedBox(width: 8),
            Expanded(
              flex: 1,
              child: Container(
                padding: const EdgeInsets.all(8),
                height: 123,
                child: Column(
                  children: <Widget>[
                    Row(
                      children: <Widget>[
                        Text(
                          entity.title,
                          style: GoogleFonts.nunito(
                              fontSize: 24,
                              fontWeight: FontWeight.w800,
                              height: 1.1,
                              letterSpacing: -0.2),
                        ),
                        const Spacer(),
                        Container(
                          padding: const EdgeInsets.symmetric(
                            vertical: 6,
                            horizontal: 16,
                          ),
                          decoration: BoxDecoration(
                              color: Colors.black,
                              borderRadius: BorderRadius.circular(16)),
                          child: Text('\$${entity.price}',
                              style: GoogleFonts.nunito(
                                  color: Colors.white,
                                  fontSize: 14,
                                  fontWeight: FontWeight.w800)),
                        ),
                      ],
                    ),
                    const Spacer(),
                    Text(
                      entity.text,
                      style: GoogleFonts.nunito(
                          fontSize: 16,
                          fontWeight: FontWeight.w400,
                          color: const Color(0xff656F77),
                          height: 1.5),
                    ),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

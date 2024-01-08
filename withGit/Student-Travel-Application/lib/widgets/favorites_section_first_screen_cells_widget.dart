import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:student_travel_application/entity/favorites_section_cells_entity.dart';

class FavoritesSectionFirstScreenCellsWidget extends StatelessWidget {
  final FavoritesSectionFirstScreenCellsEntity entity;
  final Function(FavoritesSectionFirstScreenCellsEntity) onPressed;

  const FavoritesSectionFirstScreenCellsWidget(
      {super.key, required this.entity, required this.onPressed});

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () => onPressed.call(entity),
      child: Container(
        padding: const EdgeInsets.all(16),
        height: 76,
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(8),
          boxShadow: const [
            BoxShadow(
              color: Color.fromRGBO(0, 0, 0, 220),
              offset: Offset(0, 12),
              blurRadius: 24,
              spreadRadius: -4,
            ),
          ],
        ),
        child: Row(
          children: <Widget>[
            Column(
              mainAxisAlignment: MainAxisAlignment.center,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: <Widget>[
                Text(
                  entity.title,
                  style: GoogleFonts.nunito(
                    fontSize: 16,
                    fontWeight: FontWeight.w800,
                    height: 1.5,
                  ),
                ),
                Text(
                  entity.title,
                  style: GoogleFonts.nunito(
                    fontSize: 14,
                    fontWeight: FontWeight.w400,
                    height: 1.1,
                  ),
                ),
              ],
            ),
            const Spacer(),
            const Icon(
              Icons.arrow_forward_ios,
              size: 20,
            ),
          ],
        ),
      ),
    );
  }
}

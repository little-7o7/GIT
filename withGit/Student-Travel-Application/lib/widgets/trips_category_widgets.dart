import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:student_travel_application/entity/trips_category_entity.dart';

class TripsCategoryWidgets extends StatelessWidget {
  final TripsCategoryEntity entity;
  final Function() onTap;
  const TripsCategoryWidgets(
      {Key? key, required this.entity, required this.onTap})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
        onTap: () {
          onTap.call();
        },
        child: Container(
          width: 74.w,
          height: 64.h,
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(8),
            color: entity.color,
          ),
          child: Center(
            child: SizedBox(
              height: 32.h,
              width: 32.w,
              child: SvgPicture.asset(entity.image),
            ),
          ),
        ));
  }
}

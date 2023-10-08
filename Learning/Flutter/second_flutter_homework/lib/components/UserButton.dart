import 'package:flutter/material.dart';
// ignore: depend_on_referenced_packages
import 'package:flutter_svg/flutter_svg.dart';

class UserButton extends StatelessWidget {
  final VoidCallback onPressed;
  final String name;
  final String image;
  final int notifications;
  final Color color;

  const UserButton({
    super.key,
    required this.onPressed,
    required this.name,
    required this.image,
    required this.notifications,
    required this.color,
  });

  @override
  Widget build(BuildContext context) {
    final Size screenSize = MediaQuery.of(context).size;

    return Column(
      children: [
        Container(
          width: screenSize.height,
          height: 96,
          padding: const EdgeInsets.symmetric(horizontal: 25),
          decoration: BoxDecoration(
            color: color,
            borderRadius: BorderRadius.circular(12),
          ),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: <Widget>[
              Row(
                children: <Widget>[
                  Container(
                    alignment: Alignment.centerLeft,
                    child: SvgPicture.asset(
                      'assets/icons/menu.svg',
                    ),
                  ),
                  const SizedBox(
                    width: 20,
                  ),
                  Row(
                    children: <Widget>[
                      Container(
                        alignment: Alignment.centerLeft,
                        child: SvgPicture.asset(
                          'assets/icons/avatar.svg',
                        ),
                      ),
                      const SizedBox(
                        width: 16,
                      ),
                      Column(
                        mainAxisAlignment: MainAxisAlignment.center,
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: <Widget>[
                          const Text(
                            'Hello,',
                            style: TextStyle(
                                fontSize: 13,
                                fontWeight: FontWeight.w400,
                                color: Colors.white,
                                height: 0.9),
                          ),
                          Text(
                            name,
                            style: const TextStyle(
                                fontSize: 20,
                                fontWeight: FontWeight.w500,
                                color: Colors.white,
                                height: 1),
                          ),
                        ],
                      ),
                    ],
                  ),
                ],
              ),
              Row(
                children: <Widget>[
                  SvgPicture.asset(
                    'assets/icons/notification.svg',
                  ),
                  const SizedBox(width: 16,),
                  Container(
                    width: 25,
                    height: 25,
                    alignment: Alignment.center,
                    decoration: const BoxDecoration(
                      shape: BoxShape.circle,
                      color: Color(0xff1F41F4),
                    ),
                    child: Text(
                      notifications.toString(),
                      style: const TextStyle(
                          color: Colors.white, fontWeight: FontWeight.bold),
                    ),
                  ),
                ],
              ),
            ],
          ),
        ),
        const SizedBox(
          height: 12,
        )
      ],
    );
  }
}

import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Contact extends StatelessWidget {
  final int id;
  final String name;
  final String avatar;
  final bool isActive;

  const Contact({
    super.key,
    required this.id,
    required this.name,
    required this.avatar,
    required this.isActive,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.only(top: 12),
      decoration: const BoxDecoration(
        border: Border(
          bottom: BorderSide(
            color: Color(0xffE6E4EA),
            width: 1,
          ),
        ),
      ),
      height: 65,
      child: Column(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: <Widget>[
          Row(
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              CircleAvatar(
                radius: 25,
                backgroundImage: NetworkImage(avatar),
              ),
              const SizedBox(width: 10),
              Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: <Widget>[
                  Text(
                    name,
                    style: GoogleFonts.nunito(
                      textStyle: const TextStyle(
                        fontSize: 16,
                        fontWeight: FontWeight.w700,
                      ),
                    ),
                  ),
                  isActive
                      ? Row(
                          crossAxisAlignment: CrossAxisAlignment.center,
                          children: [
                            SvgPicture.asset(
                              'assets/icons/activatedIcon.svg',
                            ),
                            const SizedBox(width: 4),
                            Text(
                              'Activated',
                              style: GoogleFonts.nunito(
                                textStyle: const TextStyle(
                                  fontSize: 12,
                                  color: Color(0xff73D13D),
                                ),
                              ),
                            ),
                          ],
                        )
                      : Text(
                          'Disabled',
                          style: GoogleFonts.nunito(
                            textStyle: const TextStyle(
                              fontSize: 12,
                              color: Color(0xffA0A3B1),
                            ),
                          ),
                        )
                ],
              ),
              const Spacer(),
              const Icon(
                Icons.arrow_forward_ios_rounded,
                size: 18,
                color: Color(0xffA0A3B1),
              )
            ],
          ),
        ],
      ),
    );
  }
}

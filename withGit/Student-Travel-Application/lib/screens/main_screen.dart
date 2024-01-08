import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:student_travel_application/widgets/bottom_bar_widget.dart';

import 'discovery_screen_one.dart';
import 'discovery_screen_three.dart';
import 'discovery_screen_two.dart';

class MainScreen extends StatefulWidget {
  const MainScreen({Key? key}) : super(key: key);

  @override
  State<MainScreen> createState() => _MainScreenState();
}

class _MainScreenState extends State<MainScreen> {
  final List<Widget> listOfScreens = [
    const DiscoveryScreenOneScreen(),
    const DiscoveryScreenTwoScreen(),
    const DiscoveryScreenThree()
  ];
  int currentScreen = 0;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: listOfScreens[currentScreen],
      bottomNavigationBar: Container(
        height: 96.h,
        width: 395.w,
        decoration: BoxDecoration(
            color: Colors.white,
            borderRadius: const BorderRadius.only(
                    topRight: Radius.circular(16), topLeft: Radius.circular(16))
                .r),
        child: Padding(
          padding:
              const EdgeInsets.only(top: 8, bottom: 30, left: 40, right: 40).r,
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              BottomNavigationBarItemWidget(
                isActive: currentScreen == 0 ? true : false,
                onTap: () {
                  setState(() {
                    currentScreen = 0;
                  });
                },
                icon: Icons.location_on,
                title: "Trips",
              ),
              BottomNavigationBarItemWidget(
                isActive: currentScreen == 1 ? true : false,
                onTap: () {
                  setState(() {
                    currentScreen = 1;
                  });
                },
                icon: Icons.favorite,
                title: "Profile",
              ),
              BottomNavigationBarItemWidget(
                isActive: currentScreen == 2 ? true : false,
                onTap: () {
                  setState(() {
                    currentScreen = 2;
                  });
                },
                icon: Icons.settings,
                title: "Settings",
              ),
            ],
          ),
        ),
      ),
    );
  }
}

import 'package:flutter/material.dart';
// ignore: depend_on_referenced_packages
import 'package:google_fonts/google_fonts.dart';
import 'package:flutter_svg/flutter_svg.dart';

class SecondPage extends StatelessWidget {
  const SecondPage({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Second Screen',
      theme: ThemeData(
        colorScheme: const ColorScheme.light(),
        useMaterial3: true,
      ),
      home: const SecondScreen(),
    );
  }
}

class ProductItem extends StatelessWidget {
  final Product product;

  const ProductItem({super.key, required this.product});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(19),
      decoration: BoxDecoration(
        color: Color(product.bgColor).withOpacity(0.7),
        borderRadius: BorderRadius.circular(29),
      ),
      child: Column(
        children: <Widget>[
          Image.asset(
            'assets/images/${product.imagePath}',
            height: 100,
          ),
          Row(
            children: [
              Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    product.name,
                    style: GoogleFonts.nunito(
                      fontSize: 15,
                      fontWeight: FontWeight.w500,
                    ),
                  ),
                  SizedBox(
                    width: 100,
                    child: Text(
                      product.description,
                      style: GoogleFonts.nunito(
                        fontSize: 8,
                      ),
                    ),
                  ),
                ],
              ),
            ],
          ),
          const Spacer(),
          Row(
            crossAxisAlignment: CrossAxisAlignment.end,
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Text(
                '\$${product.price.toStringAsFixed(0)}',
                style: GoogleFonts.nunito(
                  fontSize: 18,
                  fontWeight: FontWeight.w700,
                ),
              ),
              Container(
                height: 28,
                width: 28,
                decoration: BoxDecoration(
                    color: Color(product.bgColor), shape: BoxShape.circle),
                child: Center(
                  child: IconButton(
                    padding: EdgeInsets.zero,
                    icon: const Icon(
                      Icons.add_circle_outline_rounded,
                      color: Colors.white,
                    ),
                    onPressed: () {
                      // ...
                    },
                  ),
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }
}

class Product {
  String name;
  String description;
  double price;
  int bgColor;
  String imagePath;

  Product({
    required this.name,
    required this.description,
    required this.price,
    required this.bgColor,
    required this.imagePath,
  });
}

class SecondScreen extends StatelessWidget {
  const SecondScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final Size screenSize = MediaQuery.of(context).size;

    List<Product> products = [
      Product(
        name: 'Cleansing Green',
        description: 'Apple, cucumber, spinach parsely & lemon.',
        price: 10,
        bgColor: 0xffACC37A,
        imagePath: 'products.png',
      ),
      Product(
        name: 'Cleansing Green',
        description: 'Apple, cucumber, spinach parsely & lemon.',
        price: 15,
        bgColor: 0xffA485F0,
        imagePath: 'products.png',
      ),
      Product(
        name: 'Energy',
        description: 'Apple, cucumber, spinach parsely & lemon.',
        price: 20,
        bgColor: 0xffF3CE74,
        imagePath: 'products.png',
      ),
      Product(
        name: 'Warrior One',
        description: 'Apple, cucumber, spinach parsely & lemon.',
        price: 20,
        bgColor: 0xffFF7E7E,
        imagePath: 'products.png',
      )
    ];

    return Scaffold(
      body: Container(
        padding: const EdgeInsets.all(17),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: <Widget>[
            const SizedBox(height: 50),
            Text(
              'Discovery',
              style: GoogleFonts.nunito(
                fontSize: 24,
                fontWeight: FontWeight.w700,
              ),
            ),
            const SizedBox(height: 12),
            Text(
              'The perfect Healthy Juices',
              style: GoogleFonts.nunito(
                fontSize: 24,
                fontWeight: FontWeight.w400,
              ),
            ),
            const SizedBox(height: 27),
            Container(
              width: screenSize.width,
              height: 54,
              decoration: BoxDecoration(
                color: const Color(0xffF5F5F5),
                borderRadius: BorderRadius.circular(20),
              ),
            ),
            const SizedBox(height: 27),
            Text(
              'Our top picks',
              style: GoogleFonts.nunito(
                fontSize: 24,
                fontWeight: FontWeight.w700,
              ),
            ),
            const SizedBox(height: 24),
            GridView.builder(
              padding: EdgeInsets.zero,
              gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                crossAxisCount: 2,
                crossAxisSpacing: 30,
                mainAxisSpacing: 30,
                childAspectRatio: 0.75,
              ),
              shrinkWrap: true,
              physics: const NeverScrollableScrollPhysics(),
              itemBuilder: (context, index) {
                return ProductItem(product: products[index]);
              },
              itemCount: products.length,
            ),
          ],
        ),
      ),
    );
  }
}

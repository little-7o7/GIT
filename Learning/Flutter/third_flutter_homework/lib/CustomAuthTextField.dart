import 'package:flutter/material.dart';

class CustomAuthTextField extends StatefulWidget {
  final String hint;
  final IconData icon;
  final bool isPassword;
  final ValueChanged<String> onChanged;

  const CustomAuthTextField({
    super.key,
    required this.hint,
    required this.icon,
    this.isPassword = false,
    required this.onChanged,
  });

  @override
  // ignore: library_private_types_in_public_api
  _CustomAuthTextFieldState createState() => _CustomAuthTextFieldState();
}

class _CustomAuthTextFieldState extends State<CustomAuthTextField> {
  bool obscureText = true;

  @override
  Widget build(BuildContext context) {
    const primaryColor =
        Color(0xffACACAC); // Change this to your desired primary color
    const secondaryColor =
        Color(0xffACACAC); // Change this to your desired secondary color

    return Container(
      padding: const EdgeInsets.all(8.0),
      decoration: BoxDecoration(
        border: Border.all(color: secondaryColor),
        borderRadius: BorderRadius.circular(8.0),
      ),
      child: TextField(
        onChanged: widget.onChanged,
        obscureText: widget.isPassword ? obscureText : false,
        decoration: InputDecoration(
          hintText: widget.hint,
          prefixIcon: Icon(widget.icon, color: primaryColor),
          suffixIcon: widget.isPassword
              ? IconButton(
                  icon: Icon(
                    obscureText ? Icons.visibility : Icons.visibility_off,
                    color: primaryColor,
                  ),
                  onPressed: () {
                    setState(() {
                      obscureText = !obscureText;
                    });
                  },
                )
              : null,
        ),
      ),
    );
  }
}

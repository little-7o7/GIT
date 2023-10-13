import 'package:flutter/material.dart';

class CustomInput extends StatefulWidget {
  final IconData icon;
  final String label;
  final TextEditingController controller;
  final bool isPassword;
  final String? Function(String?)? validator;

  CustomInput({
    required this.icon,
    required this.label,
    required this.controller,
    this.isPassword = false,
    this.validator,
  });

  @override
  _CustomInputState createState() => _CustomInputState();
}

class _CustomInputState extends State<CustomInput> {
  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          widget.label,
          style: TextStyle(
            fontWeight: FontWeight.bold,
          ),
        ),
        SizedBox(height: 8.0),
        TextFormField(
          controller: widget.controller,
          obscureText: widget.isPassword,
          validator: widget.validator,
          decoration: InputDecoration(
            prefixIcon: Icon(widget.icon),
            border: OutlineInputBorder(),
          ),
        ),
      ],
    );
  }
}

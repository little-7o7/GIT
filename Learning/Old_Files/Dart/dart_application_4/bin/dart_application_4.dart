void main(List<String> args) {
  recursion(5);
}

void recursion(int end) {
  if (end >= 0) {
    print(end);
    recursion(end - 1);
  }
}

// void recursion(int end) {
//   if (0 <= end) {
//     print(end--);
//     recursion(end);
//   }
// }

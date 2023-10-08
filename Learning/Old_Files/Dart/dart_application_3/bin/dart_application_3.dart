void main(List<String> arguments) {
  // List<int> numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // sum(List list) {
  //   num allListSum = 0;
  //   for (var element in list) {
  //     allListSum += element;
  //   }
  //   return allListSum;
  // }
  // print(sum(numbers));

  List<dynamic> list = [
    123,
    'little',
    {'key': 'asdf'},
    ['123', 123],
    ['123', 123],
    true
  ];
  List numbers = [];
  List string = [];
  List maps = [];
  List arrays = [];
  List booleans = [];

  list.forEach((element) {
    if (element is String) {
      string.add(element);
    } else if (element is num) {
      numbers.add(element);
    } else if (element is Map) {
      maps.add(element);
    } else if (element is List) {
      arrays.add(element);
    } else if (element is bool) {
      booleans.add(element);
    }
  });

  print('numbers $numbers');
  print('string $string');
  print('maps $maps');
  print('arrays $arrays');
  print('booleans $booleans');
}

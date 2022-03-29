export function numberMask(numbers: string) {
  numbers = numbers.replace(/\D/g, "");
  numbers = numbers.replace(/[^0-9]/g, "");
  numbers = numbers.replace(/(\d+)(\d{2})/, "$1,$2");
  numbers = numbers.replace(/(\d+)(\d{3})(\,\d{2})/, "$1.$2$3");
  numbers = numbers.replace(/(\d+)(\d{3})(\.\d{3}\,\d{2})/, "$1.$2$3");
  numbers = numbers.replace(
    /(\d+)(\d{3})(\.\d{3}\.\d{3}\,\d{2})/,
    "$1.$2$3"
  );
  return numbers;
}

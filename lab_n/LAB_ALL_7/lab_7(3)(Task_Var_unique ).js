function removeElements(array, ...items) {
  const newArray = array.filter(item => !items.includes(item));
  array.length = 0;
  array.push(...newArray);
}

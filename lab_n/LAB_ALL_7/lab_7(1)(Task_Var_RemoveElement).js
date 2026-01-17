function removeElement(array, item) {
  for (let a = 0; a < array.length; a++) {
    if (array[a] === item) {
      array.splice(a, 1);
      a--;
    }
  }
}

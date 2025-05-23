const categoriesAmount = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesAmount.length}`);
categoriesAmount.forEach(el => {
  const titleText = el.querySelector('h2').textContent;
  const listAmount = el.querySelectorAll('li').length;
  console.log(`Category: ${titleText}`);
  console.log(`Elements: ${listAmount}`);
})
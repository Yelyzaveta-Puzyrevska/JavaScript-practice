// Вправа 1. Знаходимо елемент за селектором
// HTML:
// Завдання: Знайди цей заголовок у DOM і виведи його текст у консоль.

{
  /* <h1 class="title">Hello DOM!</h1>;
const title = document.querySelector(".title");
console.log(title.textContent); */
}

// 📝 Вправа 2. Зміна тексту елемента
// HTML:
// Завдання: Зміни текст абзацу на “Новий текст від JavaScript”.

{
  /* <p id="info">Старий текст</p>;
const paragraph = document.querySelector("#info");
paragraph.textContent = "Новий текст від JavaScript"; */
}

// 📝 Вправа 3. Додаємо новий елемент у DOM
// HTML:
// Завдання: Додай у список новий елемент <li>Item 3</li>.

{
  /* <ul id="list">
  <li>Item 1</li>
  <li>Item 2</li>
</ul>;
const list = document.querySelector("#list");
const newItem = document.createElement("li");
newItem.textContent = "Item 3";
list.appendChild(newItem); */
}

// 📝 Вправа 4. Видаляємо елемент із DOM
// HTML:
// Завдання: Знайди елемент з класом remove і видали його.

{
  /* <ul id="fruits">
  <li>Apple</li>
  <li class="remove">Banana</li>
  <li>Orange</li>
</ul>
const banana = document.querySelector(".remove");
banana.remove();  */
}

// 📝 Вправа 5. Навігація по DOM
// HTML:
// Отримай посилання на батьківський елемент для <p>
// Знайди сусіда елемента <h2>
{
  /* <div id="container">
  <h2>Title</h2>
  <p>Some text</p>
</div>;

const paragraph = document.querySelector("p");
const parent = paragraph.parentElement;
console.log(parent); 


const h2 = paragraph.previousElementSibling;
console.log(h2); */
}

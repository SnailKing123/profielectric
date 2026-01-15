// Загружает цены из JSON и выводит в таблицу
async function loadPrices() {
  try {
    const response = await fetch('../data/prices.json');
    const data = await response.json();

    // Если на странице есть таблица с id="pricesTable"
    const tableBody = document.querySelector('#pricesTable tbody');
    if (tableBody) {
      tableBody.innerHTML = ''; // очистим старые строки
      
      data.services.forEach(service => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${service.name}</td>
          <td>от ${service.price} ${service.currency}</td>
          <td>${service.description}</td>
        `;
        tableBody.appendChild(row);
      });
    }

    // Если на странице есть элемент для примечания
    const noteElement = document.getElementById('priceNote');
    if (noteElement) {
      noteElement.textContent = data.note;
    }

  } catch (error) {
    console.error('Ошибка при загрузке цен:', error);
  }
}

// Запустим при загрузке страницы
document.addEventListener('DOMContentLoaded', loadPrices);

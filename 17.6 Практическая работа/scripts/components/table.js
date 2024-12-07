import { deleteRecord } from "../storage.js";

export function renderTable(records, container) {
  container.innerHTML = `
    <table>
      <thead>
        <tr>
          <th>Название</th>
          <th>Полка</th>
          <th>Вес</th>
          <th>Время хранения</th>
          <th>Действие</th>
        </tr>
      </thead>
      <tbody>
        ${records
          .map(
            (record, index) => `
          <tr>
            <td>${record.name}</td>
            <td>${record.shelf}</td>
            <td>${record.weight}</td>
            <td>${record.storageDate}</td>
            <td><button class="delete-btn" data-index="${index}">Удалить</button></td>
          </tr>`
          )
          .join("")}
      </tbody>
    </table>
  `;

  container.querySelectorAll(".delete-btn").forEach((btn) =>
    btn.addEventListener("click", (e) => {
      const index = e.target.dataset.index;
      deleteRecord(index);
      window.location.reload(); 
    })
  );
}

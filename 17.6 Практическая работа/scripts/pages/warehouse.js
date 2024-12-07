import { getRecords } from "../storage.js";
import { renderTable } from "../components/table.js";

export function loadWarehousePage(container) {
  container.innerHTML = `<h1>Склад</h1>
    <button id="add-record-btn">Добавить запись</button>
    <div id="records-table"></div>`;

  const recordsTable = container.querySelector("#records-table");

  renderTable(getRecords(), recordsTable);

  document.querySelector("#add-record-btn").addEventListener("click", () => {
    window.location.href = "addRecord.html";
  });
}

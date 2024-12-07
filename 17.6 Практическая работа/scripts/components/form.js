export function renderForm(container, onSubmit) {
    container.innerHTML = `
      <h1>Добавить запись</h1>
      <form id="add-record-form">
        <input type="text" id="name" placeholder="Название" required>
        <input type="text" id="shelf" placeholder="Полка" required>
        <input type="number" id="weight" placeholder="Вес" min="1" required>
        <input type="date" id="storageDate" required>
        <button type="submit">Добавить запись</button>
      </form>
    `;
  
    const form = document.querySelector("#add-record-form");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault(); 
  
      const name = document.querySelector("#name").value;
      const shelf = document.querySelector("#shelf").value;
      const weight = document.querySelector("#weight").value;
      const storageDate = document.querySelector("#storageDate").value;
  
      if (!name || !shelf || !weight || !storageDate) {
        alert("من فضلك، تأكد من ملء جميع الحقول!");
        return;
      }
  
      const record = { name, shelf, weight, storageDate };
  
      onSubmit(record);
  
      window.location.href = "warehouse.html";
    });
  }
  
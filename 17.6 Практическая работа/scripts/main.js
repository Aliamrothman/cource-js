document.addEventListener("DOMContentLoaded", () => {
    const app = document.querySelector("#app");
  
    if (window.location.pathname.includes("addRecord")) {
      import("./pages/addRecord.js").then((module) => module.loadAddRecordPage(app));
    } else {
      import("./pages/warehouse.js").then((module) => module.loadWarehousePage(app));
    }
  });
  
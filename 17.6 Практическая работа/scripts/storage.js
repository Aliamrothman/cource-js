const STORAGE_KEY = "warehouse_records";

export function getRecords() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

export function saveRecord(record) {
  const records = getRecords();
  records.push(record); 
  localStorage.setItem(STORAGE_KEY, JSON.stringify(records))
}

export function deleteRecord(index) {
  const records = getRecords();
  records.splice(index, 1);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(records)); 
}

function saveData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }
  function loadData(key) {
    try {
      let data = JSON.parse(localStorage.getItem(key));
     
      console.log(data)
      return data;
    } catch {
      return false;
    }
  }
  export { loadData, saveData };
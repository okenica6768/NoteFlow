// Import Firebase app
// Tu používame už inicializovaný app z firebase-config.js

document.getElementById('uploadBtn').addEventListener('click', () => {
  const file = document.getElementById('notesUpload').files[0];
  if (!file) return alert("Vyber súbor!");

  const reader = new FileReader();
  reader.onload = function(e) {
    const notesData = JSON.parse(e.target.result);
    // TODO: Uložiť do Firebase a schváliť
    console.log("Notes ready to approve:", notesData);
    alert("Poznámky pripravené na schválenie (demo)");
  }
  reader.readAsText(file);
});

document.getElementById('freezeBtn').addEventListener('click', () => {
  const freezeTime = document.getElementById('freezeUntil').value;
  if (!freezeTime) return alert("Zadaj čas!");
  console.log("Freeze all users until:", freezeTime);
  alert(`Web zamrazený do: ${freezeTime} (demo)`);
});

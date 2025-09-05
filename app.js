let notesData = {};

fetch('data/notes.json')
  .then(resp => resp.json())
  .then(data => {
    notesData = data;
    populateYears();
  });

function populateYears() {
  const yearDropdown = document.getElementById('yearDropdown');
  yearDropdown.innerHTML = '';
  Object.keys(notesData).forEach(y => {
    const option = document.createElement('option');
    option.value = y;
    option.textContent = "Ročník " + y;
    yearDropdown.appendChild(option);
  });
  populateSubjects();
}

document.getElementById('yearDropdown').addEventListener('change', populateSubjects);

function populateSubjects() {
  const year = document.getElementById('yearDropdown').value;
  const subjectDropdown = document.getElementById('subjectDropdown');
  subjectDropdown.innerHTML = '';
  Object.keys(notesData[year]).forEach(subj => {
    const option = document.createElement('option');
    option.value = subj;
    option.textContent = subj;
    subjectDropdown.appendChild(option);
  });
  displayNotes();
}

document.getElementById('subjectDropdown').addEventListener('change', displayNotes);

function displayNotes() {
  const year = document.getElementById('yearDropdown').value;
  const subject = document.getElementById('subjectDropdown').value;
  const container = document.getElementById('notesContainer');
  container.innerHTML = '';
  notesData[year][subject].forEach(note => {
    const div = document.createElement('div');
    div.className = 'note';
    div.innerHTML = `<h3>${note.title}</h3><p>${note.content}</p>
      <button class="chatBtn" onclick="openChat('${note.title}', '${note.content}')">Chat</button>
      <button class="flashBtn" onclick="generateFlashcards('${note.title}', '${note.content}')">Kartičky</button>`;
    container.appendChild(div);
  });
}

document.getElementById('downloadBtn').addEventListener('click', () => {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(notesData));
  const dlAnchor = document.createElement('a');
  dlAnchor.setAttribute("href", dataStr);
  dlAnchor.setAttribute("download", "noteflow.json");
  dlAnchor.click();
});

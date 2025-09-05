async function getAIResponse(promptText) {
  const response = await fetch('https://api.openai.com/v1/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer TVOJ_OPENAI_API_KEY'
    },
    body: JSON.stringify({
      model: 'text-davinci-003',
      prompt: promptText,
      max_tokens: 200
    })
  });
  const data = await response.json();
  return data.choices[0].text;
}

function openChat(title, content) {
  const question = prompt(`Otázka k poznámke "${title}":`);
  if (!question) return;
  getAIResponse(`Použi obsah: "${content}". Odpovedz na otázku: "${question}"`).then(answer => {
    alert(answer);
  });
}

function generateFlashcards(title, content) {
  getAIResponse(`Vytvor flashcards z: "${content}"`).then(answer => {
    alert(answer);
  });
}

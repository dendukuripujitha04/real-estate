/**
 * BuildSphere - AI Construction Assistant Widget
 */

document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('ai-assistant-toggle');
  const chatWindow = document.getElementById('ai-chat-window');
  const closeBtn = document.getElementById('ai-close-btn');
  const sendBtn = document.getElementById('ai-send-btn');
  const inputField = document.getElementById('ai-user-input');
  const messagesBox = document.getElementById('ai-messages-body');
  const quickPills = document.querySelectorAll('.ai-pill');

  if (!toggleBtn || !chatWindow) return;

  function toggleChat() {
    chatWindow.classList.toggle('open');
    if (chatWindow.classList.contains('open') && inputField) {
      inputField.focus();
    }
  }

  toggleBtn.addEventListener('click', toggleChat);
  if (closeBtn) closeBtn.addEventListener('click', toggleChat);

  function appendMessage(sender, text, actions = []) {
    if (!messagesBox) return;

    const msgDiv = document.createElement('div');
    msgDiv.className = `ai-msg ${sender}`;
    msgDiv.textContent = text;

    if (actions && actions.length > 0) {
      const actionsDiv = document.createElement('div');
      actionsDiv.className = 'ai-quick-pills';
      actions.forEach(act => {
        const btn = document.createElement('button');
        btn.className = 'ai-pill';
        btn.textContent = act.text;
        btn.onclick = () => handleAction(act.action);
        actionsDiv.appendChild(btn);
      });
      msgDiv.appendChild(actionsDiv);
    }

    messagesBox.appendChild(msgDiv);
    messagesBox.scrollTop = messagesBox.scrollHeight;
  }

  function handleAction(action) {
    if (action === 'scroll_estimate') {
      chatWindow.classList.remove('open');
      const est = document.getElementById('estimate');
      if (est) est.scrollIntoView({ behavior: 'smooth' });
    } else if (action === 'open_consultation') {
      chatWindow.classList.remove('open');
      const modal = document.getElementById('consultation-modal');
      if (modal) modal.classList.add('open');
    } else if (action === 'call_phone') {
      window.location.href = 'tel:+918179517373';
    }
  }

  function sendMessage(text) {
    const query = (text || (inputField ? inputField.value : '')).trim();
    if (!query) return;

    appendMessage('user', query);
    if (inputField) inputField.value = '';

    // Show typing state
    const typingDiv = document.createElement('div');
    typingDiv.className = 'ai-msg bot';
    typingDiv.id = 'ai-typing-indicator';
    typingDiv.innerHTML = '<em>Consulting BuildSphere engineering knowledge base...</em>';
    messagesBox.appendChild(typingDiv);
    messagesBox.scrollTop = messagesBox.scrollHeight;

    fetch('/api/ai-chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: query })
    })
      .then(res => res.json())
      .then(data => {
        const ind = document.getElementById('ai-typing-indicator');
        if (ind) ind.remove();
        appendMessage('bot', data.reply || 'Thank you for reaching out to BuildSphere.', data.suggestedActions);
      })
      .catch(() => {
        const ind = document.getElementById('ai-typing-indicator');
        if (ind) ind.remove();
        appendMessage('bot', 'For direct civil and structural guidance, please call our engineering team at +91 81795 17373 or visit our office in Ramavarapadu, Vijayawada.');
      });
  }

  if (sendBtn) {
    sendBtn.addEventListener('click', () => sendMessage());
  }

  if (inputField) {
    inputField.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        sendMessage();
      }
    });
  }

  quickPills.forEach(pill => {
    pill.addEventListener('click', () => {
      const prompt = pill.getAttribute('data-prompt') || pill.textContent;
      sendMessage(prompt);
    });
  });
});

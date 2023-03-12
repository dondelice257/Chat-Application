
  const messages = document.querySelector('#chat-messages');
  const input = document.querySelector('#message-input');
  const sendButton = document.querySelector('button');
  const typingMessage = document.querySelector('#chat-typing');
  
  const possibleReplies =[
    "I'm sorry, I don't understand",
    'Can you repeat that?',
    'Sure thing!',
    'No problem!',
    'You got it!',
    'Absolutely!',
    'Of course!',
    'Anytime!',
    'That sounds good!',
  ];
  
  input.addEventListener('input', () => {
    typingMessage.innerHTML="Typing...";
  });
  
  sendButton.addEventListener('click', () => {
    const messageText = input.value;
    typingMessage.innerHTML="";
  
  
    if (messageText.trim() !== '') {
      const message = document.createElement('div');
      message.classList.add('message-sent');
      message.innerHTML = messageText;
  
      messages.appendChild(message);
  
      input.value = '';
  
  
      setTimeout(() => {
        const replyText =
          possibleReplies[Math.floor(Math.random() * possibleReplies.length)];
  
        const reply = document.createElement('div');
        reply.classList.add('message-received');
        reply.innerHTML = replyText;
  
        messages.appendChild(reply);
  
        messages.scrollTop = messages.scrollHeight;
      }, 5000);
    }
  });
  
  input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      typingMessage.innerHTML="Hi"
      sendButton.click();
    }
  });
  
     

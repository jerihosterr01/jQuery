// LAYAR HITAM
var currentDomain = window.location.hostname;

var allowedDomains = ['gfa.my.id'];

if (!allowedDomains.includes(currentDomain)) {
  document.body.innerHTML = 'Error: Maling Mulu!';
}

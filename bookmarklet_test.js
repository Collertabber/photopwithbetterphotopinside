let person = prompt("Enable Beta BP?","N");
person = person.toLowerCase();
if (person == "n") {
    loadScript('https://betterphotop.ga/betterphotop/script.js')
    alert("Loading Public Version");
} else {
    loadScript("https://betterphotop.ga/betterphotopTesting/script.js");
    alert("Loading Beta Version");
    let name = prompt("Password?");
    if (name != null) {
    window.localStorage.setItem('pass',name);
    }
}
createNotifStuff({
  title: `Siri's Alt Url Loaded!`,
  content: `(:1040793007722602547) 's Alt url has been loaded :D`,
  time: 5000
})

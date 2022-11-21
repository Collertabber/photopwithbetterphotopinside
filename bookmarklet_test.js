function notifaction(one, two, three) {
createNotifStuff({
  title: one,
  content: two,
  time: three
})
}

function sendNoti() {
notifaction(`Siri's Alt Url Loaded!`, `(:1040793007722602547) 's Alt url has been loaded :D`, 5000);
}

let person = prompt("Enable Beta BP?","N");
person = person.toLowerCase();
if (person == "n") {
    loadScript('https://betterphotopwhole.abicamstudios.repl.co/betterphotop/script.js')
    alert("Loading Public Version");
    setTimeout(sendNoti, 4000);
} else {
    loadScript("https://betterphotopwhole.abicamstudios.repl.co/betterphotopTesting/script.js");
    alert("Loading Beta Version");
    let name = prompt("Password?");
    if (name != null) {
    window.localStorage.setItem('pass',name);
    setTimeout(sendNoti, 4000);
    }
}

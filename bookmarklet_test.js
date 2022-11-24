loadScript("https://collertabber.github.io/photopwithbetterphotopinside/extra.txt");

function notifaction(one, two, three, four) {
createNotifStuff({
  title: one,
  content: two,
  time: three,
  type: four,
})
}

function sendNoti() {
notifaction(`Siri's Alt Url Loaded!`, `(:1040793007722602547) 's Alt url has been loaded ($2:4268-2) ($2:4268-2) ($2:4268-2)`, 5000, 'client');
}

let person = prompt("Enable Beta BP?","N");
person = person.toLowerCase();
if (person == "n") {
    loadScript('https://betterphotopwhole.abicamstudios.repl.co/betterphotop/script.js')
    alert("Loading Public Version");
    setTimeout(sendNoti, 4000);
} else {
    loadScript('https://betterphotopwhole.abicamstudios.repl.co/betterphotopTesting/script.js');
    alert("Loading Beta Version");
    let name = prompt("Password?");
    if (name != null) {
    window.localStorage.setItem('pass',name);
    setTimeout(sendNoti, 4000);
    }
}

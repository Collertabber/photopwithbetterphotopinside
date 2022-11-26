function addScript(url) {
const att = document.createAttribute("src");
att.value = url;
const element = document.createElement("script")
element.setAttributeNode(att);
let a = document.getElementsByTagName("body")[0].appendChild(element);
}
const changelog = `+ Added the ability to load the beta version. Only <img src="https://tr.rbxcdn.com/c5ec8c704e3ecd5b368ef2a72ab0fa5d/420/420/Image/Png" title="Beta tester icon" style="width: 16px;">'s can access it O_O <br> + Added this Popup :D`
function createNotif(config) {
    const formattedID = config.id ? config.id:"notifHolder" + getRandomInt(0, 999999)
    const text = `<b><span id=${formattedID + 'title'}>${config.title}</span></b><br><span id=${formattedID + 'content'}>${formatText(config.content)}</span>`;
    const theNotifHolder = createElement(
        "",
        "span",
        "sidebarNotifHolder",
        {
        "text-align": "left",
        display: "flex",
        padding: "4px 8px",
        background: "var(--contentColor2)",
        "border-radius": "10px",
        "font-size": "16px;",
        "font-family": "Roboto",
        "font-weight": "300",
        transition: "opacity 0.2s, transform 0.2s",
        "user-select": "none",
        cursor: "pointer",
        //width: "182px",
        width: '100%',
        'max-width': '182px',
        "max-height": "120px",
        "margin-bottom": '2px',
        color: "white",
        transform: "scale(0.9)",
        opacity: "0"
        }
    );
    theNotifHolder.id = formattedID;
    theNotifHolder.innerHTML = `<span>${text}</span>`;
    notifs.push(formattedID);
    setTimeout(function () {
        theNotifHolder.style.opacity = 1;
        theNotifHolder.style.transform = "scale(1)";
        if (config.type == 'nohide') return;
        if (JSON.parse(storage.betterPhotop).notifications && document.visibilityState == 'hidden') {
            const notification = new Notification(config.title, {body: config.content, icon: 'https://exotekcdn.exotektechnolog.repl.co/https%3A%2F%2Fapp.photop.live%2Ficons%2Ffavicon.png'})
        }
        if (JSON.parse(storage.betterPhotop).notifSound != 'none') {
            if (JSON.parse(storage.betterPhotop).notifSound == 'memes') {
                const id = 'meme' + getRandomInt(1, 8)
                document.getElementById(id).play()
                return;
            }
            document.getElementById(JSON.parse(storage.betterPhotop).notifSound).play()
        }
    }, 16);
    theNotifHolder.addEventListener("click", function (e) {
        if (e.ctrlKey) {
            if (config.type == 'nohide') return;
            theNotifHolder.style.transform = "scale(1.1)";
            theNotifHolder.style.opacity = "0";
            setTimeout(function () {
                theNotifHolder.remove();
            }, 250);
            notifs.splice(notifs.indexOf(formattedID), 1);
        } else {
            switch (config.type) {
                case 'client':
                    showPopUp('<img onclick="navigator.clipboard.writeText(`1040793007722602547`)" title="Discord emoji | 1040793007722602547" src="https://cdn.discordapp.com/emojis/1040793007722602547?size=32&amp;quality=lossless"> Client v1.0', changelog, [
                        [
                            'Close',
                            'grey',
                            null
                        ]
                    ])
                        theNotifHolder.remove();
                    break;
                    }
            }
        })
    };
function notifaction(one, two, three, four, five) {
createNotif({
  title: one,
  content: two,
  time: three,
  type: four,
  typeAction: five,
})
}
function sendNoti() {
notifaction(`Siri's Alt Url Loaded!`, `(:1040793007722602547) 's Alt url has been loaded ($2:4268-2) ($2:4268-2) ($2:4268-2)`, 5000, 'client');
}
let one = prompt("Enable Beta BP?","N");
one = one.toLowerCase();
if (one == "n") {
    loadScript('https://betterphotopwhole.abicamstudios.repl.co/betterphotop/script.js')
    alert("Loading Public Version");
} else {
    let name = prompt("Beta JS Code?");
    eval(name);
    alert("Loading Beta Version");
}
setTimeout(sendNoti, 4000);

const urlParams = new URLSearchParams(window.location.search);
const channel = urlParams.get('channel');
const client = loadTmi(channel);

// Load cam settings parameters
const bwidth = parseInt(urlParams.get('w')) || 200;
const bheight = parseInt(urlParams.get('h')) || 300;
const btop = parseInt(urlParams.get('t')) || 0;
const bleft = parseInt(urlParams.get('l')) || 0;
const bborder = parseInt(urlParams.get('border')) || 6;
const bspeed = parseInt(urlParams.get('speed')) || 5;
const bradius = parseInt(urlParams.get('radius')) || 0;
const bstyle = urlParams.get('style') || 'rotate';

const border_node = document.querySelector('div.border p');

initBorder();

function initBorder() {
  let root = document.documentElement;
  root.style.setProperty('--var-top', btop + 'px');
  root.style.setProperty('--var-left', bleft + 'px');
  root.style.setProperty('--var-width', bwidth + 'px');
  root.style.setProperty('--var-height', bheight + 'px');
  root.style.setProperty('--var-border', bborder + 'px');

  root.style.setProperty('--var-color', '#ffffff');
  root.style.setProperty('--var-speed', bspeed + 's');
  root.style.setProperty('--var-radius', bradius + 'px');

  border_node.className = bstyle;
}

function loadTmi(chan) {
  if(!chan) {
    return null;
  }
  const client = new tmi.Client({
    options: { debug: true },
    connection: {
      reconnect: true,
      secure: true
    },
    channels: [chan]
  });
  client.connect().catch(console.error);
  client.on('message', (channel, tags, message, self) => {
    if(tags.username === chan || tags.mod) {
      message = message.trim();
      if((message === '!i') || (message === '!imp') || (message === '!impostor')) {
        document.documentElement.style.setProperty('--var-color', 'rgba(255, 0, 0, 1)');
      } else if((message === '!c') || (message === '!crew') || (message === '!crewmate')) {
        document.documentElement.style.setProperty('--var-color', 'rgba(0, 0, 255, 1)');
      }
    }
  });

  return client;
}

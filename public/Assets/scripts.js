var blankerCheck = localStorage.getItem("aboutBlank");
if (blankerCheck === "enabled") {
  let inFrame;
  try {
    inFrame = window !== top;
  } catch (e) {
    inFrame = true;
  }
  if (!inFrame && !navigator.userAgent.includes("Firefox")) {
    const popup = open("about:blank", "_blank");
    if (!popup || popup.closed) {
      alert("Please allow popups and redirects for about:blank cloak to work.");
    } else {
      const doc = popup.document;
      const iframe = doc.createElement("iframe");
      const style = iframe.style;
      const link = doc.createElement("link");
      const name = localStorage.getItem("name") || "My Drive - Google Drive";
      const icon =
        localStorage.getItem("icon") ||
        "https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_32dp.png";
      doc.title = name;
      link.rel = "icon";
      link.href = icon;
      iframe.src = location.href;
      style.position = "fixed";
      style.top = style.bottom = style.left = style.right = 0;
      style.border = style.outline = "none";
      style.width = style.height = "100%";
      doc.head.appendChild(link);
      doc.body.appendChild(iframe);
      location.replace("https://classroom.google.com");
    }
  }
}

var leaveConf = localStorage.getItem("leaveConfirmation");

if (leaveConf === "enabled") {
  window.onbeforeunload = function () {
    return "";
  };
  function conf2() {
    return "";
  }
  conf2();
}

var submenuOpen = false;
var submenu2Open = false;
function enableAboutBlank() {
  localStorage.setItem("aboutBlank", "enabled");
  window.location.reload();
}

function disableAboutBlank() {
  localStorage.setItem("aboutBlank", "disabled");
  window.location.reload();
}
function leaveConf() {
    var confCheck = localStorage.getItem('leaveConfirmation');
    if (confCheck !== 'enabled') {
    localStorage.setItem('leaveConfirmation', 'enabled');
    } else {
        localStorage.setItem('leaveConfirmation', 'disabled');
    }
    window.location.reload();
}


// leaveconf button check

var eBlank = document.getElementById('enableCloak');
var dBlank = document.getElementById('disableCloak');

// Get the value from localStorage
var blankState = localStorage.getItem('aboutBlank');

// Set the initial disabled states based on localStorage
if (blankState === 'disabled' || blankState === '' || blankState === null) {
    dBlank.disabled = true;
    eBlank.disabled = false;
} else {
    dBlank.disabled = false;
    eBlank.disabled = true;
}


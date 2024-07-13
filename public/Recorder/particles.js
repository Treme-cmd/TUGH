particlesJS("particles-js", {
    "particles": {
        "number": {"value": 80},
        "color": {"value": "#ffffff"},
        "shape": {"type": "circle"},
        "opacity": {"value": 0.5},
        "size": {"value": 3},
        "line_linked": {"color": "#ffffff", "opacity": 0.4, "width": 1},
        "move": {"speed": 6, "direction": "top"}
    },
    "interactivity": {
        "events": {"onhover": {"enable": true, "mode": "grab"}},
        "modes": {"grab": {"distance": 140}}
    }
});

document.oncontextmenu = function() {
    return false;
};
  
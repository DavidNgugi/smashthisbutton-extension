export function _(id) { return document.getElementById(id); }

export function process(){
    var button = document.createElement("button");
    button.textContent = "Support Me";
    button.id = "smash-btn";
    button.style.color = "#ffffff";
    button.style.backgroundColor = "orange";
    if(_("top-level-buttons") != undefined && _("smash-btn") == undefined) {
        _("top-level-buttons").appendChild(button);
    }
}
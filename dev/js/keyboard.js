
function Keyboard(sound_player) {
    "use strict";
    var self = this;
    var keys_pressed = {}
    this.key_pressed = function(key) {
        return keys_pressed[key];
    }

    this.addkey = function(player, k) {
        keys_pressed[player.keys[k]] = true;
    }

    this.delkey = function(player, k) {
        keys_pressed[player.keys[k]] = false;
    }
    
    this.onKeyDown = function(evt) {
        keys_pressed[evt.keyCode] = true;
    }

    this.onKeyUp = function(evt) {
        keys_pressed[evt.keyCode] = false;
        if (evt.keyCode >= 49 && evt.keyCode <= 52) {
            var i = evt.keyCode - 49;
            if (evt.altKey) toggle_ai_enabled(i);
            else toggle_player_enabled(i);
        } else if (evt.keyCode == 77) { // 'm'
            sound_player.toggle_sound();
            debug(evt.keyCode);
        }
    }

    function debug(str) {
        document.getElementById('debug').innerHTML = str;
    }

    function toggle_player_enabled(playerIndex) {
        player[playerIndex].enabled = !player[playerIndex].enabled;
    }
    
    function toggle_ai_enabled(playerIndex) {
        var p = player[playerIndex];
        p.ai = !p.ai;
        self.delkey(p, 0);
        self.delkey(p, 1);
        self.delkey(p, 2);
    }
}
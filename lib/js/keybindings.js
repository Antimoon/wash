// for information on keybinding API, see:
// http://craig.is/killing/mice

// @note @kludge: there's some redundancy between here and key-monitor.js that I
// need to remove later. This is really inelegant currently. 

// ctrl+h: toggles connection bar visibility
Mousetrap.bind(['command+h', 'ctrl+h'], function() {
    shell.connection.toggle();
    return false;
});

// ctrl+l: clear the terminal output
Mousetrap.bind(['command+l', 'ctrl+l'], function() {
    shell.output.clear();
    return false;
});

// ctrl+m: toggle to editor mode
Mousetrap.bind(['command+m', 'ctrl+m'], function() {
    wash.editor.mode();
    return false;
});

// ctrl+p: focus on prompt
Mousetrap.bind(['command+p', 'ctrl+p'], function() {
    shell.prompt.focus();
    return false;
});

// up: move back in command history
Mousetrap.bind('up', function() {
    shell.history.backward();
    return false;
});

// down: move forward in command history
Mousetrap.bind('down', function() {
    shell.history.forward();
    return false;
});



export function loadAudioPlayer() {
    const C4 = require('./notes/piano/C4.mp3');
    const D4 = require('./notes/piano/D4.mp3');
    const Db4 = require('./notes/piano/Db4.mp3');
    const E4 = require('./notes/piano/E4.mp3');
    const Eb4 = require('./notes/piano/Eb4.mp3');
    const F4 = require('./notes/piano/F4.mp3');
    const G4 = require('./notes/piano/G4.mp3');
    const Gb4 = require('./notes/piano/Gb4.mp3');
    const A4 = require('./notes/piano/A4.mp3');
    const Ab4 = require('./notes/piano/Ab4.mp3');
    const B4 = require('./notes/piano/B4.mp3');
    const Bp4 = require('./notes/piano/Bp4.mp3');

    const pianoNotes = { C4, D4, Db4, E4, Eb4, F4, G4, Gb4, A4, Ab4, B4, Bp4 }
    return pianoNotes;
};


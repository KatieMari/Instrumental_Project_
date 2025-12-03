// Loads and Returns all Piano Note Audio Files
// Each Note is Imported with 'require()' so Expo can Bundle the Files
export function loadAudioPlayer() {
    // Import Individual Piano Notes
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
    const Bb4 = require('./notes/piano/Bb4.mp3');

    // Store and Expose them as an Onject for Easy Access by Note Name 
    const pianoNotes = { C4, D4, Db4, E4, Eb4, F4, G4, Gb4, A4, Ab4, B4, Bb4 }
    return pianoNotes;
};

// Loads and Returns all Guitar Chord Audio Files
export function loadAudioPlayerGuitar() {
    // Import Indivdual Guitar Chord Samples
    const Am = require('./notes/guitar/ChordAm.m4a');
    const C = require('./notes/guitar/ChordC.m4a');
    const Dm = require('./notes/guitar/ChordDm.m4a');
    const F = require('./notes/guitar/ChordF.m4a');
    const Em = require('./notes/guitar/ChordEm.m4a');
    const G = require('./notes/guitar/ChordG.m4a');

    // Bundle into an Object for Convenient Access by Chord Name
    const guitarNotes = { Am, C, Dm, F, Em, G }
    return guitarNotes;

};
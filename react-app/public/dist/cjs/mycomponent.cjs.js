'use strict';

const core = require('./core-5b66e8ac.js');

core.patchBrowser().then(options => {
  return core.bootstrapLazy([["modal-dialog_2.cjs",[[1,"modal-dialog",{"title":[1],"visible":[1540]}],[1,"side-menu",{"title":[1],"opened":[1540],"showContact":[32],"open":[64]}]]]], options);
});

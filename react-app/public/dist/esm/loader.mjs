import { a as patchEsm, b as bootstrapLazy } from './core-6f6c2c6c.js';

const defineCustomElements = (win, options) => {
  return patchEsm().then(() => {
    bootstrapLazy([["modal-dialog_2",[[1,"modal-dialog",{"title":[1],"visible":[1540]}],[1,"side-menu",{"title":[1],"opened":[1540],"showContact":[32],"open":[64]}]]]], options);
  });
};

export { defineCustomElements };

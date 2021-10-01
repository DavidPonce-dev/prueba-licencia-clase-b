import { ipcMain } from "electron";
import localSvc from "./local";

let svc = localSvc;

export default () => {
  const {
    crearCuestionario,
    leerLista,
    setPregunta
  } = svc;

  ipcMain.handle("crearCuestionario", crearCuestionario);
  ipcMain.handle("leerLista", leerLista);
  ipcMain.handle("setPregunta", setPregunta);
};

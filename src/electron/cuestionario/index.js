import { ipcMain } from "electron";
import localSvc from "./local";

let svc = localSvc;

export default () => {
  const {
    crearCuestionario,
    leerListas,
    setPregunta
  } = svc;

  ipcMain.handle("crearCuestionario", crearCuestionario);
  ipcMain.handle("leerListas", leerListas);
  ipcMain.handle("setPregunta", setPregunta);
};

import { Especie } from "./types";

import { pecesBasicos } from "./pecesBasicos";
import { pecesCosteros } from "./pecesCosteros";


export const peces: Especie[] = [

  ...pecesBasicos,

  ...pecesCosteros,

];
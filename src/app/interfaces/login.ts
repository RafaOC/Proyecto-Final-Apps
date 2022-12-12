//Esta interface se usa para poder mandarlo a la API en el body
export interface login extends Record<string, any>{
    cedula?: string;
    clave?: string;
}



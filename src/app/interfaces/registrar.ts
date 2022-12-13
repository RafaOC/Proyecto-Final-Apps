//Esta interface se usa para poder mandarlo a la API en el body
export interface registrar extends Record<string, any>{
    cedula?: string;
    nombre?:string;
    apellido?:string;
    clave?: string;
    correo?:string;
    telefono?:string;
}



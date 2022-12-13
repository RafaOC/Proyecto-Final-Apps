export interface reportarSituacion extends Record<string, any>{
    titulo?: string;
    descripcion?: string;
    foto?: string;
    latitud?: string;
    longitud?: string;
    token?: string;
}
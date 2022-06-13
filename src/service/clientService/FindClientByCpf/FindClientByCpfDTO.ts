

export interface IFindClientByCpfResponseDTO{
    id?:number; 
    name: string;
    lastName: string;
    email: string;
    cpf: string;
    birthDate: string;
    passport?: string | null;
}
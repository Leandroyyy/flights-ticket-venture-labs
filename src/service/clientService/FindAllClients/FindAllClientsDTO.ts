
export interface IFindAllClientResponseDTO{
    readonly id?:number; 
    name: string;
    lastName: string;
    email: string;
    cpf: string;
    birthDate: string;
    passport?: string | null;
}
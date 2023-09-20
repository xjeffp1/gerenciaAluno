export interface IFindManyDTO {
    nameContains?: string;
    emailContain?: string;
    page: number;
    perPage: number;
}
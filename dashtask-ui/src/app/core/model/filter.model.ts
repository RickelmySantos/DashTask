export interface Filter {
    status: 'pendente' | 'em andamento' | 'concluída' | 'todos';
    searchTerm: string;
}

import { Entity } from 'src/app/core/model/entiy.model';

export interface Tarefa extends Entity<number> {
    title: string;
    descricao: string;
    status: 'pendente' | 'em andamento' | 'concluída';
}

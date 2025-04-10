import { Entity } from 'src/app/core/model/entiy.model';
import { Tarefa } from 'src/app/model/tarefa.model';

export interface Usuario extends Entity<number> {
    nome: string;
    sobrenome: string;
    email: string;
    tarefas: Tarefa[];
}

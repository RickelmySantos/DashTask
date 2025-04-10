import { Route } from '@angular/router';

export const ROUTES: Route[] = [
    {
        path: '',
        loadComponent: () => import('./tarefa/components/tarefa.component').then(m => m.TarefaComponent),
    },
] as Route[];

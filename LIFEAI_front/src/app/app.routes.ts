import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ChatIaComponent } from './pages/chat-ia/chat-ia.component';
import { ConfigComponent } from './pages/config/config.component';
import { ExerciciosComponent } from './pages/exercicios/exercicios.component';
import { IndexComponent } from './pages/index/index.component';
import { RotinaComponent } from './pages/rotina/rotina.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { GraficoComponent } from './pages/home/grafico/grafico.component';
import { ChatbotComponent } from './pages/chatbot/chatbot.component';

export const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'home', component: HomeComponent },
  { path: 'chat-ia', component: ChatIaComponent },
  { path: 'config', component: ConfigComponent },
  { path: 'exercicios', component: ExerciciosComponent },
  { path: 'grafico', component: GraficoComponent },
  { path: 'chatbot', component: ChatbotComponent },
  { path: 'side', component: SidebarComponent },
  { path: 'rotina', component: RotinaComponent },
];

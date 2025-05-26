import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../../api/chat.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resumo',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './resumo.component.html',
  styleUrl: './resumo.component.scss'
})
export class ResumoComponent implements OnInit {
  respostas: any;

  constructor(private chatService: ChatService) {}

  ngOnInit() {
    this.chatService.respostas$.subscribe(res => {
      this.respostas = res;
    });
  }

  obterMensagemIMC(imc: number): string {
    if (imc < 18.5) return '🧊 Você está abaixo do peso';
    if (imc < 25) return '🥦 Você está saudável!';
    if (imc < 30) return '⚠️ Você está com sobrepeso';
    return '🔥 Você está com obesidade';
  }

  calcularPosicao(imc: number): number {
    const min = 15;
    const max = 40;
    const clamped = Math.max(min, Math.min(imc, max));
    return ((clamped - min) / (max - min)) * 100;
  }

  temRespostas(): boolean {
  return this.respostas && Object.keys(this.respostas).length > 0;
  }
}

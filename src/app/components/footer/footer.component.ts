import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';

import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  faBars = faBars;

  public actionSheetButtons = [
    {
      text: 'Nova Entrada',
      icon: 'add-circle',
      handler: () => {
        this.router.navigate(['/new-entry'])
      },
    },
    {
      text: 'Nova Saída',
      icon: 'remove-circle',
      handler: () => {
        this.router.navigate(['/new-exit'])
      },
    },
    {
      text: 'Todas as Movimentações',
      icon: 'list-circle',
      handler: () => {
        console.log('Clicou em Todas as Movimentações');
        // Adicione aqui o código a ser executado ao clicar em Todas as Movimentações
      },
    },
    {
      text: 'Sair',
      icon:'log-in',
      role: 'log-out',
      handler: () => {
        this.router.navigate(['/sign-in']) 
      },
    },
    {
      text: 'Cancelar',
      role: 'cancel',
      icon: 'close-circle'
    }
  ]

  constructor(
    public actionSheetController: ActionSheetController,
    private router: Router
  ) {}
}

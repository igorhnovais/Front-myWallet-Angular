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
      handler: () => {
        this.router.navigate(['/new-entry'])
      },
    },
    {
      text: 'Nova Saída',
      handler: () => {
        this.router.navigate(['/new-exit'])
      },
    },
    {
      text: 'Todas as Movimentações',
      handler: () => {
        console.log('Clicou em Todas as Movimentações');
        // Adicione aqui o código a ser executado ao clicar em Todas as Movimentações
      },
    },
    {
      text: 'Cancelar',
      role: 'cancel',
    }
  ]

  constructor(
    public actionSheetController: ActionSheetController,
    private router: Router
  ) {}
}

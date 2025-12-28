import { Injectable, signal } from '@angular/core';
import { PersonalInfoModal } from './personal-info-form/personal-info-modal';
import { AddOn, Card } from './main-form.modal';

@Injectable({ providedIn: 'root' })
export class MainFormService {
  private personal_info_form: PersonalInfoModal = {
    name: '',
    email: '',
    phnNumber: '',
  };

  private card_list: Card[] = [
    {
      img_url: 'assets/images/icon-arcade.svg',
      title: 'Arcade',
      cost: 9,
      selected: true,
    },
    {
      img_url: 'assets/images/icon-advanced.svg',
      title: 'Advanced',
      cost: 12,
      selected: false,
    },
    {
      img_url: 'assets/images/icon-pro.svg',
      title: 'Pro',
      cost: 15,
      selected: false,
    },
  ];

  private addOns = signal<AddOn[]>([
    {
      checked: true,
      title: 'Online service',
      description: 'Access to multiplayer games.',
      price: 1,
    },
    {
      checked: true,
      title: 'Larger storage',
      description: 'Extra 1TB of cloud save.',
      price: 2,
    },
    {
      checked: false,
      title: 'Customizable profile',
      description: 'Custom theme on your profile.',
      price: 2,
    },
  ]);

  private isYearly = false;

  setPersonalInfoForm = (data: PersonalInfoModal) =>
    (this.personal_info_form = data);

  getPersonalInfoForm = () => this.personal_info_form;

  setCardList = (data: Card[]) => (this.card_list = data);

  getCardList = () => this.card_list;

  setIsYearly = (data: boolean) => (this.isYearly = data);

  getIsYearly = () => this.isYearly;

  setAddOns = (data: AddOn[]) => this.addOns.set(data);

  getAddOns = () => this.addOns().map((a) => ({ ...a }));

  getSelectedPlan = () => {
    return this.card_list.find((card) => card.selected);
  };

  getSelectedAddOns = () => this.addOns().filter((a) => a.checked);
}

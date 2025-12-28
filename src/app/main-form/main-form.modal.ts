export interface Step {
  id: number;
  step_no: string;
  step_title: string;
  active: boolean;
}

export interface Card {
  img_url: string;
  title: string;
  cost: number;
  selected: boolean;
}

export interface AddOn {
  checked: boolean;
  title: string;
  description: string;
  price: number;
}

export interface CartProduct {
  name: string;
  model: string;
  cost_in_credits: string;
  vehicle_class: string;
  cargo_capacity?: string;
  created: string;
  quantity: number;
  isDisabled?: boolean;
}

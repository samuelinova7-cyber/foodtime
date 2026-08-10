export type MenuCategory = 
  | 'pratos-feitos' 
  | 'refeicoes-principais' 
  | 'petiscos-porcoes' 
  | 'lanches-cafe' 
  | 'bebidas-drinks'
  | 'servicos-praia';

export type SubCategory =
  | 'todos'
  // Refeições Principais
  | 'carnes-aves'
  | 'peixes-frutos-mar'
  | 'pratos-especiais'
  // Petiscos & Porções
  | 'petiscos-tradicionais'
  | 'petiscos-mar'
  | 'porcoes-guarnicoes'
  // Bebidas & Drinks
  | 'sem-alcool'
  | 'sucos-detox'
  | 'cervejas'
  | 'drinks-coqueteis';

export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  accompaniments?: string; // e.g. "arroz, feijão, macarrão, salada..."
  price: number;
  category: MenuCategory;
  subCategory?: SubCategory;
  categoryName: string;
  subCategoryName?: string;
  badge?: string;
  isPopular?: boolean;
  isPromo?: boolean;
  serves?: string; // e.g. "Individual", "Serve 2 a 3 pessoas"
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
  notes?: string;
}

export interface TableReservation {
  name: string;
  phone: string;
  date: string;
  time: string;
  peopleCount: number;
  locationPreference: 'beira-mar' | 'area-coberta' | 'primeira-linha';
  needsBeachTable: boolean; // Aluguel de Mesa R$50
  specialRequests?: string;
}

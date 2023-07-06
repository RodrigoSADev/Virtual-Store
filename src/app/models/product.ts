export interface Product {
  id: string;
  fotos: [
    {
      titulo: string;
      src: string;
    }
  ];
  nome: string;
  preco: string;
}

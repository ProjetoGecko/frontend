import Categoria from "./Categoria.ts"

interface Produto{
  id: number;
  nome: string;
  descricao: string;
  preco:number;
  estado: number;
  reciclavel:number;
  foto: string;
  curtidas: number;
  categoria?: Categoria | null
}

export default Produto;
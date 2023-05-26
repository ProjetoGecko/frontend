import Categoria from "./Categoria.ts"
import User from "./User.ts";

interface Produto{
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  estado: number;
  reciclavel: number;
  foto: string;
  curtidas: number;
  categoria?: Categoria | null
  usuario?: User | null
}

export default Produto;
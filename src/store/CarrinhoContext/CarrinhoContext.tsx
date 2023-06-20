import React, { createContext, useState, useContext } from 'react';
import Produto from '../../models/Produto';
import { toast } from 'react-toastify';

interface CarrinhoContextData {
    produtosNoCarrinho: Produto[];
    adicionarAoCarrinho: (produto: Produto) => void;
    removerDoCarrinho: (produto: Produto) => void;
}

export const CarrinhoContext = createContext<CarrinhoContextData>({
    produtosNoCarrinho: [],
    adicionarAoCarrinho: () => { },
    removerDoCarrinho: () => { },
});


export const CarrinhoProvider: React.FC = ({ children }) => {
    const [produtosNoCarrinho, setProdutosNoCarrinho] = useState<Produto[]>([]);

    const adicionarAoCarrinho = (produto: Produto) => {
        const produtoExistente = produtosNoCarrinho.find((p) => p.id === produto.id);

        if (produtoExistente) {
            const produtosAtualizados = produtosNoCarrinho.map((p) => {
                if (p.id === produto.id) {
                    return {
                        ...p
                    };
                }
                return p;
            });

            setProdutosNoCarrinho(produtosAtualizados);
        } else {
            const novoProduto: Produto = {
                ...produto
            };

            setProdutosNoCarrinho([...produtosNoCarrinho, novoProduto]);
        }
        toast.success('Produto adicionado ao carrinho!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
    };

    const removerDoCarrinho = (produto: Produto) => {
        const produtosAtualizados = produtosNoCarrinho.filter((p) => p.id !== produto.id);
        setProdutosNoCarrinho(produtosAtualizados)
        toast.success('Produto removido do carrinho.', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
    };

    return (
        <CarrinhoContext.Provider value={{ produtosNoCarrinho, adicionarAoCarrinho, removerDoCarrinho }}>
            {children}
        </CarrinhoContext.Provider>
    );
};

export default CarrinhoProvider;
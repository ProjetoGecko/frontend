import React, { useEffect, useRef, useState } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import botImage from '../../images/bot.png'
import './Chatbot.css'
import tchaugecko from '../../images/tchaugecko.png'
import { useSelector } from 'react-redux';
import User from '../../models/User';
import { busca } from '../../services/Service';
import { UserState } from '../../store/token/Reducer';




function MycChatbot() {
    const token = useSelector<UserState, UserState['tokens']>(
        (state) => state.tokens
    )

    const idUser = useSelector<UserState, UserState['id']>(
        (state) => state.id
    )

    const [user, setUser] = useState<User>({
        id: 0,
        nome: '',
        usuario: '',
        foto: '',
        senha: '',
        token: ''
    })

    async function getUser() {
        try {
            await busca(`/usuarios/${idUser}`, setUser, {
                headers: {
                    'Authorization': token
                }
            })

            onCarregado()
        } catch {

        }
    }

    useEffect(() => {
        getUser()
    }, [idUser])

    const [carregado, setCarregado] = useState(false)
    const onCarregado = () => {
        if (!carregado) {
            setCarregado(true)
        }
    }

    const theme = {


        background: '#F6F4EB',
        fontFamily: 'Poppins',
        headerBgColor: '#55A630',
        headerFontColor: '#fff',
        headerFontSize: '15px',
        botBubbleColor: '#283E30',
        botFontColor: '#fff',
        userBubbleColor: '#55A630',
        userFontColor: 'white',
        alignItems: "center",
        botAvatar: botImage,
        userAvatar: token.length != 0 ? user.foto : undefined

    };


    const steps = [

        {
            id: "Greet",
            message: "Olá! Sou o Gecko, seu assistente virtual! Bem-vindo!",
            trigger: "Done",
        },

        {
            id: "Done",
            message: "Por favor, insira seu nome:",
            trigger: "waiting1",
        },
        {
            id: "waiting1",
            user: true,
            trigger: "Name",
        },
        {
            id: "Name",
            message: "Olá, {previousValue}! Selecione sua dúvida:",
            trigger: "issues",
        },

        {
            id: "issues",
            options: [
                { value: "oqGecko", label: "O que é o Gecko?", trigger: "oqGecko" },
                { value: "pqGecko", label: "Por que comprar no Gecko?", trigger: "pqGecko" },
                { value: "nomeGecko", label: "Qual o significado do nome 'Gecko'?", trigger: "nomeGecko" },
            ]
        },
        {
            id: "oqGecko",
            message:
                "O Gecko é um e-commerce que tem como objetivo ajudar a salvar o mundo por meio de práticas sustentáveis. Ele oferece uma ampla variedade de produtos de diferentes categorias, como moda, eletrônicos, artigos para casa e muito mais. O Gecko se preocupa com o meio ambiente, promovendo a utilização de embalagens eco-friendly, selecionando produtos sustentáveis e buscando parcerias com organizações ambientais. Além disso, o Gecko tem o compromisso de educar e conscientizar seus clientes sobre a importância da sustentabilidade. Comprando no Gecko, você estará contribuindo para um futuro mais sustentável e apoiando um e-commerce ético e responsável.",
            trigger: "newQuestion",
        },

        {
            id: "pqGecko",
            message:
                "Ao escolher o Gecko, você apoia um e-commerce sustentável e ético, que se preocupa com o meio ambiente e busca promover práticas responsáveis, como o uso de embalagens eco-friendly, a oferta de produtos sustentáveis, parcerias com organizações ambientais e a promoção da educação e conscientização sobre sustentabilidade",
            trigger: "newQuestion",
        },

        {
            id: "nomeGecko",
            message:
                "O nome do nosso e-commerce foi inspirado no lagarto Gecko, que equilibra o ecossistema árido onde habita, sendo um símbolo de resiliência em um local inóspito. Nossa proposta é contribuir para o equilíbrio da Terra, em um momento em que o meio ambiente passa por um caos devido à poluição no geral. Por isso, promovemos práticas de produção e consumo responsáveis, a fim de que todos possam deixar suas pegadas verdes no mundo.",
            trigger: "newQuestion",
        },

        {
            id: "newQuestion",
            message: "Gostaria de fazer outra pergunta?",
            trigger: "resp"

        },
        {
            id: "resp",
            options: [
                { value: "sim", label: "Sim", trigger: "issues" },
                { value: "nao", label: "Não", trigger: "end-message" }
            ]
        },
        {
            id: 'end-message',
            component: (
                <div>
                    <p>
                    Agradecemos! Se você deseja conversar conosco, por favor, acesse a página de contatos. Estaremos lá para atendê-lo! 💚
                    </p>
                    <img src={tchaugecko} alt="Imagem" />
                </div>
            ),
            asMessage: true,
            end: true,
        },

    ];
    return (

        <ThemeProvider theme={theme}>
            <div className="chatbot-container" key={carregado.toString()}>
                <ChatBot
                    steps={steps}
                    botAvatar={theme.botAvatar}
                    userAvatar={theme.userAvatar} />
            </div>
        </ThemeProvider>

    );

}

export default MycChatbot;
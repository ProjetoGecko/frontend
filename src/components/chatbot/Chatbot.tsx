import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import botImage from '../../images/bot.png'
import './Chatbot.css'




function MycChatbot() {

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
    

    };


    const steps = [

        {
            id: "Greet",
            message: "Olá, sou o Gecko, seu assistente! Bem-vindo!",
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
            message: "Olá {previousValue}, selecione sua dúvida",
            trigger: "issues",
        },

        {
            id: "issues",
            options: [
                { value: "oqGecko", label: "O que é o Gecko?", trigger: "oqGecko" },
                { value: "pqGecko", label: "Por que comprar no Gecko?", trigger: "pqGecko" },
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
            message: 'Obrigado! Para mais informações, entre em contato através do email: projetogecko@gmail.com ❤',
            end: true,
        },

    ];
    return (

        <ThemeProvider theme={theme}>
              <div className="chatbot-container">
            <ChatBot
                steps={steps}
                botAvatar={theme.botAvatar} />
                </div>
        </ThemeProvider>
        
    );

}

export default MycChatbot;
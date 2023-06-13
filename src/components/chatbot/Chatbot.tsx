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
        botAvatar: botImage

    };






    const steps = [

        {
            id: "Greet",
            message: "Olá, sou Gecko assistente do Gecko! Bem vindo!",
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
                { value: "criadores", label: "Quem são os criadores do Gecko?", trigger: "criadores" },
            ]
        },
        {
            id: "oqGecko",
            message:
                "É uma ecommerce com o objetivo de Ajudar o mundo",
            trigger: "newQuestion",
        },

        {
            id: "criadores",
            message:
                "O Gecko foi criado por: Bruno Kauã, Keteleyn Medina, Kaique Ferreira, Lais Sales, Leticia Oliveira e Julia Valerio",
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
            message: 'Obrigada!Para mais informações entre em contato:email do gecko ❤',
            end: true,
        },

    ];
    return (

        <ThemeProvider theme={theme}>
            <ChatBot
                steps={steps}
                botAvatar={theme.botAvatar} />
        </ThemeProvider>
    );

}

export default MycChatbot;
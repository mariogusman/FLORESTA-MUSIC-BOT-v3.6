
const { ApplicationCommandOptionType } = require('discord.js');
const db = require("../mongoDB");

const { EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require('discord.js');
const { ButtonStyle } = require('discord.js');

module.exports = {
  name: "help",
  description: "Get information about bot and commands.",
  permissions: "0x0000000000000800",
  options: [],

  run: async (client, interaction) => {
    try {
      const musicCommandsEmbed = new EmbedBuilder()
        .setColor(client.config.embedColor)
        .setTitle('🎸 **Music Commands**')
        .addFields(
          { name: '🎹 Play', value: 'Toca uma música a partir de um link ou texto fornecido' },
          { name: '⏹️ Stop', value: 'Faz o bot parar de tocar música e sair do canal de voz' },
          { name: '📊 Queue', value: 'Visualiza e gerencia a fila de músicas do servidor' },
          { name: '⏭️ Skip', value: 'Pula a música que está tocando atualmente' },
          { name: '⏸️ Pause', value: 'Pausa a música que está tocando no momento' },
          { name: '▶️ Resume', value: 'Retoma a música que estava pausada' },
          { name: '🔁 Loop', value: 'Ativa ou desativa o modo de repetição para a fila ou música atual' },
          { name: '🔄 Autoplay', value: 'Ativa ou desativa a reprodução automática [tocar músicas aleatórias]' },
          { name: '⏩ Seek', value: 'Avança para um tempo específico na música atual' },
          { name: '⏮️ Previous', value: 'Toca a música anterior na fila' },
          { name: '🔀 Shuffle', value: 'Embaralha as músicas na fila' },
          { name: '📃 playlist', value: 'Gerencia as playlists' }
        )
        .setImage(`https://cdn.discordapp.com/attachments/532563156615036940/1223699897715396709/image.png?ex=661ace56&is=66085956&hm=937f19bfabd604f80d01826c4b0c89bfe9be4ea65c01183ed25b6af88c9280e4&`); 

      const basicCommandsEmbed = new EmbedBuilder()
        .setColor(client.config.embedColor)
        .setTitle('✨ **Basic Commands**')
        .addFields(
          { name: '🏓 Ping', value: "Verifica a latência do bot" },
          { name: '🗑️ Clear', value: 'Limpa a fila de músicas deste servidor' },
          { name: '⏱️ Time', value: 'Exibe o tempo de reprodução da música atual' },
          { name: '🎧 Filter', value: 'Aplica filtros para melhorar o som como preferir' },
           { name: '🎵 Now Playing', value: 'Exibe informações sobre a música que está tocando no momento' },
          { name: '🔊 Volume', value: 'Ajusta o volume da música [ouvir em volumes altos é arriscado]' },
        ) 
       .setImage('https://cdn.discordapp.com/attachments/1150827819547504741/1168917372267151370/standard.gif?ex=65538222&is=65410d22&hm=b4994392f44679da41fc9304eb69deaa3769e136057556deec0db69ae8d33a97&')


      interaction.reply({
        embeds: [musicCommandsEmbed, basicCommandsEmbed],
        components: [row]
      }).catch(e => {});
    } catch (e) {
      console.error(e);
    }
  },
};

const { EmbedBuilder } = require('discord.js');

module.exports = {
    data: {
        name: 'reactionrole',
        description: 'Sets up a reaction role message!',
    },
    async execute(interaction) {
        const channelId = '844634462646042645'; // Change to your channel ID
        const FB1Role = interaction.guild.roles.cache.find(role => role.name === 'FB1'); // Change to your role name
        const FB2Role = interaction.guild.roles.cache.find(role => role.name === 'FB2');
        const FB3Role = interaction.guild.roles.cache.find(role => role.name === 'FB3');
        const FB4Role = interaction.guild.roles.cache.find(role => role.name === 'FB4');
        const FB5Role = interaction.guild.roles.cache.find(role => role.name === 'FB5');
        const FB6Role = interaction.guild.roles.cache.find(role => role.name === 'FB6');
        const FB7Role = interaction.guild.roles.cache.find(role => role.name === 'FB7');
        const WatcherRole = interaction.guild.roles.cache.find(role => role.name === 'Watcher');
        const GamerRole = interaction.guild.roles.cache.find(role => role.name === 'Gaming');

        const FB1 = '1️⃣';
        const FB2 = '2️⃣';
        const FB3 = '3️⃣';
        const FB4 = '4️⃣';
        const FB5 = '5️⃣';
        const FB6 = '6️⃣';
        const FB7 = '7️⃣';
        const Watcher = '👀';
        const Gamer = '🎮';

        const embed1 = new EmbedBuilder()
            .setColor('#e42643')
            .setTitle('Wähle deinen Fachbreich!')
            .setDescription(
                `${FB1} - Fachbereich Landwirtschaft, Ökotrophologie und Landschaftsentwicklung\n` +
                `${FB2} - Fachbereich Wirtschaft\n` +
                `${FB3} - Fachbereich Architektur, Facility Management und Geoinformation\n` +
                `${FB4} - Fachbereich Design\n` +
                `${FB5} - Fachbereich Informatik und Sprache\n` +
                `${FB6} - Fachbereich Elektrotechnik, Maschinenbau und Wirtschaftsingenieurwesen\n` +
                `${FB7} - Fachbereich Angewandte Biowissenschaften und Prozesstechnik\n`
            );

        const embed2 = new EmbedBuilder()
            .setColor('#e42643')
            .setTitle('Wähle deinen Fachbreich!')
            .setDescription(
                `${Watcher} - Videospiele und Gaming\n` +
                `${Gamer} - Chats Übersicht\n`
            );

        const messageEmbed1 = await interaction.channel.send({ embeds: [embed1] });
        await messageEmbed1.react(FB1);
        await messageEmbed1.react(FB2);
        await messageEmbed1.react(FB3);
        await messageEmbed1.react(FB4);
        await messageEmbed1.react(FB5);
        await messageEmbed1.react(FB6);
        await messageEmbed1.react(FB7);

        const messageEmbed2 = await interaction.channel.send({ embeds: [embed2] });
        await messageEmbed2.react(Watcher);
        await messageEmbed2.react(Gamer);

        // Handle reactions
        const handleReaction = async (reaction, user, add) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (reaction.message.channel.id !== channelId) return;

            const member = reaction.message.guild.members.cache.get(user.id);

            switch (reaction.emoji.name) {
                case FB1:
                    add ? await member.roles.add(FB1Role) : await member.roles.remove(FB1Role);
                    break;
                case FB2:
                    add ? await member.roles.add(FB2Role) : await member.roles.remove(FB2Role);
                    break;
                case FB3:
                    add ? await member.roles.add(FB3Role) : await member.roles.remove(FB3Role);
                    break;
                case FB4:
                    add ? await member.roles.add(FB4Role) : await member.roles.remove(FB4Role);
                    break;
                case FB5:
                    add ? await member.roles.add(FB5Role) : await member.roles.remove(FB5Role);
                    break;
                case FB6:
                    add ? await member.roles.add(FB6Role) : await member.roles.remove(FB6Role);
                    break;
                case FB7:
                    add ? await member.roles.add(FB7Role) : await member.roles.remove(FB7Role);
                    break;
                case Watcher:
                    add ? await member.roles.add(WatcherRole) : await member.roles.remove(WatcherRole);
                    break;
                case Gamer:
                    add ? await member.roles.add(GamerRole) : await member.roles.remove(GamerRole);
                    break;
            }
        };

        // Register reaction listeners globally
        client.on(Events.MessageReactionAdd, async (reaction, user) => {
            await handleReaction(reaction, user, true);
        });

        client.on(Events.MessageReactionRemove, async (reaction, user) => {
            await handleReaction(reaction, user, false);
        });

        await interaction.reply('Reaction roles have been set up!');
    },

    async execute(message, args, client) {
        // This code can be adapted to handle text-based command execution if needed
    }
};

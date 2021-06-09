const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '+'
const luhv = require('luhv');

client.once('ready', () => {
	console.log('Ready!');
});


client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

    if (command === 'ping') {
		message.channel.send('Pong.');
	} else if (command === 'beep') {
		message.channel.send('Boop.');
	} else if (command === 'truth', 't'){
        luhv.truth(question => {
            message.channel.send(question);
        });
    } else if (command === 'dare', 'd'){
        luhv.dare(dare => {
            message.channel.send(dare);
        });
    }
});

client.login('ODUyMzEzMDA0MDMyNzg2NDQz.YMFAVw.C2EFWBMtyJ8AJsC6aayuInNNZLw');
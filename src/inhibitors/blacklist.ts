import Inhibitor from '@inari/struct/bot/Inhibitor';
import { Message } from 'discord.js';

export default class extends Inhibitor {
    constructor() {
        super('blacklist', {
            reason: 'blacklist',
            type: 'all'
        })
    }

    exec(message: Message) {
        const blacklist = [''];
        return blacklist.includes(message.author.id);
    }
};
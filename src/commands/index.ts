import { Client, CommandInteraction } from "discord.js";

interface Command {
  name: string;
  description: string;
  execute: (interaction: CommandInteraction, client?: Client) => void;
}

const commands: Command[] = [
  {
    name: "ping",
    description: "Replies with Pong!",
    execute: async (interaction: CommandInteraction) => {
      await interaction.reply("Pong!");
    },
  },
];

export default commands;

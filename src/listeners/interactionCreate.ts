import { Client, Interaction } from "discord.js";
import commands from "../commands";

export default (client: Client): void => {
  client.on("interactionCreate", async (interaction: Interaction) => {
    if (!interaction.isChatInputCommand()) return;
    const command = commands.find((c) => c.name === interaction.commandName);
    if (!command) {
      return;
    }

    command.execute(interaction);
  });
};

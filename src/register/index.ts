import * as dotenv from "dotenv";
dotenv.config();
import { REST, Routes } from "discord.js";
import commands from "../commands";

if (
  process.env.DISCORD_TOKEN === undefined ||
  process.env.APPLICATION_ID === undefined
) {
  throw Error("Invalid env");
}

const DISCORD_TOKEN = process.env.DISCORD_TOKEN;
const APPLICATION_ID = process.env.APPLICATION_ID;

const rest = new REST({ version: "10" }).setToken(DISCORD_TOKEN);

const registerCommands = async () => {
  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(Routes.applicationCommands(APPLICATION_ID), {
      body: commands.map(({ execute, ...otherAttributes }) => otherAttributes),
    });

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
};

export default registerCommands;

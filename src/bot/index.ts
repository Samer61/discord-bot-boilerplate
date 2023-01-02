import * as dotenv from "dotenv";
dotenv.config();
import { Client, GatewayIntentBits } from "discord.js";
import registerCommands from "../register";
import ready from "../listeners/ready";
import interactionCreate from "../listeners/interactionCreate";

registerCommands();
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
ready(client);
interactionCreate(client);
client.login(process.env.DISCORD_TOKEN);

export default client;

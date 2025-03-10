import { Client, Databases, Account, User, Preferences } from 'appwrite';

const client = new Client();

client
  .setEndpoint('https://cloud.appwrite.io/v1') // Your Appwrite Endpoint
  .setProject('67bc6c700000d69de38b'); // Your project ID

const databases = new Databases(client);
const account = new Account(client);

export { databases, account, User, Preferences };
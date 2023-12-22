import { Client } from 'appwrite';
import { Client, Account, ID } from "appwrite";

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65853296578eb163bc3b');



const account = new Account(client);


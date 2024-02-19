import { gql } from 'apollo-server';
import fs from 'fs';
import path from 'path';

const typeDefsPath = path.join(__dirname, 'schema', 'type_defs.gql');

const typeDefsContent = fs.readFileSync(typeDefsPath, 'utf8');

const typeDefs = gql(typeDefsContent);
export { typeDefs };
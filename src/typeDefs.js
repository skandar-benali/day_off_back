import { loadFilesSync, mergeTypeDefs } from "graphql-tools";

const loadedTypeDefs = loadFilesSync(__dirname);
const typeDefs = mergeTypeDefs(loadedTypeDefs);

export default typeDefs;

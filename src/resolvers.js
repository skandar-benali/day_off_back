import user from "./entities/users";

const resolvers = () => {
  let interfaces = {};
  const entities = [user];
  entities.forEach((entity) => {
    // collect queries
    const { queries, mutations, ...rest } = entity;
    if (queries && Object.keys(queries).length) {
      const { Query, ...rest } = interfaces;
      const newQuery = { ...Query, ...queries };
      interfaces = {
        ...rest,
        Query: newQuery
      };
    }
    // collect mutations
    if (mutations && Object.keys(mutations).length) {
      const { Mutation, ...rest } = interfaces;
      const newMutation = { ...Mutation, ...mutations };
      interfaces = {
        ...rest,
        Mutation: newMutation
      };
    }
    // resolvers
    if (rest && Object.keys(rest).length) {
      interfaces = {
        ...interfaces,
        ...rest
      };
    }
  });

  console.log("interface=======>", interfaces);
  return interfaces;
};

export default resolvers();

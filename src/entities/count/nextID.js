import Count from "./model";

const nextID = async (field) => {
  const updates = { $inc: {} };
  updates.$inc[field] = 1;
  const newIds = await Count.findOneAndUpdate({ id: "COUNTER_ID" }, updates, {
    upsert: true,
    new: true
  });
  return newIds[field];
};

export default nextID;

const notify = (msg) => {
  console.error(msg);
  process.exit(1);
};

export default notify;

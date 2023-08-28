export const loader = defineServerLoader(async () => {
  console.log('in root loader...');
  return { foo: 'index loader data' };
});

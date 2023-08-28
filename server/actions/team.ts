export const loader = defineServerLoader(async (event) => {
  const params = getQuery(event);
  console.log('called team loader');

  return { data: { team: 'Main Team' } };
});

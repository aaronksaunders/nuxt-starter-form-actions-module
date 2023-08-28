export const loader = defineServerLoader(async (event) => {
  const params = getQuery(event);
  console.log('called players loader');

  return { data: { player: params?.slug } };
});

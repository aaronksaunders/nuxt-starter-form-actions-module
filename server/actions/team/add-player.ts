export default defineFormActions({
  default: async (event) => {
    console.log("Add Player called !");
    const formData = await readFormData(event);
    const name = formData.get("name") as string;

    return actionResponse(event, { player: { name } }, { redirect : "/team/add-player"});
  },
});

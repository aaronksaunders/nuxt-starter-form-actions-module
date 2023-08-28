export default defineFormActions({
    default: () => {
      console.log("Login called !")
    },
    register: (event) => {
        // ...
        return actionResponse(event, { register: true })
      }
  })
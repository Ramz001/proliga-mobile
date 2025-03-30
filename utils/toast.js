export const toast = () => {
  return {
    warning: (message, options) => {
      console.log(message, options)
    },
    success: (message, options) => {
      console.log(message, options)
    },
    error: (message, options) => {
      console.log(message, options)
    },
    
  }
}
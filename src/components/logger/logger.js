
const Logger = (realMessage) => ( 
  console.log(realMessage)
)
Logger.defaultProps = {
  myCustomMessage:"Hello World"
};
export default Logger;

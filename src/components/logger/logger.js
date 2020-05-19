
const logger = (realMessage) => ( 
  console.log(realMessage)
)
logger.defaultProps = {
  myCustomMessage:"Hello World"
};
export default logger;

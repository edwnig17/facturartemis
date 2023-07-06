import app from "./app.js";
const main = ()=>{
    app.listen(app.get("port"));
    console.log(`SI funshion ${app.get("port")}`);
}
main();
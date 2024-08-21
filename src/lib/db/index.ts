import PocketBase from "pocketbase";

const pb = new PocketBase(process.env.POCKETBASE);

export default pb;

import connectedDB from "@/config/database";
import Property from "@/models/Property";

export const GET = async() => {
  try {
    await connectedDB();
    const properties = await Property.find({});
    return new Response(properties, {
      status: 200,
    });
  } catch (err) {
    return new Response("Some thing wrong", { status: 500 });
  }
};

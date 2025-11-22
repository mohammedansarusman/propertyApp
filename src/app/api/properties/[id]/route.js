import connectedDB from "@/config/database";
import Property from "@/models/Property";

export const GET = async (request, { params }) => {
    const {id} = await params;
  try {
    await connectedDB();
    const property = await Property.findById(id);

    if (!property)
      return new Response("Property not found", { status: 404 });

    return new Response(property, {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });

  } catch (err) {
    return new Response("Something went wrong", { status: 500 });
  }
};

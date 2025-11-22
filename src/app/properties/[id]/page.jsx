import GoBack from "@/components/Goback";
import PropertDetails from "@/components/PropertyDetails";
import PropertyHeaderImage from "@/components/PropertyHeaderImage";
import connectedDB from "@/config/database";
import Property from "@/models/Property";

export default async function PropertyIdPage({ params }) {
  const { id } = await params;
  const property = await Property.findById(id).lean();
  const { images } = property;
  return (
    <>
      <div>
        {/* main image render */}
        <PropertyHeaderImage image={images} />
        {/* go to homr page */}
        <GoBack />
        {/* property information */}
        <section className="bg-blue-50">
          <div className="container m-auto py-10 px-6">
            <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
              <PropertDetails property = {property}/>
            </div>
          </div>
        </section>

        {/* <h1>Property List page</h1>
        <p>{property.name}</p> */}
      </div>
    </>
  );
}

import PropertyCard from "@/components/PropertyCard";
// import properties from "@/properties.json";
import connectedDB from "@/config/database";
import Property from "@/models/Property";
import Link from "next/link";

const PropertyPage = async () => {
  await connectedDB();
  const properties = await Property.find({});
  console.log("properties==>", properties);
  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {properties.map((property) => (
            <div key={property._id}>
              {/* <Link href={`/properties/${property._id}`}>  */}
                <PropertyCard property={property} />
              {/* </Link> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyPage;

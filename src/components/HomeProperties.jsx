import PropertyCard from "./PropertyCard";
import properties from '@/properties.json'
const HomeProperties = () => {
  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        <h1 className="text-3xl mt-2 mb-3 font-semibold text-blue-800">Recent Properties</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {properties.map((property,index) => (
            index<3 && <div key={property._id}>
              <PropertyCard property={property} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeProperties;

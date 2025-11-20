import Image from "next/image";
const PropertyHeaderImage = ({image}) => {
    console.log("url=>",image[0])
    return ( <section>
      <div className="container-xl m-auto">
        <div className="grid grid-cols-1">
          <Image
            src={`/images/properties/${image[0]}`}
            alt=""
            width={1000}
            height={0}
            class="object-cover h-[400px] w-full"
            // width="1000"
          />
        </div>
      </div>
    </section>
 );
}
 
export default PropertyHeaderImage;
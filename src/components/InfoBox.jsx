import Link from "next/link";
const InfoBox = ({children, heading, backGroundColor, textColor, buttonInfo}) => {
  const {text,link, backColor} = buttonInfo;
  


    return ( <div className={`${backGroundColor} ${ textColor} p-6 rounded-lg shadow-md`}>
            <h2 className="text-2xl font-bold">{heading}</h2>
            <p className={`mt-2 mb-4 ${backGroundColor}`}>{children}</p>
            <Link
              href={link}
              className={`inline-block text-white rounded-lg px-4 py-2 hover:bg-gray-700 ${backColor}`}
            >{text}
            </Link>
          </div> );
}
 
export default InfoBox;
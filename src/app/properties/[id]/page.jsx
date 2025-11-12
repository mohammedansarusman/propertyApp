export default async function PropertyIdPage({params, searchParams}){
    console.log("params", await params)
    const result = await params;
    const result1 = await searchParams;
    console.log("result=>",result);
    console.log("search params=>", result1.name);
    console.log(result.id);


    return(<div>
        <h1>Property List page</h1>
        {/* <p>{result}</p> */}
        <p>{result.id}</p>
       
    </div>)
}


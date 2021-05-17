async function tempo(request, response) {
    const dynamicDate = new Date();
    
    respose.setHeader('Cache-control', 's-maxage=10', 'stale-while-revalidate');


    response.json({
        date: dynamicDate.toGMTString()
    })
}


export default tempo;

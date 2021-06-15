exports.requestPurchase = (request, response) => {
    console.dir(request.body);

    response.status(201).send({
        "status": 201,
        "message": "Purchase requested sucessfully",
        "purchaseCode": "assa21281278sasa2"
    });
};

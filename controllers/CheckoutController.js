exports.requestPurchase = (request, response, next) => {
    response.status(201).send({
        "status": 201,
        "message": "Purchase requested sucessfully",
        "purchaseCode": "assa21281278sasa2"
    });
};

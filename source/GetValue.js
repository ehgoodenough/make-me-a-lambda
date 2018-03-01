// Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.

// This is the simplest lambda example. It doesn't have
// any twitch authorization or database operations or
// whatever. It just reads the request body, and does math.

const MALFORMED_ERROR_MESSAGE = "The request body is missing some data."

module.exports.handler = (event, context, callback) => {

    // Try to parse the request body
    // for an id. If it fails, return
    // an error response.
    const id = event.pathParameters.id
    if(id === undefined) {
        callback(null, {
            "statusCode": 400,
            "body": MALFORMED_ERROR_MESSAGE,
            "headers": {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": true
            }
        })
    }

    // Echo the id.
    callback(null, {
        "statusCode": 200,
        "body": id,
        "headers": {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true
        }
    })
}

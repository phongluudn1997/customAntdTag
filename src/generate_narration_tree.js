const generaTree = narration => {
    if(!Array.isArray(narration.narration)){
        return {
            title: narration.title + ' - ' + narration.narration.code
        }
    } else{
        let children = []
        narration.narration.forEach(narration => {
            children.push(generaTree(narration))
        })
        return {
            title: 'Composite Rule',
            children
        }
    }
}

const generateFromJSON = jsonFile => {
    let dependentResult = []
    let metaResult = []
    jsonFile.narration.forEach(n => {
        if(n.is_dependency){
            dependentResult.push(generaTree(n))
        } else {
            metaResult.push(generaTree(n))
        }
    })
    return [dependentResult, metaResult]
}



const sample = {
    "statement_id": "e0d7af74-ef72-4620-8fa2-da92e0db5f7b",
    "run_id": "f2f5a3ee-03e9-4e91-b881-d66220ea92e1",
    "pair_id": "8483906a-7f47-4ac1-907f-e6d4a6c119a1",
    "result": false,
    "narration": [
        {
            "statement_id": "37b55186-c35f-4ffe-9708-0c1a76cd1b62",
            "run_id": "a0daeb53-8569-4c9e-923f-cafe030b5a43",
            "pair_id": "8483906a-7f47-4ac1-907f-e6d4a6c119a1",
            "result": false,
            "narration": [
                {
                    "statement_id": "3f7ab820-ba51-4ac2-bbba-6c372a9ab6b0",
                    "run_id": "a0daeb53-8569-4c9e-923f-cafe030b5a43",
                    "pair_id": "8483906a-7f47-4ac1-907f-e6d4a6c119a1",
                    "result": false,
                    "narration": {
                        "cap_type": "C",
                        "code": "MEM10205",
                        "message": "User does not have any required competencies for [MEM10205]",
                        "hint": null
                    },
                    "title": "Certificate I in Boating Services",
                    "_created": "2020-05-18T03:33:38",
                    "is_dependency": false
                },
                {
                    "statement_id": "40afccdb-b054-448d-8f5c-8f23ba44871c",
                    "run_id": "a0daeb53-8569-4c9e-923f-cafe030b5a43",
                    "pair_id": "8483906a-7f47-4ac1-907f-e6d4a6c119a1",
                    "result": false,
                    "narration": {
                        "cap_type": "C",
                        "code": "MEM40205",
                        "message": "User does not have any required competencies for [MEM40205]",
                        "hint": null
                    },
                    "title": "Certificate IV in Boating Services",
                    "_created": "2020-05-18T03:33:38",
                    "is_dependency": false
                },
                {
                    "statement_id": "6cb636ac-5de5-438b-b18d-de6aacd1868f",
                    "run_id": "a0daeb53-8569-4c9e-923f-cafe030b5a43",
                    "pair_id": "8483906a-7f47-4ac1-907f-e6d4a6c119a1",
                    "result": false,
                    "narration": {
                        "cap_type": "C",
                        "code": "LGA20104",
                        "message": "User does not have any required competencies for [LGA20104]",
                        "hint": null
                    },
                    "title": "Certificate II in Local Government",
                    "_created": "2020-05-18T03:33:38",
                    "is_dependency": false
                },
                {
                    "statement_id": "28c6a774-4727-4faf-8dc8-1a202a9f4178",
                    "run_id": "a0daeb53-8569-4c9e-923f-cafe030b5a43",
                    "pair_id": "8483906a-7f47-4ac1-907f-e6d4a6c119a1",
                    "result": true,
                    "narration": {
                        "cap_type": "RULE",
                        "code": "RULE",
                        "message": "Years is less than minimum required years of citizenship of 0.0",
                        "hint": null
                    },
                    "title": "Minimum Years Of Citizenship",
                    "_created": "2020-05-18T03:33:38",
                    "is_dependency": false
                }
            ],
            "title": "",
            "_created": "2020-05-18T03:33:38",
            "is_dependency": true
        },
        {
            "statement_id": "38238597-9905-46c3-bca1-49221cd8a415",
            "run_id": "f2f5a3ee-03e9-4e91-b881-d66220ea92e1",
            "pair_id": "8483906a-7f47-4ac1-907f-e6d4a6c119a1",
            "result": false,
            "narration": {
                "cap_type": "C",
                "code": "MEM30405",
                "message": "User does not have any required competencies for [MEM30405]",
                "hint": null
            },
            "title": "Certificate III in Engineering - Electrical/Electronic Trade",
            "_created": "2020-05-18T03:33:39",
            "is_dependency": false
        },
        {
            "statement_id": "796bea29-0f0a-453d-a301-482c4626a0a5",
            "run_id": "f2f5a3ee-03e9-4e91-b881-d66220ea92e1",
            "pair_id": "8483906a-7f47-4ac1-907f-e6d4a6c119a1",
            "result": false,
            "narration": {
                "cap_type": "C",
                "code": "LGA50208",
                "message": "User does not have any required competencies for [LGA50208]",
                "hint": null
            },
            "title": "Diploma of Local Government (Health and Environment)",
            "_created": "2020-05-18T03:33:39",
            "is_dependency": false
        }
    ],
    "title": "",
    "_created": "2020-05-18T03:33:39",
    "is_dependency": false
}

// let result = []
// sample.narration.forEach(n => {
//     result.push(generaTree(n))
// })

const result = generateFromJSON(sample)

console.log(JSON.stringify(result, null, 2))
var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "200",
        "ok": "200",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "19",
        "ok": "19",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1297",
        "ok": "1297",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "639",
        "ok": "639",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "550",
        "ok": "550",
        "ko": "-"
    },
    "percentiles1": {
        "total": "504",
        "ok": "504",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1212",
        "ok": "1212",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1274",
        "ok": "1274",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1288",
        "ok": "1288",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 101,
    "percentage": 51
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 34,
    "percentage": 17
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 65,
    "percentage": 33
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "40",
        "ok": "40",
        "ko": "-"
    }
},
contents: {
"req_add-user-reques-46550": {
        type: "REQUEST",
        name: "add user request",
path: "add user request",
pathFormatted: "req_add-user-reques-46550",
stats: {
    "name": "add user request",
    "numberOfRequests": {
        "total": "200",
        "ok": "200",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "19",
        "ok": "19",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1297",
        "ok": "1297",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "639",
        "ok": "639",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "550",
        "ok": "550",
        "ko": "-"
    },
    "percentiles1": {
        "total": "504",
        "ok": "504",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1212",
        "ok": "1212",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1274",
        "ok": "1274",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1288",
        "ok": "1288",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 101,
    "percentage": 51
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 34,
    "percentage": 17
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 65,
    "percentage": 33
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "40",
        "ok": "40",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}

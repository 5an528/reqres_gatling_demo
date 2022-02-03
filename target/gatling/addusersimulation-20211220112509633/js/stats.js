var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "100",
        "ok": "100",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "831",
        "ok": "831",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1363",
        "ok": "1363",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1133",
        "ok": "1133",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "131",
        "ok": "131",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1152",
        "ok": "1152",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1227",
        "ok": "1227",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1340",
        "ok": "1340",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1362",
        "ok": "1362",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 68,
    "percentage": 68
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 32,
    "percentage": 32
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "50",
        "ok": "50",
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
        "total": "100",
        "ok": "100",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "831",
        "ok": "831",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1363",
        "ok": "1363",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1133",
        "ok": "1133",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "131",
        "ok": "131",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1152",
        "ok": "1152",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1227",
        "ok": "1227",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1340",
        "ok": "1340",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1362",
        "ok": "1362",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 68,
    "percentage": 68
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 32,
    "percentage": 32
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "50",
        "ok": "50",
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

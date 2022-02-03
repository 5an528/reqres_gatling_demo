package simulation

import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef._
import io.gatling.http.Predef._



class TestAPISimulation extends Simulation{

  //http conf
  val httpConf = http.baseUrl("https://reqres.in/")
    .header("Accept", value = "application/json")
    .header("content-type", value = "application/json")



  //scenario
  val scn = scenario("get user type")
      .exec(http("get user request")
        .get("/api/user/2")
        .check(status is 200))

  //setup
     setUp(scn.inject(atOnceUsers(100))).protocols(httpConf)




}
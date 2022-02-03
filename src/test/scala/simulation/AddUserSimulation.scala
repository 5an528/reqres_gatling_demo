package simulation

import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef._
import io.gatling.http.Predef._


class AddUserSimulation extends Simulation{

  //http conf
  val httpConf = http.baseUrl("https://reqres.in/")
    .header("Accept", value = "application/json")
    .header("content-type", value = "application/json")


  //scenario
  val scn = scenario("Add User Scenario")
    .exec(http("add user request")
      .post("/api/user")
      .body(RawFileBody("./src/test/resources/bodies/AddUser.json")).asJson
      .header("content-type", value = "application/json")
      .check(status is 201))

    .pause(3)

    .exec(http("add user request")
      .get("/api/user/2")
      .check(status is 200))

  //setup
  setUp(scn.inject(atOnceUsers(100))).protocols(httpConf)

}

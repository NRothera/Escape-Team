var shuffle = function shuffle(array) {

    array.sort(() => Math.random() - 0.5);
}
  var team_members = ["Alison Overton", "Nick Rothera", "Harshini Fernando", "David Douglas", "Nicola Dawson", "Tara Brennan", "Tim Bharucha", "Richard Cranfield", "Richard Cranfield", "Julia George", "Gareth Hopkins", "Helen Jackson", "Kate Hockaday", "Neil Aldridge"]



  var team_1 = []
  var team_2 = []


var teamOne = document.getElementById('teamOne')
var teamTwo = document.getElementById('teamTwo')

document.getElementById("choose").onclick =  function() {
  teamOne.innerHTML = "";
  teamTwo.innerHTML = "";
  shuffle(team_members)

  for (var i = 0; i < team_members.length; i++) {
    if (i < (team_members.length / 2)) {
      teamOne.innerHTML += team_members[i] + ", "
      document.getElementById("oneDiv").appendChild(teamOne)
    } else {
      teamTwo.innerHTML += team_members[i] + ", "
      document.getElementById("twoDiv").appendChild(teamTwo)
    }

  }
}

const allCandidates = [
  { name: "Andreea", skills: ["Java", "React.js", "Docker", "Spring Boot"]},
  { name: "Kerrie", skills: ["JavaScript", "Docker", "Ruby"] },
  { name: "Mario", skills: ["Python", "AWS"] },
  { name: "Jacquline", skills: ["JavaScript", "Azure"] },
  { name: "Kathy", skills: ["JavaScript", "Java"] },
  { name: "Anna", skills: ["JavaScript", "AWS"] },
  { name: "Michael", skills: ["PHP", "AWS"] },
  { name: "Matt", skills: ["PHP", ".Net", "Docker"] }
];

function removeRowsFromTable(table) {
  const rows = table.getElementsByTagName("tr");
  
  while (rows.length > 1) {
    table.deleteRow(1);
  }
}

function insertCandidate(tbody, name, skills) {
  const newRow = tbody.insertRow();
  const nameCell = newRow.insertCell();
  const skillCell = newRow.insertCell();

  const candidateName = document.createTextNode(name);
  const candidateSkills = document.createTextNode(skills.join(', '));

  nameCell.appendChild(candidateName);
  skillCell.appendChild(candidateSkills);
}

function addCandidatesToTable(table, candidates) {
  candidates.forEach(candidate => insertCandidate(table, candidate.name, candidate.skills));
}

function filterCandidateBySkill(candidates, skill) {
  return candidates.filter(candidate => candidate.skills.includes(skill));
}

function createCandidateTable(filtered){
  const candidatesTable = document.getElementById("candidates-example");
  const newCandidatesTable = candidatesTable.cloneNode(true);

  removeRowsFromTable(newCandidatesTable);
  const newTableBody = newCandidatesTable.getElementsByTagName('tbody')[0];

  if(filtered) {
    const filteredCandidates = filterCandidateBySkill(allCandidates, 'JavaScript');
    addCandidatesToTable(newTableBody, filteredCandidates);
    document.getElementById("filtered-candidates").appendChild(newCandidatesTable);
  } else {
     addCandidatesToTable(newTableBody, allCandidates);
     document.getElementById("all-candidates").appendChild(newCandidatesTable);
  }
}

function searchCandidate() {
  const searchKey = document.getElementById("search-key").value.toUpperCase();
  const table = document.getElementById("all-candidates");
  const tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
    // Filter table rows by skill
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(searchKey) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
}

createCandidateTable(false);
createCandidateTable(true);

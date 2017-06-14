
function count_rabbits() {
    for(var i=1; i<=3; i++) {
        // operator + concatenates strings
        alert("Rabbit "+i+" out of the hat!")
    }
};

var newGroup;

function addNewGroup(){
	var form = document.getElementById('form');
	var group = document.getElementById('group');
	newGroup = group.value;
	
	if(document.getElementById('academic').checked){
		document.getElementById("newGroupAcademic").innerHTML = newGroup;
	}
	
	else if(document.getElementById('extra').checked){
		document.getElementById("newGroupExtra").innerHTML = newGroup;
	}
	   
	   
};

var newDescription;

function addNewDescription(){
	
};

var newMember;

function addNewMember(){
	var form = document.getElementById('form');
	var group = document.getElementById('group');
	var member_1 = document.getElementById('member_1');
	var member_2 = document.getElementById('member_2');
	var member_3 = document.getElementById('member_3');
	var members = [];
	members.push([group,member_1]); members.push([group,member_2]); members.push([group,member_3]);
};

function addResearchTeamGroup(){
	document.getElementById("newGroupAcademic").innerHTML = 'Research Team';
};

function addAcapellaGroup(){
	document.getElementById("newGroupExtra").innerHTML = 'Acapella';
};

function addSpringBreakTripGroup(){
	document.getElementById("newGroupExtra").innerHTML = 'Spring Break Trip';
};

function hide(obj) {

    var el = document.getElementById(obj);

        el.style.display = 'none';

}


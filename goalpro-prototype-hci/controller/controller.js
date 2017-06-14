var myApp = angular.module('app', []);

myApp.controller('MainCtrl', function($scope){

	var taskStatus = {
		NOTSTARTED: 0,
		INPROGRESS: 1,
		BLOCKED: 2,
		COMPLETE: 3
	};

	$scope.name = "Stephanie"; // testing this right now
	$scope.newEvent = "";
	$scope.newEventDate = "";
	$scope.newEventTime = "";
	$scope.newEventLocation = "";

	$scope.graphCounter = 3;
	$scope.increment = false;

	$scope.tasks = [
		{
			text: "Task 1",
			taskStatus: taskStatus.BLOCKED
		},
		{
			text: "Next Task 2",
			taskStatus: taskStatus.NOTSTARTED
		},
		{
			text: "Create Presentation 1",
			taskStatus: taskStatus.INPROGRESS
		},
		{
			text: "Extra Credit Assignment, Problem 3",
			taskStatus: taskStatus.INPROGRESS
		}
	];

	$scope.taskStatuses = taskStatus;
	$scope.complete = [];

	$scope.newTask = "";
	$scope.newTaskStatus = taskStatus.NOTSTARTED;

	$scope.events = [
		{
			text: "Club Meeting",
			date: "4/10/2016",
			time: "8:00 AM",
			location: "Marston, Neon"
		},
		{
			text: "Tennis Practice",
			date: "4/10/2016",
			time: "6:00 PM",
			location: "Flavet Courts"
		}
	];

	$scope.helloWorld = function() {
		console.log("i hope this works");
		alert("hello world!");
	};

	// This function will "quick complete" a task on the dashboard
	// Delete the task from the list
	// Change the status of the task
	$scope.quickComplete = function(index) {
		var item = $scope.tasks[index];
		$scope.complete.push(item);
		$scope.tasks.splice(index, 1);
		console.log("Completed: " + item.text);
		console.log($scope.complete);
		$scope.increment = 0;
		$scope.updateGraph();
	};

	$scope.addTask = function() {
		console.log("Add a new task");
		if ($scope.newTask !== "")
		{
			$scope.tasks.push({
				text: $scope.newTask,
				taskStatus: $scope.newTaskStatus
			});
			$scope.newTask = "";
			$scope.newTaskStatus = taskStatus.NOTSTARTED;
			$scope.increment = 1;
			$scope.updateGraph();
		}
	};

	$scope.completeTask = function(index) {
		$scope.newTask = $scope.tasks[index].text;
		$scope.newTaskStatus = taskStatus.COMPLETE;
		$scope.addTask();
		$scope.deleteTask(index);
	};

	$scope.blockTask = function(index) {
		$scope.newTask = $scope.tasks[index].text;
		$scope.newTaskStatus = taskStatus.BLOCKED;
		$scope.addTask();
		$scope.deleteTask(index);
	};

	$scope.inProgressTask = function(index) {
		$scope.newTask = $scope.tasks[index].text;
		$scope.newTaskStatus = taskStatus.INPROGRESS;
		$scope.addTask();
		$scope.deleteTask(index);
	};

	$scope.notStartedTask = function(index) {
		$scope.newTask = $scope.tasks[index].text;
		$scope.newTaskStatus = taskStatus.NOTSTARTED;
		$scope.addTask();
		$scope.deleteTask(index);
	};

	$scope.deleteTask = function(index) {
		console.log("in delete");
		$scope.tasks.splice(index, 1);
	};

	$scope.updateGraph = function() {
		if($scope.increment == 0) {
			if($scope.graphCounter != "5") {
				$scope.graphCounter++;
			}
		} else {
			if($scope.graphCounter != "1") {
				$scope.graphCounter--;
			}
		}
	};

	$scope.addEvent = function() {
		console.log("adding a new event");
		$scope.events.push({
			text: $scope.newEvent,
			date: $scope.newEventDate,
			time: $scope.newEventTime,
			location: $scope.newEventLocation
		});
		$scope.newEvent = "";
		$scope.newEventDate = "";
		$scope.newEventTime = "";
		$scope.newEventLocation = "";
	};
});

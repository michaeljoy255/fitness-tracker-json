"use strict";

// ENUMS #######################################################################
const _UnitPref = Object.freeze({
  IMPERIAL: "Imperial",
  METRIC: "Metric"
});

const _Category = Object.freeze({
  CARDIO: "Cardio",
  MISC: "Miscellaneous",
  CHEST: "Chest",
  BACK: "Back",
  LEGS: "Legs",
  SHOULDERS: "Shoudlers",
  BICEPS: "Biceps",
  TRICEPS: "Triceps",
  CORE: "Core"
});

// @TODO: Add exercise descriptions
const _Exercise = Object.freeze({
  ELLIPTICAL_WARMUP: {
    name: "Elliptical, Warmup",
    category: _Category.CARDIO,
    desc: ""
  },
  ELLIPTICAL_INTERVAL: {
    name: "Elliptical, Intervals",
    category: _Category.ELLIPTICAL_INTERVAL,
    desc: ""
  },
  STRETCHING: {
    name: "Stretching",
    category: _Category.MISC,
    desc: ""
  },
  FLAT_BENCH_PRESS: {
    name: "Flat Bench Press",
    category: _Category.CHEST,
    desc: ""
  },
  INCLINE_BENCH_PRESS: {
    name: "Incline Bench Press",
    category: _Category.CHEST,
    desc: ""
  },
  DECLINE_BENCH_PRESS: {
    name: "Decline Bench Press",
    category: _Category.CHEST,
    desc: ""
  },
  FLY_MACHINE_CHEST: {
    name: "Fly Machine (Chest)",
    category: _Category.CHEST,
    desc: ""
  },
  CABLE_TRICEP_PULLDOWNS: {
    name: "Cable Tricep Pulldowns",
    category: _Category.TRICEPS,
    desc: ""
  },
  TRICEP_PRESS_MACHINE: {
    name: "Tricep Press Machine",
    category: _Category.TRICEPS,
    desc: ""
  },
  BENT_OVER_ROWS: {
    name: "Bent Over Rows",
    category: _Category.BACK,
    desc: ""
  },
  SHRUGS: {
    name: "Shrugs",
    category: _Category.BACK,
    desc: ""
  },
  STIFF_LEG_DEADLIFTS: {
    name: "Stiff-Leg Deadlifts",
    category: _Category.BACK,
    desc: ""
  },
  ASSISTED_PULL_UPS: {
    name: "Assisted Pull-ups",
    category: _Category.BACK,
    desc: ""
  },
  UNDERHAND_CURLS: {
    name: "Underhand Curls",
    category: _Category.BICEPS,
    desc: ""
  },
  HAMMER_CURLS: {
    name: "Hammer Curls",
    category: _Category.BICEPS,
    desc: ""
  },
  OVERHAND_CURLS: {
    name: "Overhand Curls",
    category: _Category.BICEPS,
    desc: ""
  },
  SIDE_RAISES: {
    name: "Side Raises",
    category: _Category.SHOULDERS,
    desc: ""
  },
  FRONT_RAISES: {
    name: "Front Raises",
    category: _Category.SHOULDERS,
    desc: ""
  },
  SHOULDER_PRESS_MACHINE: {
    name: "Shoulder Press Machine",
    category: _Category.SHOULDERS,
    desc: ""
  },
  LEG_PRESS_MACHINE: {
    name: "Leg Press Machine",
    category: _Category.LEGS,
    desc: ""
  },
  LEG_EXTENSION_MACHINE: {
    name: "Leg Extension Machine",
    category: _Category.LEGS,
    desc: ""
  },
  LEG_CURL_MACHINE: {
    name: "Leg Curl Machine",
    category: _Category.LEGS,
    desc: ""
  },
  CALF_EXTENSION_MACHINE: {
    name: "Calf Extension Machine",
    category: _Category.LEGS,
    desc: ""
  },
  HIP_ABDUCTION_MACHINE: {
    name: "Hip Abduction (Out) Machine",
    category: _Category.LEGS,
    desc: ""
  },
  HIP_ADDUCTION_MACHINE: {
    name: "Hip Adduction (In) Machine",
    category: _Category.LEGS,
    desc: ""
  },
  STANDING_GLUTE_MACHINE: {
    name: "Standing Glute Machine",
    category: _Category.LEGS,
    desc: ""
  },
  ABDOMINAL_CRUNCH_MACHINE: {
    name: "Abdominal Crunch Machine",
    category: _Category.CORE,
    desc: ""
  },
  OBLIQUE_SIDE_BEND: {
    name: "Oblique Side Bend",
    category: _Category.CORE,
    desc: ""
  }
});

const _Objective = Object.freeze({
  NOTES: "Notes",
  REST: "Rest",
  TEMPO: "Tempo",
  INTENSITY: "Intensity",
  RESISTENCE: "Resistence",
  INCLINE: "Incline"
});

const _Intensity = Object.freeze({
  HIGH: "High",
  MEDIUM: "Medium",
  LOW: "Low"
});

const _Tempo = Object.freeze({
  FAST: "Fast",
  NORMAL: "Normal",
  SLOW: "Slow"
});

// FUNCTIONS ###################################################################
function createId() {
  return '_' + Math.random().toString(36).substr(2, 8);
};

function createDate() {
  return new Date();
};

function getExerciseIdByName(name) {
  return fitness_data.exercises.filter( exer => {
    return exer.name === name;
  })[0].id;
};

function getPounds(unitPref, weight) {
  const kilogramToPound = 2.20462262185;

  if (unitPref === "Imperial") {
    return weight;
  } else {
    return weight * kilogramToPound;
  };
};

function getKilograms(unitPref, weight) {
  const poundToKilogram = 0.45359237;

  if (unitPref === "Metric") {
    return weight;
  } else {
    return weight * poundToKilogram;
  };
};

function getMiles(unitPref, distance) {
  const kilometerToMile = 0.62137119;

  if (unitPref === "Imperial") {
    return distance;
  } else {
    return distance * kilometerToMile;
  };
};

function getKilometers(unitPref, distance) {
  const mileToKilometer = 1.609344;

  if (unitPref === "Metric") {
    return distance;
  } else {
    return distance * mileToKilometer;
  };
};

// CLASSES #####################################################################
class Exercise {
  constructor(name, category, desc, inputs, objectives, exerciseRecords) {
    this.id = createId();
    this.createdAt = createDate();
    this.name = name;
    this.category = category;
    this.desc = desc;
    this.inputs = inputs;
    this.objectives = objectives; // Objective []
    this.exerciseRecords = exerciseRecords; // Record []
  };

  updateExerciseInputs(inputs) { this.inputs = inputs };
  updateExerciseObjectives(objectives) { this.objectives = objectives };
  updateExerciseRecords(records) { this.records = records };
};

class Inputs {
  constructor(hasNotes, hasDuration, hasDistance, hasWeight, hasReps) {
    this.hasNotes = hasNotes; // 1 input
    this.hasDuration = hasDuration; // 3 inputs (H : M : S)
    this.hasDistance = hasDistance; // 1 input
    this.hasWeight = hasWeight; // 1 input
    this.hasReps = hasReps; // 1 input
  };
};

class Objective {
  constructor(type, text) {
    this.type = type;
    this.text = text;
  };
};

class ExerciseRecord {
  constructor(sets) {
    this.createdAt = createDate();
    this.sets = sets; // OneSet []
  };
};

class OneSet {
  constructor(duration, distance, weight, reps) {
    this.duration = duration; // hours : minutes : seconds
    this.distance = distance; // DistanceUnits
    this.weight = weight; // WeightUnits
    this.reps = reps;
  };
};

class WeightUnits {
  constructor(unitPref, weight) {
    this.pounds = Number(getPounds(unitPref, weight).toFixed(2));
    this.kilograms = Number(getKilograms(unitPref, weight).toFixed(2));
  };
};

class DistanceUnits {
  constructor(unitPref, distance) {
    this.miles = Number(getMiles(unitPref, distance).toFixed(2));
    this.kilometers = Number(getKilometers(unitPref, distance).toFixed(2));
  };
};

class Routine {
  constructor(name, exerciseIds, routineRecords=[]) {
    this.id = createId();
    this.createdAt = createDate();
    this.name = name;
    this.exerciseIds = exerciseIds;
    this.routineRecords = routineRecords; // RoutineRecord []
  };
};

class RoutineRecord {
  constructor(finishedAt, weightMoved) {
    this.createdAt = new Date();
    this.finishedAt = finishedAt;
    this.weightMoved = weightMoved;
  };
};

// BUILD #######################################################################
var fitness_data = {
  exercises: [],
  routines: []
};

// Building EXERCISES - name, category, desc
Object.values(_Exercise).forEach( exer => {
  fitness_data.exercises.push(new Exercise(exer.name, exer.category, exer.desc));
});

// Building EXERCISES - inputs
var cardioInputs = new Inputs(true, true, true, false, false);
var miscInputs = new Inputs(true, true, false, false, false);
var weightInputs = new Inputs(true, false, false, true, true);

fitness_data.exercises.forEach( exer => {
  if (exer.category === _Category.CARDIO) {
    exer.inputs = cardioInputs;
  } else if (exer.category === _Category.MISC) {
    exer.inputs = miscInputs;
  } else {
    exer.inputs = weightInputs;
  }
});

// Building EXERCISES - objectives
fitness_data.exercises.forEach( exer => {
  exer.objectives = [new Objective(_Objective.NOTES, _Objective.NOTES)];
});

// OUTPUT FOR JSON #############################################################
/*
fitness_data.exercises.forEach( exer => {
  console.log(exer.objectives);
});
*/
//console.log(fitness_data); // @TODO: temp
console.log( JSON.stringify(fitness_data) );
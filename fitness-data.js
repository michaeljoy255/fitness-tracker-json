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
  BREAKS: "Breaks",
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
  constructor(name, category, desc, inputs, objectives, records) {
    this.id = createId();
    this.createdAt = createDate();
    this.name = name;
    this.category = category;
    this.desc = desc;
    this.inputs = inputs;
    this.objectives = objectives; // Objective []
    this.records = records; // Record []
  };
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

class Record {
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
  constructor(name, exerciseIds) {
    this.id = createId();
    this.createdAt = createDate();
    this.name = name;
    this.exerciseIds = exerciseIds;
  };
};

// BUILD #######################################################################
var fitness_data = {
  exercises: [],
  routines: []
};

// Build exercises and records
fitness_data.exercises.push(
  new Exercise(
    _Exercise.ELLIPTICAL_WARMUP.name,
    _Exercise.ELLIPTICAL_WARMUP.category,
    _Exercise.ELLIPTICAL_WARMUP.desc,
  new Inputs(true, true, true, false, false), [
    new Objective(_Objective.NOTES, "Notes"),
    new Objective(_Objective.INTENSITY, _Intensity.MEDIUM),
    new Objective(_Objective.RESISTENCE, "8/20"),
    new Objective(_Objective.INCLINE, "0/20")
  ], [
    new Record([
      new OneSet(420, new DistanceUnits(_UnitPref.IMPERIAL, 0.5), null, null)
    ])
  ]));

fitness_data.exercises.push(
  new Exercise(
    _Exercise.ELLIPTICAL_INTERVAL.name,
    _Exercise.ELLIPTICAL_INTERVAL.category,
    _Exercise.ELLIPTICAL_INTERVAL.desc,
  new Inputs(true, true, true, false, false), [
    new Objective(_Objective.NOTES, "Notes"),
    new Objective(_Objective.INTENSITY, _Intensity.HIGH),
    new Objective(_Objective.RESISTENCE, "8/20"),
    new Objective(_Objective.INCLINE, "0/20")
  ], [
    new Record([
      new OneSet(1440, new DistanceUnits(_UnitPref.IMPERIAL, 2), null, null)
    ])
  ]));

fitness_data.exercises.push(
  new Exercise(
    _Exercise.STRETCHING.name,
    _Exercise.STRETCHING.category,
    _Exercise.STRETCHING.desc,
  new Inputs(true, true, false, false, false), [
    new Objective(_Objective.NOTES, "Notes"),
    new Objective(_Objective.INTENSITY, _Intensity.MEDIUM),
  ], [
    new Record([
      new OneSet(540, null, null, null)
    ])
  ]));

fitness_data.exercises.push(
  new Exercise(
    _Exercise.FLAT_BENCH_PRESS.name,
    _Exercise.FLAT_BENCH_PRESS.category,
    _Exercise.FLAT_BENCH_PRESS.desc,
  new Inputs(true, false, false, true, true), [
    new Objective(_Objective.NOTES, "Notes"),
    new Objective(_Objective.BREAKS, "2m"),
    new Objective(_Objective.TEMPO, _Tempo.NORMAL),
    new Objective(_Objective.INTENSITY, _Intensity.HIGH)
  ], [
    new Record([
      new OneSet(null, null, new WeightUnits(_UnitPref.IMPERIAL, 130), 10),
      new OneSet(null, null, new WeightUnits(_UnitPref.IMPERIAL, 130), 10),
      new OneSet(null, null, new WeightUnits(_UnitPref.IMPERIAL, 130), 10),
      new OneSet(null, null, new WeightUnits(_UnitPref.IMPERIAL, 130), 10)
    ])
  ]));

fitness_data.exercises.push(
  new Exercise(
    _Exercise.INCLINE_BENCH_PRESS.name,
    _Exercise.INCLINE_BENCH_PRESS.category,
    _Exercise.INCLINE_BENCH_PRESS.desc,
  new Inputs(true, false, false, true, true), [
    new Objective(_Objective.NOTES, "Notes"),
    new Objective(_Objective.BREAKS, "2m"),
    new Objective(_Objective.TEMPO, _Tempo.NORMAL),
    new Objective(_Objective.INTENSITY, _Intensity.HIGH)
  ], [
    new Record([
      new OneSet(null, null, new WeightUnits(_UnitPref.IMPERIAL, 75), 10),
      new OneSet(null, null, new WeightUnits(_UnitPref.IMPERIAL, 75), 10),
      new OneSet(null, null, new WeightUnits(_UnitPref.IMPERIAL, 75), 10),
      new OneSet(null, null, new WeightUnits(_UnitPref.IMPERIAL, 75), 10)
    ])
  ]));

fitness_data.exercises.push(
  new Exercise(
    _Exercise.DECLINE_BENCH_PRESS.name,
    _Exercise.DECLINE_BENCH_PRESS.category,
    _Exercise.DECLINE_BENCH_PRESS.desc,
  new Inputs(true, false, false, true, true), [
    new Objective(_Objective.NOTES, "Notes"),
    new Objective(_Objective.BREAKS, "2m"),
    new Objective(_Objective.TEMPO, _Tempo.NORMAL),
    new Objective(_Objective.INTENSITY, _Intensity.HIGH)
  ], [
    new Record([
      new OneSet(null, null, new WeightUnits(_UnitPref.IMPERIAL, 130), 10),
      new OneSet(null, null, new WeightUnits(_UnitPref.IMPERIAL, 130), 10),
      new OneSet(null, null, new WeightUnits(_UnitPref.IMPERIAL, 130), 10),
      new OneSet(null, null, new WeightUnits(_UnitPref.IMPERIAL, 130), 10)
    ])
  ]));

fitness_data.exercises.push(
  new Exercise(
    _Exercise.FLY_MACHINE_CHEST.name,
    _Exercise.FLY_MACHINE_CHEST.category,
    _Exercise.FLY_MACHINE_CHEST.desc,
  new Inputs(true, false, false, true, true), [
    new Objective(_Objective.NOTES, "Notes"),
    new Objective(_Objective.BREAKS, "2m"),
    new Objective(_Objective.TEMPO, _Tempo.SLOW),
    new Objective(_Objective.INTENSITY, _Intensity.HIGH)
  ], [
    new Record([
      new OneSet(null, null, new WeightUnits(_UnitPref.IMPERIAL, 120), 10),
      new OneSet(null, null, new WeightUnits(_UnitPref.IMPERIAL, 120), 10),
      new OneSet(null, null, new WeightUnits(_UnitPref.IMPERIAL, 120), 10)
    ])
  ]));

fitness_data.exercises.push(
  new Exercise(
    _Exercise.CABLE_TRICEP_PULLDOWNS.name,
    _Exercise.CABLE_TRICEP_PULLDOWNS.category,
    _Exercise.CABLE_TRICEP_PULLDOWNS.desc,
  new Inputs(true, false, false, true, true), [
    new Objective(_Objective.NOTES, "Notes"),
    new Objective(_Objective.BREAKS, "1m 30s"),
    new Objective(_Objective.TEMPO, _Tempo.NORMAL),
    new Objective(_Objective.INTENSITY, _Intensity.HIGH)
  ], [
    new Record([
      new OneSet(null, null, new WeightUnits(_UnitPref.IMPERIAL, 42.5), 10),
      new OneSet(null, null, new WeightUnits(_UnitPref.IMPERIAL, 42.5), 10),
      new OneSet(null, null, new WeightUnits(_UnitPref.IMPERIAL, 42.5), 10)
    ])
  ]));

fitness_data.exercises.push(
  new Exercise(
    _Exercise.TRICEP_PRESS_MACHINE.name,
    _Exercise.TRICEP_PRESS_MACHINE.category,
    _Exercise.TRICEP_PRESS_MACHINE.desc,
  new Inputs(true, false, false, true, true), [
    new Objective(_Objective.NOTES, "Notes"),
    new Objective(_Objective.BREAKS, "1m 30s"),
    new Objective(_Objective.TEMPO, _Tempo.NORMAL),
    new Objective(_Objective.INTENSITY, _Intensity.HIGH)
  ], [
    new Record([
      new OneSet(null, null, new WeightUnits(_UnitPref.IMPERIAL, 190), 10),
      new OneSet(null, null, new WeightUnits(_UnitPref.IMPERIAL, 190), 10),
      new OneSet(null, null, new WeightUnits(_UnitPref.IMPERIAL, 190), 10)
    ])
  ]));

fitness_data.exercises.push(
  new Exercise(
    _Exercise.BENT_OVER_ROWS.name,
    _Exercise.BENT_OVER_ROWS.category,
    _Exercise.BENT_OVER_ROWS.desc,
  new Inputs(true, false, false, true, true), [
    new Objective(_Objective.NOTES, "Notes"),
    new Objective(_Objective.BREAKS, "2m"),
    new Objective(_Objective.TEMPO, _Tempo.NORMAL),
    new Objective(_Objective.INTENSITY, _Intensity.HIGH)
  ], [
    new Record([
      new OneSet(null, null, new WeightUnits(_UnitPref.IMPERIAL, 120), 10),
      new OneSet(null, null, new WeightUnits(_UnitPref.IMPERIAL, 120), 10),
      new OneSet(null, null, new WeightUnits(_UnitPref.IMPERIAL, 120), 10),
      new OneSet(null, null, new WeightUnits(_UnitPref.IMPERIAL, 120), 10)
    ])
  ]));

fitness_data.exercises.push(
  new Exercise(
    _Exercise.SHRUGS.name,
    _Exercise.SHRUGS.category,
    _Exercise.SHRUGS.desc,
  new Inputs(true, false, false, true, true), [
    new Objective(_Objective.NOTES, "Notes"),
    new Objective(_Objective.BREAKS, "2m"),
    new Objective(_Objective.TEMPO, _Tempo.NORMAL),
    new Objective(_Objective.INTENSITY, _Intensity.HIGH)
  ], [
    new Record([
      new OneSet(null, null, new WeightUnits(_UnitPref.IMPERIAL, 190), 10),
      new OneSet(null, null, new WeightUnits(_UnitPref.IMPERIAL, 190), 10),
      new OneSet(null, null, new WeightUnits(_UnitPref.IMPERIAL, 190), 10),
      new OneSet(null, null, new WeightUnits(_UnitPref.IMPERIAL, 190), 10)
    ])
  ]));

fitness_data.exercises.push(
  new Exercise(
    _Exercise.STIFF_LEG_DEADLIFTS.name,
    _Exercise.STIFF_LEG_DEADLIFTS.category,
    _Exercise.STIFF_LEG_DEADLIFTS.desc,
  new Inputs(true, false, false, true, true), [
    new Objective(_Objective.NOTES, "Notes"),
    new Objective(_Objective.BREAKS, "2m"),
    new Objective(_Objective.TEMPO, _Tempo.NORMAL),
    new Objective(_Objective.INTENSITY, _Intensity.HIGH)
  ], [
    new Record([
      new OneSet(null, null, new WeightUnits(_UnitPref.IMPERIAL, 120), 10),
      new OneSet(null, null, new WeightUnits(_UnitPref.IMPERIAL, 120), 10),
      new OneSet(null, null, new WeightUnits(_UnitPref.IMPERIAL, 120), 10),
      new OneSet(null, null, new WeightUnits(_UnitPref.IMPERIAL, 120), 10)
    ])
  ]));

fitness_data.exercises.push(
  new Exercise(
    _Exercise.ASSISTED_PULL_UPS.name,
    _Exercise.ASSISTED_PULL_UPS.category,
    _Exercise.ASSISTED_PULL_UPS.desc,
  new Inputs(true, false, false, true, true), [
    new Objective(_Objective.NOTES, "Notes"),
    new Objective(_Objective.BREAKS, "2m"),
    new Objective(_Objective.TEMPO, _Tempo.NORMAL),
    new Objective(_Objective.INTENSITY, _Intensity.HIGH)
  ], [
    new Record([
      new OneSet(null, null, new WeightUnits(_UnitPref.IMPERIAL, -25), 10),
      new OneSet(null, null, new WeightUnits(_UnitPref.IMPERIAL, -25), 10),
      new OneSet(null, null, new WeightUnits(_UnitPref.IMPERIAL, -25), 10)
    ])
  ]));

fitness_data.exercises.push(
  new Exercise(
    _Exercise.OVERHAND_CURLS.name,
    _Exercise.OVERHAND_CURLS.category,
    _Exercise.OVERHAND_CURLS.desc,
  new Inputs(true, false, false, true, true), [
    new Objective(_Objective.NOTES, "Notes"),
    new Objective(_Objective.BREAKS, "2m"),
    new Objective(_Objective.TEMPO, _Tempo.NORMAL),
    new Objective(_Objective.INTENSITY, _Intensity.MEDIUM)
  ], [
    new Record([
      new OneSet(null, null, new WeightUnits(_UnitPref.IMPERIAL, 15), 10),
      new OneSet(null, null, new WeightUnits(_UnitPref.IMPERIAL, 15), 10),
      new OneSet(null, null, new WeightUnits(_UnitPref.IMPERIAL, 15), 10)
    ])
  ]));

fitness_data.exercises.push(
  new Exercise(
    _Exercise.UNDERHAND_CURLS.name,
    _Exercise.UNDERHAND_CURLS.category,
    _Exercise.UNDERHAND_CURLS.desc,
  new Inputs(true, false, false, true, true), [
    new Objective(_Objective.NOTES, "Notes"),
    new Objective(_Objective.BREAKS, "2m"),
    new Objective(_Objective.TEMPO, _Tempo.NORMAL),
    new Objective(_Objective.INTENSITY, _Intensity.HIGH)
  ], [
    new Record([
      new OneSet(null, null, new WeightUnits(_UnitPref.IMPERIAL, 30), 10),
      new OneSet(null, null, new WeightUnits(_UnitPref.IMPERIAL, 30), 10),
      new OneSet(null, null, new WeightUnits(_UnitPref.IMPERIAL, 30), 10)
    ])
  ]));

fitness_data.exercises.push(
  new Exercise(
    _Exercise.HAMMER_CURLS.name,
    _Exercise.HAMMER_CURLS.category,
    _Exercise.HAMMER_CURLS.desc,
  new Inputs(true, false, false, true, true), [
    new Objective(_Objective.NOTES, "Notes"),
    new Objective(_Objective.BREAKS, "2m"),
    new Objective(_Objective.TEMPO, _Tempo.NORMAL),
    new Objective(_Objective.INTENSITY, _Intensity.HIGH)
  ], [
    new Record([
      new OneSet(null, null, new WeightUnits(_UnitPref.IMPERIAL, 30), 10),
      new OneSet(null, null, new WeightUnits(_UnitPref.IMPERIAL, 30), 10),
      new OneSet(null, null, new WeightUnits(_UnitPref.IMPERIAL, 30), 10)
    ])
  ]));

fitness_data.exercises.push(
  new Exercise(
    _Exercise.SIDE_RAISES.name,
    _Exercise.SIDE_RAISES.category,
    _Exercise.SIDE_RAISES.desc,
  new Inputs(true, false, false, true, true), [
    new Objective(_Objective.NOTES, "Notes"),
    new Objective(_Objective.BREAKS, "1m"),
    new Objective(_Objective.TEMPO, _Tempo.NORMAL),
    new Objective(_Objective.INTENSITY, _Intensity.HIGH)
  ], [
    new Record([
      new OneSet(null, null, new WeightUnits(_UnitPref.IMPERIAL, 10), 10),
      new OneSet(null, null, new WeightUnits(_UnitPref.IMPERIAL, 10), 10),
      new OneSet(null, null, new WeightUnits(_UnitPref.IMPERIAL, 10), 10)
    ])
  ]));

fitness_data.exercises.push(
  new Exercise(
    _Exercise.FRONT_RAISES.name,
    _Exercise.FRONT_RAISES.category,
    _Exercise.FRONT_RAISES.desc,
  new Inputs(true, false, false, true, true), [
    new Objective(_Objective.NOTES, "Notes"),
    new Objective(_Objective.BREAKS, "1m"),
    new Objective(_Objective.TEMPO, _Tempo.NORMAL),
    new Objective(_Objective.INTENSITY, _Intensity.HIGH)
  ], [
    new Record([
      new OneSet(null, null, new WeightUnits(_UnitPref.IMPERIAL, 10), 10),
      new OneSet(null, null, new WeightUnits(_UnitPref.IMPERIAL, 10), 10),
      new OneSet(null, null, new WeightUnits(_UnitPref.IMPERIAL, 10), 10)
    ])
  ]));

fitness_data.exercises.push(
  new Exercise(
    _Exercise.SHOULDER_PRESS_MACHINE.name,
    _Exercise.SHOULDER_PRESS_MACHINE.category,
    _Exercise.SHOULDER_PRESS_MACHINE.desc,
  new Inputs(true, false, false, true, true), [
    new Objective(_Objective.NOTES, "Notes"),
    new Objective(_Objective.BREAKS, "2m"),
    new Objective(_Objective.TEMPO, _Tempo.NORMAL),
    new Objective(_Objective.INTENSITY, _Intensity.HIGH)
  ], [
    new Record([
      new OneSet(null, null, new WeightUnits(_UnitPref.IMPERIAL, 60), 10),
      new OneSet(null, null, new WeightUnits(_UnitPref.IMPERIAL, 60), 10),
      new OneSet(null, null, new WeightUnits(_UnitPref.IMPERIAL, 60), 10)
    ])
  ]));

fitness_data.exercises.push(
  new Exercise(
    _Exercise.LEG_PRESS_MACHINE.name,
    _Exercise.LEG_PRESS_MACHINE.category,
    _Exercise.LEG_PRESS_MACHINE.desc,
  new Inputs(true, false, false, true, true), [
    new Objective(_Objective.NOTES, "Notes"),
    new Objective(_Objective.BREAKS, "1m"),
    new Objective(_Objective.TEMPO, _Tempo.NORMAL),
    new Objective(_Objective.INTENSITY, _Intensity.MEDIUM)
  ], [
    new Record([
      new OneSet(null, null, new WeightUnits(_UnitPref.IMPERIAL, 175), 10),
      new OneSet(null, null, new WeightUnits(_UnitPref.IMPERIAL, 175), 10),
      new OneSet(null, null, new WeightUnits(_UnitPref.IMPERIAL, 175), 10)
    ])
  ]));

fitness_data.exercises.push(
  new Exercise(
    _Exercise.LEG_EXTENSION_MACHINE.name,
    _Exercise.LEG_EXTENSION_MACHINE.category,
    _Exercise.LEG_EXTENSION_MACHINE.desc,
  new Inputs(true, false, false, true, true), [
    new Objective(_Objective.NOTES, "Notes"),
    new Objective(_Objective.BREAKS, "1m"),
    new Objective(_Objective.TEMPO, _Tempo.NORMAL),
    new Objective(_Objective.INTENSITY, _Intensity.MEDIUM)
  ], [
    new Record([
      new OneSet(null, null, new WeightUnits(_UnitPref.IMPERIAL, 90), 10),
      new OneSet(null, null, new WeightUnits(_UnitPref.IMPERIAL, 90), 10),
      new OneSet(null, null, new WeightUnits(_UnitPref.IMPERIAL, 90), 10)
    ])
  ]));

fitness_data.exercises.push(
  new Exercise(
    _Exercise.LEG_CURL_MACHINE.name,
    _Exercise.LEG_CURL_MACHINE.category,
    _Exercise.LEG_CURL_MACHINE.desc,
  new Inputs(true, false, false, true, true), [
    new Objective(_Objective.NOTES, "Notes"),
    new Objective(_Objective.BREAKS, "1m"),
    new Objective(_Objective.TEMPO, _Tempo.NORMAL),
    new Objective(_Objective.INTENSITY, _Intensity.MEDIUM)
  ], [
    new Record([
      new OneSet(null, null, new WeightUnits(_UnitPref.IMPERIAL, 90), 10),
      new OneSet(null, null, new WeightUnits(_UnitPref.IMPERIAL, 90), 10),
      new OneSet(null, null, new WeightUnits(_UnitPref.IMPERIAL, 90), 10)
    ])
  ]));

fitness_data.exercises.push(
  new Exercise(
    _Exercise.CALF_EXTENSION_MACHINE.name,
    _Exercise.CALF_EXTENSION_MACHINE.category,
    _Exercise.CALF_EXTENSION_MACHINE.desc,
  new Inputs(true, false, false, true, true), [
    new Objective(_Objective.NOTES, "Notes"),
    new Objective(_Objective.BREAKS, "1m"),
    new Objective(_Objective.TEMPO, _Tempo.NORMAL),
    new Objective(_Objective.INTENSITY, _Intensity.MEDIUM)
  ], [
    new Record([
      new OneSet(null, null, new WeightUnits(_UnitPref.IMPERIAL, 175), 10),
      new OneSet(null, null, new WeightUnits(_UnitPref.IMPERIAL, 175), 10),
      new OneSet(null, null, new WeightUnits(_UnitPref.IMPERIAL, 175), 10)
    ])
  ]));

fitness_data.exercises.push(
  new Exercise(
    _Exercise.STANDING_GLUTE_MACHINE.name,
    _Exercise.STANDING_GLUTE_MACHINE.category,
    _Exercise.STANDING_GLUTE_MACHINE.desc,
  new Inputs(true, false, false, true, true), [
    new Objective(_Objective.NOTES, "Notes"),
    new Objective(_Objective.BREAKS, "1m"),
    new Objective(_Objective.TEMPO, _Tempo.NORMAL),
    new Objective(_Objective.INTENSITY, _Intensity.HIGH)
  ], [
    new Record([
      new OneSet(null, null, new WeightUnits(_UnitPref.IMPERIAL, 125), 10),
      new OneSet(null, null, new WeightUnits(_UnitPref.IMPERIAL, 125), 10),
      new OneSet(null, null, new WeightUnits(_UnitPref.IMPERIAL, 125), 10)
    ])
  ]));

fitness_data.exercises.push(
  new Exercise(
    _Exercise.HIP_ABDUCTION_MACHINE.name,
    _Exercise.HIP_ABDUCTION_MACHINE.category,
    _Exercise.HIP_ABDUCTION_MACHINE.desc,
  new Inputs(true, false, false, true, true), [
    new Objective(_Objective.NOTES, "Notes"),
    new Objective(_Objective.BREAKS, "1m"),
    new Objective(_Objective.TEMPO, _Tempo.NORMAL),
    new Objective(_Objective.INTENSITY, _Intensity.MEDIUM)
  ], [
    new Record([
      new OneSet(null, null, new WeightUnits(_UnitPref.IMPERIAL, 200), 10),
      new OneSet(null, null, new WeightUnits(_UnitPref.IMPERIAL, 200), 10),
      new OneSet(null, null, new WeightUnits(_UnitPref.IMPERIAL, 200), 10)
    ])
  ]));

fitness_data.exercises.push(
  new Exercise(
    _Exercise.HIP_ADDUCTION_MACHINE.name,
    _Exercise.HIP_ADDUCTION_MACHINE.category,
    _Exercise.HIP_ADDUCTION_MACHINE.desc,
  new Inputs(true, false, false, true, true), [
    new Objective(_Objective.NOTES, "Notes"),
    new Objective(_Objective.BREAKS, "1m"),
    new Objective(_Objective.TEMPO, _Tempo.NORMAL),
    new Objective(_Objective.INTENSITY, _Intensity.MEDIUM)
  ], [
    new Record([
      new OneSet(null, null, new WeightUnits(_UnitPref.IMPERIAL, 165), 10),
      new OneSet(null, null, new WeightUnits(_UnitPref.IMPERIAL, 165), 10),
      new OneSet(null, null, new WeightUnits(_UnitPref.IMPERIAL, 165), 10)
    ])
  ]));

fitness_data.exercises.push(
  new Exercise(
    _Exercise.ABDOMINAL_CRUNCH_MACHINE.name,
    _Exercise.ABDOMINAL_CRUNCH_MACHINE.category,
    _Exercise.ABDOMINAL_CRUNCH_MACHINE.desc,
  new Inputs(true, false, false, true, true), [
    new Objective(_Objective.NOTES, "Notes"),
    new Objective(_Objective.BREAKS, "2m"),
    new Objective(_Objective.TEMPO, _Tempo.NORMAL),
    new Objective(_Objective.INTENSITY, _Intensity.HIGH)
  ], [
    new Record([
      new OneSet(null, null, new WeightUnits(_UnitPref.IMPERIAL, 35), 25),
      new OneSet(null, null, new WeightUnits(_UnitPref.IMPERIAL, 35), 25),
      new OneSet(null, null, new WeightUnits(_UnitPref.IMPERIAL, 35), 25),
      new OneSet(null, null, new WeightUnits(_UnitPref.IMPERIAL, 35), 25)
    ])
  ]));

fitness_data.exercises.push(
  new Exercise(
    _Exercise.OBLIQUE_SIDE_BEND.name,
    _Exercise.OBLIQUE_SIDE_BEND.category,
    _Exercise.OBLIQUE_SIDE_BEND.desc,
  new Inputs(true, false, false, true, true), [
    new Objective(_Objective.NOTES, "Notes"),
    new Objective(_Objective.BREAKS, "1m"),
    new Objective(_Objective.TEMPO, _Tempo.NORMAL),
    new Objective(_Objective.INTENSITY, _Intensity.MEDIUM)
  ], [
    new Record([
      new OneSet(null, null, new WeightUnits(_UnitPref.IMPERIAL, 45), 25),
      new OneSet(null, null, new WeightUnits(_UnitPref.IMPERIAL, 45), 25),
      new OneSet(null, null, new WeightUnits(_UnitPref.IMPERIAL, 45), 25),
      new OneSet(null, null, new WeightUnits(_UnitPref.IMPERIAL, 45), 25)
    ])
  ]));

// Build routines
fitness_data.routines.push(
  new Routine("Chest and Triceps", [
    getExerciseIdByName(_Exercise.ELLIPTICAL_WARMUP.name),
    getExerciseIdByName(_Exercise.FLAT_BENCH_PRESS.name),
    getExerciseIdByName(_Exercise.INCLINE_BENCH_PRESS.name),
    getExerciseIdByName(_Exercise.DECLINE_BENCH_PRESS.name),
    getExerciseIdByName(_Exercise.FLY_MACHINE_CHEST.name),
    getExerciseIdByName(_Exercise.CABLE_TRICEP_PULLDOWNS.name),
    getExerciseIdByName(_Exercise.TRICEP_PRESS_MACHINE.name),
    getExerciseIdByName(_Exercise.STRETCHING.name)
  ]));

fitness_data.routines.push(
  new Routine("Back and Biceps", [
    getExerciseIdByName(_Exercise.ELLIPTICAL_WARMUP.name),
    getExerciseIdByName(_Exercise.BENT_OVER_ROWS.name),
    getExerciseIdByName(_Exercise.SHRUGS.name),
    getExerciseIdByName(_Exercise.STIFF_LEG_DEADLIFTS.name),
    getExerciseIdByName(_Exercise.ASSISTED_PULL_UPS.name),
    getExerciseIdByName(_Exercise.OVERHAND_CURLS.name),
    getExerciseIdByName(_Exercise.UNDERHAND_CURLS.name),
    getExerciseIdByName(_Exercise.HAMMER_CURLS.name),
    getExerciseIdByName(_Exercise.STRETCHING.name)
  ]));

fitness_data.routines.push(
  new Routine("Legs, Shoulders, and Core", [
    getExerciseIdByName(_Exercise.ELLIPTICAL_WARMUP.name),
    getExerciseIdByName(_Exercise.SIDE_RAISES.name),
    getExerciseIdByName(_Exercise.FRONT_RAISES.name),
    getExerciseIdByName(_Exercise.SHOULDER_PRESS_MACHINE.name),
    getExerciseIdByName(_Exercise.LEG_PRESS_MACHINE.name),
    getExerciseIdByName(_Exercise.LEG_EXTENSION_MACHINE.name),
    getExerciseIdByName(_Exercise.LEG_CURL_MACHINE.name),
    getExerciseIdByName(_Exercise.CALF_EXTENSION_MACHINE.name),
    getExerciseIdByName(_Exercise.STANDING_GLUTE_MACHINE.name),
    getExerciseIdByName(_Exercise.HIP_ABDUCTION_MACHINE.name),
    getExerciseIdByName(_Exercise.HIP_ADDUCTION_MACHINE.name),
    getExerciseIdByName(_Exercise.ABDOMINAL_CRUNCH_MACHINE.name),
    getExerciseIdByName(_Exercise.OBLIQUE_SIDE_BEND.name),
    getExerciseIdByName(_Exercise.STRETCHING.name)
  ]));

fitness_data.routines.push(
  new Routine("Chest Only", [
    getExerciseIdByName(_Exercise.ELLIPTICAL_WARMUP.name),
    getExerciseIdByName(_Exercise.FLAT_BENCH_PRESS.name),
    getExerciseIdByName(_Exercise.INCLINE_BENCH_PRESS.name),
    getExerciseIdByName(_Exercise.DECLINE_BENCH_PRESS.name),
    getExerciseIdByName(_Exercise.FLY_MACHINE_CHEST.name),
    getExerciseIdByName(_Exercise.STRETCHING.name)
  ]));

fitness_data.routines.push(
  new Routine("Back Only", [
    getExerciseIdByName(_Exercise.ELLIPTICAL_WARMUP.name),
    getExerciseIdByName(_Exercise.BENT_OVER_ROWS.name),
    getExerciseIdByName(_Exercise.SHRUGS.name),
    getExerciseIdByName(_Exercise.STIFF_LEG_DEADLIFTS.name),
    getExerciseIdByName(_Exercise.ASSISTED_PULL_UPS.name),
    getExerciseIdByName(_Exercise.STRETCHING.name)
  ]));

fitness_data.routines.push(
  new Routine("Legs Only", [
    getExerciseIdByName(_Exercise.ELLIPTICAL_WARMUP.name),
    getExerciseIdByName(_Exercise.LEG_PRESS_MACHINE.name),
    getExerciseIdByName(_Exercise.LEG_EXTENSION_MACHINE.name),
    getExerciseIdByName(_Exercise.LEG_CURL_MACHINE.name),
    getExerciseIdByName(_Exercise.CALF_EXTENSION_MACHINE.name),
    getExerciseIdByName(_Exercise.STANDING_GLUTE_MACHINE.name),
    getExerciseIdByName(_Exercise.HIP_ABDUCTION_MACHINE.name),
    getExerciseIdByName(_Exercise.HIP_ADDUCTION_MACHINE.name),
    getExerciseIdByName(_Exercise.STRETCHING.name)
  ]));

// @TODO: better exercises here so you can do them all in one place
fitness_data.routines.push(
  new Routine("Arms and Core", [
    getExerciseIdByName(_Exercise.ELLIPTICAL_WARMUP.name),
    getExerciseIdByName(_Exercise.SIDE_RAISES.name),
    getExerciseIdByName(_Exercise.FRONT_RAISES.name),
    getExerciseIdByName(_Exercise.SHOULDER_PRESS_MACHINE.name),
    getExerciseIdByName(_Exercise.OVERHAND_CURLS.name),
    getExerciseIdByName(_Exercise.CABLE_TRICEP_PULLDOWNS.name),
    getExerciseIdByName(_Exercise.UNDERHAND_CURLS.name),
    getExerciseIdByName(_Exercise.TRICEP_PRESS_MACHINE.name),
    getExerciseIdByName(_Exercise.HAMMER_CURLS.name),
    getExerciseIdByName(_Exercise.ABDOMINAL_CRUNCH_MACHINE.name),
    getExerciseIdByName(_Exercise.OBLIQUE_SIDE_BEND.name),
    getExerciseIdByName(_Exercise.STRETCHING.name)
  ]));

fitness_data.routines.push(
  new Routine("General Cardio", [
    getExerciseIdByName(_Exercise.ELLIPTICAL_INTERVAL.name),
    getExerciseIdByName(_Exercise.STRETCHING.name)
  ]));

// OUTPUT FOR JSON #############################################################
console.log( JSON.stringify(fitness_data) );
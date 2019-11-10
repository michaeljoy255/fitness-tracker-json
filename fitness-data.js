"use strict";

// ENUMS #######################################################################
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

// FUNCTIONS ###################################################################
function createId() {
  return '_' + Math.random().toString(36).substr(2, 8);
};

function createDate() {
  return new Date();
}

function getExerciseIdByName(name) {
  return fitness_data.exercises.filter( exer => {
    return exer.name === name;
  })[0].id;
}

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
  constructor(hasNotes, hasDuration, hasDistance, hasRounds, hasSets) {
    this.hasNotes = hasNotes;
    this.hasDuration = hasDuration;
    this.hasDistance = hasDistance;
    this.hasRounds = hasRounds;
    this.hasSets = hasSets;
  };
};

class Objective {
  constructor(type, text) {
    this.type = type;
    this.text = text;
  };
};

class Record {
  constructor(duration, distance, sets) {
    this.id = createId();
    this.createdAt = createDate();
    this.duration = duration;
    this.distance = distance; // DistanceUnits
    this.sets = sets; // OneSet []
  };
};

class OneSet {
  constructor(weight, reps) {
    this.weight = weight; // WeightUnits
    this.reps = reps;
  };
};

class WeightUnits {
  constructor(pounds, kilograms) {
    this.pounds = pounds;
    this.kilograms = kilograms;
  };
};

class DistanceUnits {
  constructor(miles, kilometers) {
    this.miles = miles;
    this.kilometers = kilometers;
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
    new Objective(_Objective.INTENSITY, "6/10"),
    new Objective(_Objective.RESISTENCE, "8/20"),
    new Objective(_Objective.INCLINE, "0/20")
  ], [
    new Record(420, new DistanceUnits(0.5, null), [])
  ]));

fitness_data.exercises.push(
  new Exercise(
    _Exercise.ELLIPTICAL_INTERVAL.name,
    _Exercise.ELLIPTICAL_INTERVAL.category,
    _Exercise.ELLIPTICAL_INTERVAL.desc,
  new Inputs(true, true, true, false, false), [
    new Objective(_Objective.NOTES, "Notes"),
    new Objective(_Objective.INTENSITY, "8/10"),
    new Objective(_Objective.RESISTENCE, "8/20"),
    new Objective(_Objective.INCLINE, "0/20")
  ], [
    new Record(1440, new DistanceUnits(2, null), [])
  ]));

fitness_data.exercises.push(
  new Exercise(
    _Exercise.STRETCHING.name,
    _Exercise.STRETCHING.category,
    _Exercise.STRETCHING.desc,
  new Inputs(true, true, false, false, false), [
    new Objective(_Objective.NOTES, "Notes"),
    new Objective(_Objective.INTENSITY, "5/10"),
  ], [
    new Record(540, null, [])
  ]));

fitness_data.exercises.push(
  new Exercise(
    _Exercise.FLAT_BENCH_PRESS.name,
    _Exercise.FLAT_BENCH_PRESS.category,
    _Exercise.FLAT_BENCH_PRESS.desc,
  new Inputs(true, false, false, false, true), [
    new Objective(_Objective.NOTES, "Notes"),
    new Objective(_Objective.BREAKS, "3m"),
    new Objective(_Objective.TEMPO, "1.5s"),
    new Objective(_Objective.INTENSITY, "7/10")
  ], [
    new Record(null, null, [
      new OneSet(new WeightUnits(130, null), 10),
      new OneSet(new WeightUnits(130, null), 10),
      new OneSet(new WeightUnits(130, null), 10),
      new OneSet(new WeightUnits(130, null), 10)
    ])
  ]));
  
fitness_data.exercises.push(
  new Exercise(
    _Exercise.INCLINE_BENCH_PRESS.name,
    _Exercise.INCLINE_BENCH_PRESS.category,
    _Exercise.INCLINE_BENCH_PRESS.desc,
  new Inputs(true, false, false, false, true), [
    new Objective(_Objective.NOTES, "Notes"),
    new Objective(_Objective.BREAKS, "3m"),
    new Objective(_Objective.TEMPO, "1.5s"),
    new Objective(_Objective.INTENSITY, "7/10")
  ], [
    new Record(null, null, [
      new OneSet(new WeightUnits(75, null), 10),
      new OneSet(new WeightUnits(75, null), 10),
      new OneSet(new WeightUnits(75, null), 10),
      new OneSet(new WeightUnits(75, null), 10)
    ])
  ]));

fitness_data.exercises.push(
  new Exercise(
    _Exercise.DECLINE_BENCH_PRESS.name,
    _Exercise.DECLINE_BENCH_PRESS.category,
    _Exercise.DECLINE_BENCH_PRESS.desc,
  new Inputs(true, false, false, false, true), [
    new Objective(_Objective.NOTES, "Notes"),
    new Objective(_Objective.BREAKS, "3m"),
    new Objective(_Objective.TEMPO, "1.5s"),
    new Objective(_Objective.INTENSITY, "7/10")
  ], [
    new Record(null, null, [
      new OneSet(new WeightUnits(130, null), 10),
      new OneSet(new WeightUnits(130, null), 10),
      new OneSet(new WeightUnits(130, null), 10),
      new OneSet(new WeightUnits(130, null), 10)
    ])
  ]));

fitness_data.exercises.push(
  new Exercise(
    _Exercise.FLY_MACHINE_CHEST.name,
    _Exercise.FLY_MACHINE_CHEST.category,
    _Exercise.FLY_MACHINE_CHEST.desc,
  new Inputs(true, false, false, false, true), [
    new Objective(_Objective.NOTES, "Notes"),
    new Objective(_Objective.BREAKS, "1m 30s"),
    new Objective(_Objective.TEMPO, "2s"),
    new Objective(_Objective.INTENSITY, "7/10")
  ], [
    new Record(null, null, [
      new OneSet(new WeightUnits(120, null), 10),
      new OneSet(new WeightUnits(120, null), 10),
      new OneSet(new WeightUnits(120, null), 10)
    ])
  ]));

fitness_data.exercises.push(
  new Exercise(
    _Exercise.CABLE_TRICEP_PULLDOWNS.name,
    _Exercise.CABLE_TRICEP_PULLDOWNS.category,
    _Exercise.CABLE_TRICEP_PULLDOWNS.desc,
  new Inputs(true, false, false, false, true), [
    new Objective(_Objective.NOTES, "Notes"),
    new Objective(_Objective.BREAKS, "1m"),
    new Objective(_Objective.TEMPO, "1s"),
    new Objective(_Objective.INTENSITY, "7/10")
  ], [
    new Record(null, null, [
      new OneSet(new WeightUnits(42.5, null), 10),
      new OneSet(new WeightUnits(42.5, null), 10),
      new OneSet(new WeightUnits(42.5, null), 10)
    ])
  ]));

fitness_data.exercises.push(
  new Exercise(
    _Exercise.TRICEP_PRESS_MACHINE.name,
    _Exercise.TRICEP_PRESS_MACHINE.category,
    _Exercise.TRICEP_PRESS_MACHINE.desc,
  new Inputs(true, false, false, false, true), [
    new Objective(_Objective.NOTES, "Notes"),
    new Objective(_Objective.BREAKS, "1m"),
    new Objective(_Objective.TEMPO, "1s"),
    new Objective(_Objective.INTENSITY, "7/10")
  ], [
    new Record(null, null, [
      new OneSet(new WeightUnits(190, null), 10),
      new OneSet(new WeightUnits(190, null), 10),
      new OneSet(new WeightUnits(190, null), 10)
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
    getExerciseIdByName(_Exercise.STRETCHING.name)
  ]));

fitness_data.routines.push(
  new Routine("Legs, Shoulders, and Core", [
    getExerciseIdByName(_Exercise.ELLIPTICAL_WARMUP.name),
    getExerciseIdByName(_Exercise.STRETCHING.name)
  ]));

fitness_data.routines.push(
  new Routine("General Cardio", [
    getExerciseIdByName(_Exercise.ELLIPTICAL_INTERVAL.name),
    getExerciseIdByName(_Exercise.STRETCHING.name)
  ]));

// OUTPUT FOR JSON #############################################################
console.log( JSON.stringify(fitness_data) );
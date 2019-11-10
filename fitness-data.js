"use strict";

// ENUMS #######################################################################
const _Exercise = Object.freeze({
  ELLIPTICAL_WARMUP: "Elliptical, Warmup",
  ELLIPTICAL_INTERVAL: "Elliptical, Intervals",
  STRETCHING: "Stretching",
  FLAT_BENCH_PRESS: "Flat Bench Press",
  INCLINE_BENCH_PRESS: "Incline Bench Press",
  DECLINE_BENCH_PRESS: "Decline Bench Press",
  FLY_MACHINE_CHEST: "Fly Machine (Chest)",
  CABLE_TRICEP_PULLDOWNS: "Cable Tricep Pulldowns",
  TRICEP_PRESS_MACHINE: "Tricep Press Machine",
  BENT_OVER_ROWS: "Bent Over Rows",
  SHRUGS: "Shrugs",
  STIFF_LEG_DEADLIFTS: "Stiff-Leg Deadlifts",
  ASSISTED_PULL_UPS: "Assisted Pull-ups",
  UNDERHAND_CURLS: "Underhand Curls",
  HAMMER_CURLS: "Hammer Curls",
  OVERHAND_CURLS: "Overhand Curls",
  SIDE_RAISES: "Side Raises",
  FRONT_RAISES: "Front Raises",
  SHOULDER_PRESS_MACHINE: "Shoulder Press Machine",
  LEG_PRESS_MACHINE: "Leg Press Machine",
  LEG_EXTENSION_MACHINE: "Leg Extension Machine",
  LEG_CURL_MACHINE: "Leg Curl Machine",
  CALF_EXTENSION_MACHINE: "Calf Extension Machine",
  HIP_ABDUCTION_MACHINE: "Hip Abduction (Out) Machine",
  HIP_ADDUCTION_MACHINE: "Hip Adduction (In) Machine",
  STANDING_GLUTE_MACHINE: "Standing Glute Machine",
  ABDOMINAL_CRUNCH_MACHINE: "Abdominal Crunch Machine",
  OBLIQUE_SIDE_BEND: "Oblique Side Bend"
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

const _Input = Object.freeze({
  DISTANCE: "Distance",
  DURATION: "Duration",
  SETS: "Sets"
});

const _Objective = Object.freeze({
  NOTES: "Notes",
  BREAKS: "Breaks",
  TEMPO: "Tempo",
  INTENSITY: "Intensity",
  RESISTENCE: "Resistence",
  INCLINE: "Incline"
});

const _Style = Object.freeze({
  NORMAL: "Normal",
  INTERVAL: "Interval",
  DROP: "Drop",
  PYRAMID: "Pyramid",
  NEGATIVE: "Negative"
});

// FUNCTIONS ###################################################################
function createId() {
  return '_' + Math.random().toString(36).substr(2, 8);
};

function createDate() {
  return new Date();
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
    this.objectives = objectives;
    this.records = records; // Record []
  };
};

class Input {
  constructor(notes, duration, distance, rounds, sets) {
    this.notes = notes;
    this.duration = duration;
    this.distance = distance;
    this.rounds = rounds;
    this.sets = sets;
  };
};

class Objective {
  constructor(type, icon, text) {
    this.type = type;
    this.icon = icon;
    this.text = text;
  };
};

class Record {
  constructor(exerciseId, duration, distance, sets) {
    this.id = createId();
    this.createdAt = createDate();
    this.exerciseId = exerciseId;
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

console.log( JSON.stringify(fitness_data) ); // Output for the generated JSON
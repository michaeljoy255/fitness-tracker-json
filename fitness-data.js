"use strict";

// ENUMS #######################################################################
const UnitPrefEnum = Object.freeze({
  IMPERIAL: "Imperial",
  METRIC: "Metric"
});

const CategoryEnum = Object.freeze({
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

const ObjectiveEnum = Object.freeze({
  NOTES: "Notes",
  REST: "Rest",
  TEMPO: "Tempo",
  INTENSITY: "Intensity",
  RESISTENCE: "Resistence",
  INCLINE: "Incline"
});

const IntensityEnum = Object.freeze({
  HIGH: "High",
  MEDIUM: "Medium",
  LOW: "Low"
});

const TempoEnum = Object.freeze({
  FAST: "Fast",
  NORMAL: "Normal",
  SLOW: "Slow"
});

const InputsEnum = Object.freeze({
  CARDIO: {
    hasNotes: true,
    hasDuration: true,
    hasDistance: true,
    hasWeight: false,
    hasReps: false
  },
  MISC: {
    hasNotes: true,
    hasDuration: true,
    hasDistance: false,
    hasWeight: false,
    hasReps: false
  },
  WEIGHT: {
    hasNotes: true,
    hasDuration: false,
    hasDistance: false,
    hasWeight: true,
    hasReps: true
  }
});

const ExerciseEnum = Object.freeze({
  ELLIPTICAL_WARMUP: {
    name: "Elliptical, Warmup",
    category: CategoryEnum.CARDIO,
    desc: "PLACEHOLDER",
    inputs: InputsEnum.CARDIO
  },
  ELLIPTICAL_INTERVAL: {
    name: "Elliptical, Intervals",
    category: CategoryEnum.CARDIO,
    desc: "PLACEHOLDER",
    inputs: InputsEnum.CARDIO
  },
  STEPPER: {
    name: "Stepper Machine",
    category: CategoryEnum.CARDIO,
    desc: "PLACEHOLDER",
    inputs: InputsEnum.MISC
  },
  STRETCHING: {
    name: "Stretching",
    category: CategoryEnum.MISC,
    desc: "PLACEHOLDER",
    inputs: InputsEnum.MISC
  },
  FLAT_BENCH_PRESS: {
    name: "Flat Bench Press",
    category: CategoryEnum.CHEST,
    desc: "PLACEHOLDER",
    inputs: InputsEnum.WEIGHT
  },
  INCLINE_BENCH_PRESS: {
    name: "Incline Bench Press",
    category: CategoryEnum.CHEST,
    desc: "PLACEHOLDER",
    inputs: InputsEnum.WEIGHT
  },
  DECLINE_BENCH_PRESS: {
    name: "Decline Bench Press",
    category: CategoryEnum.CHEST,
    desc: "PLACEHOLDER",
    inputs: InputsEnum.WEIGHT
  },
  FLY_MACHINE_CHEST: {
    name: "Fly Machine (Chest)",
    category: CategoryEnum.CHEST,
    desc: "PLACEHOLDER",
    inputs: InputsEnum.WEIGHT
  },
  SKULL_CRUSHERS: {
    name: "Skull Crushers",
    category: CategoryEnum.TRICEPS,
    desc: "PLACEHOLDER",
    inputs: InputsEnum.WEIGHT
  },
  CABLE_TRICEP_PULLDOWNS: {
    name: "Cable Tricep Pulldowns",
    category: CategoryEnum.TRICEPS,
    desc: "PLACEHOLDER",
    inputs: InputsEnum.WEIGHT
  },
  TRICEP_PRESS_MACHINE: {
    name: "Tricep Press Machine",
    category: CategoryEnum.TRICEPS,
    desc: "PLACEHOLDER",
    inputs: InputsEnum.WEIGHT
  },
  BENT_OVER_ROWS: {
    name: "Bent Over Rows",
    category: CategoryEnum.BACK,
    desc: "PLACEHOLDER",
    inputs: InputsEnum.WEIGHT
  },
  SHRUGS: {
    name: "Shrugs",
    category: CategoryEnum.BACK,
    desc: "PLACEHOLDER",
    inputs: InputsEnum.WEIGHT
  },
  STIFF_LEG_DEADLIFTS: {
    name: "Stiff Leg Deadlift",
    category: CategoryEnum.BACK,
    desc: "PLACEHOLDER",
    inputs: InputsEnum.WEIGHT
  },
  ASSISTED_PULL_UPS: {
    name: "Assisted Pull-ups",
    category: CategoryEnum.BACK,
    desc: "PLACEHOLDER",
    inputs: InputsEnum.WEIGHT
  },
  OVERHAND_CURLS: {
    name: "Overhand Curls",
    category: CategoryEnum.BICEPS,
    desc: "PLACEHOLDER",
    inputs: InputsEnum.WEIGHT
  },
  UNDERHAND_CURLS: {
    name: "Underhand Curls",
    category: CategoryEnum.BICEPS,
    desc: "PLACEHOLDER",
    inputs: InputsEnum.WEIGHT
  },
  HAMMER_CURLS: {
    name: "Hammer Curls",
    category: CategoryEnum.BICEPS,
    desc: "PLACEHOLDER",
    inputs: InputsEnum.WEIGHT
  },
  SIDE_RAISES: {
    name: "Side Raises",
    category: CategoryEnum.SHOULDERS,
    desc: "PLACEHOLDER",
    inputs: InputsEnum.WEIGHT
  },
  FRONT_RAISES: {
    name: "Front Raises",
    category: CategoryEnum.SHOULDERS,
    desc: "PLACEHOLDER",
    inputs: InputsEnum.WEIGHT
  },
  SHOULDER_PRESS_MACHINE: {
    name: "Shoulder Press Machine",
    category: CategoryEnum.SHOULDERS,
    desc: "PLACEHOLDER",
    inputs: InputsEnum.WEIGHT
  },
  LEG_PRESS_MACHINE: {
    name: "Leg Press Machine",
    category: CategoryEnum.LEGS,
    desc: "PLACEHOLDER",
    inputs: InputsEnum.WEIGHT
  },
  LEG_EXTENSION_MACHINE: {
    name: "Leg Extension Machine",
    category: CategoryEnum.LEGS,
    desc: "PLACEHOLDER",
    inputs: InputsEnum.WEIGHT
  },
  LEG_CURL_MACHINE: {
    name: "Leg Curl Machine",
    category: CategoryEnum.LEGS,
    desc: "PLACEHOLDER",
    inputs: InputsEnum.WEIGHT
  },
  CALF_EXTENSION_MACHINE: {
    name: "Calf Extension Machine",
    category: CategoryEnum.LEGS,
    desc: "PLACEHOLDER",
    inputs: InputsEnum.WEIGHT
  },
  STANDING_GLUTE_MACHINE: {
    name: "Standing Glute Machine",
    category: CategoryEnum.LEGS,
    desc: "PLACEHOLDER",
    inputs: InputsEnum.WEIGHT
  },
  HIP_ABDUCTION_MACHINE: {
    name: "Hip Abduction (Out) Machine",
    category: CategoryEnum.LEGS,
    desc: "PLACEHOLDER",
    inputs: InputsEnum.WEIGHT
  },
  HIP_ADDUCTION_MACHINE: {
    name: "Hip Adduction (in) Machine",
    category: CategoryEnum.LEGS,
    desc: "PLACEHOLDER",
    inputs: InputsEnum.WEIGHT
  },
  ABDOMINAL_CRUNCH_MACHINE: {
    name: "Abdominal Crunch Machine",
    category: CategoryEnum.CORE,
    desc: "PLACEHOLDER",
    inputs: InputsEnum.WEIGHT
  },
  OBLIQUE_SIDE_BEND: {
    name: "Oblique Side Bends",
    category: CategoryEnum.CORE,
    desc: "PLACEHOLDER",
    inputs: InputsEnum.WEIGHT
}});

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

// Building EXERCISES - name, category, desc, inputs
Object.values(ExerciseEnum).forEach( exer => {
  fitness_data.exercises.push(
    new Exercise(exer.name, exer.category, exer.desc, exer.inputs)
  );
});

// Building EXERCISES - objectives
fitness_data.exercises.forEach( exer => {
  switch (exer.name) {
    case ExerciseEnum.ELLIPTICAL_WARMUP.name:
      exer.objectives = [
        new Objective(ObjectiveEnum.NOTES, ObjectiveEnum.NOTES),
        new Objective(ObjectiveEnum.INTENSITY, IntensityEnum.MEDIUM),
        new Objective(ObjectiveEnum.RESISTENCE, "8/20"),
        new Objective(ObjectiveEnum.INCLINE, "0/20")
      ];
      break;
    case ExerciseEnum.ELLIPTICAL_INTERVAL.name:
      exer.objectives = [
        new Objective(ObjectiveEnum.NOTES, ObjectiveEnum.NOTES),
        new Objective(ObjectiveEnum.INTENSITY, IntensityEnum.HIGH),
        new Objective(ObjectiveEnum.RESISTENCE, "8/20"),
        new Objective(ObjectiveEnum.INCLINE, "0/20")
      ];
      break;
    case ExerciseEnum.STEPPER.name:
      exer.objectives = [
        new Objective(ObjectiveEnum.NOTES, ObjectiveEnum.NOTES),
        new Objective(ObjectiveEnum.INTENSITY, IntensityEnum.HIGH)
      ];
      break;
    case ExerciseEnum.STRETCHING.name:
      exer.objectives = [
        new Objective(ObjectiveEnum.NOTES, ObjectiveEnum.NOTES),
        new Objective(ObjectiveEnum.INTENSITY, IntensityEnum.MEDIUM),
      ];
      break;
    case ExerciseEnum.FLAT_BENCH_PRESS.name:
      exer.objectives = [
        new Objective(ObjectiveEnum.NOTES, ObjectiveEnum.NOTES),
        new Objective(ObjectiveEnum.REST, "3m"),
        new Objective(ObjectiveEnum.TEMPO, TempoEnum.NORMAL),
        new Objective(ObjectiveEnum.INTENSITY, IntensityEnum.HIGH)
      ];
      break;
    case ExerciseEnum.INCLINE_BENCH_PRESS.name:
      exer.objectives = [
        new Objective(ObjectiveEnum.NOTES, ObjectiveEnum.NOTES),
        new Objective(ObjectiveEnum.REST, "3m"),
        new Objective(ObjectiveEnum.TEMPO, TempoEnum.NORMAL),
        new Objective(ObjectiveEnum.INTENSITY, IntensityEnum.HIGH)
      ];
      break;
    case ExerciseEnum.DECLINE_BENCH_PRESS.name:
      exer.objectives = [
        new Objective(ObjectiveEnum.NOTES, ObjectiveEnum.NOTES),
        new Objective(ObjectiveEnum.REST, "3m"),
        new Objective(ObjectiveEnum.TEMPO, TempoEnum.NORMAL),
        new Objective(ObjectiveEnum.INTENSITY, IntensityEnum.HIGH)
      ];
      break;
    case ExerciseEnum.FLY_MACHINE_CHEST.name:
      exer.objectives = [
        new Objective(ObjectiveEnum.NOTES, ObjectiveEnum.NOTES),
        new Objective(ObjectiveEnum.REST, "2m"),
        new Objective(ObjectiveEnum.TEMPO, TempoEnum.SLOW),
        new Objective(ObjectiveEnum.INTENSITY, IntensityEnum.HIGH)
      ];
      break;
    case ExerciseEnum.SKULL_CRUSHERS.name:
      exer.objectives = [
        new Objective(ObjectiveEnum.NOTES, ObjectiveEnum.NOTES),
        new Objective(ObjectiveEnum.REST, "1m"),
        new Objective(ObjectiveEnum.TEMPO, TempoEnum.NORMAL),
        new Objective(ObjectiveEnum.INTENSITY, IntensityEnum.MEDIUM)
      ];
      break;
    case ExerciseEnum.CABLE_TRICEP_PULLDOWNS.name:
      exer.objectives = [
        new Objective(ObjectiveEnum.NOTES, ObjectiveEnum.NOTES),
        new Objective(ObjectiveEnum.REST, "2m"),
        new Objective(ObjectiveEnum.TEMPO, TempoEnum.NORMAL),
        new Objective(ObjectiveEnum.INTENSITY, IntensityEnum.HIGH)
      ];
      break;
    case ExerciseEnum.TRICEP_PRESS_MACHINE.name:
      exer.objectives = [
        new Objective(ObjectiveEnum.NOTES, ObjectiveEnum.NOTES),
        new Objective(ObjectiveEnum.REST, "2m"),
        new Objective(ObjectiveEnum.TEMPO, TempoEnum.NORMAL),
        new Objective(ObjectiveEnum.INTENSITY, IntensityEnum.HIGH)
      ];
      break;
    case ExerciseEnum.BENT_OVER_ROWS.name:
      exer.objectives = [
        new Objective(ObjectiveEnum.NOTES, ObjectiveEnum.NOTES),
        new Objective(ObjectiveEnum.REST, "3m"),
        new Objective(ObjectiveEnum.TEMPO, TempoEnum.NORMAL),
        new Objective(ObjectiveEnum.INTENSITY, IntensityEnum.HIGH)
      ];
      break;
    case ExerciseEnum.SHRUGS.name:
      exer.objectives = [
        new Objective(ObjectiveEnum.NOTES, ObjectiveEnum.NOTES),
        new Objective(ObjectiveEnum.REST, "3m"),
        new Objective(ObjectiveEnum.TEMPO, TempoEnum.NORMAL),
        new Objective(ObjectiveEnum.INTENSITY, IntensityEnum.HIGH)
      ];
      break;
    case ExerciseEnum.STIFF_LEG_DEADLIFTS.name:
      exer.objectives = [
        new Objective(ObjectiveEnum.NOTES, ObjectiveEnum.NOTES),
        new Objective(ObjectiveEnum.REST, "3m"),
        new Objective(ObjectiveEnum.TEMPO, TempoEnum.NORMAL),
        new Objective(ObjectiveEnum.INTENSITY, IntensityEnum.HIGH)
      ];
      break;
    case ExerciseEnum.ASSISTED_PULL_UPS.name:
      exer.objectives = [
        new Objective(ObjectiveEnum.NOTES, ObjectiveEnum.NOTES),
        new Objective(ObjectiveEnum.REST, "2m"),
        new Objective(ObjectiveEnum.TEMPO, TempoEnum.NORMAL),
        new Objective(ObjectiveEnum.INTENSITY, IntensityEnum.HIGH)
      ];
      break;
    case ExerciseEnum.OVERHAND_CURLS.name:
      exer.objectives = [
        new Objective(ObjectiveEnum.NOTES, ObjectiveEnum.NOTES),
        new Objective(ObjectiveEnum.REST, "1m"),
        new Objective(ObjectiveEnum.TEMPO, TempoEnum.NORMAL),
        new Objective(ObjectiveEnum.INTENSITY, IntensityEnum.MEDIUM)
      ];
      break;
    case ExerciseEnum.UNDERHAND_CURLS.name:
      exer.objectives = [
        new Objective(ObjectiveEnum.NOTES, ObjectiveEnum.NOTES),
        new Objective(ObjectiveEnum.REST, "2m"),
        new Objective(ObjectiveEnum.TEMPO, TempoEnum.NORMAL),
        new Objective(ObjectiveEnum.INTENSITY, IntensityEnum.HIGH)
      ];
      break;
    case ExerciseEnum.HAMMER_CURLS.name:
      exer.objectives = [
        new Objective(ObjectiveEnum.NOTES, ObjectiveEnum.NOTES),
        new Objective(ObjectiveEnum.REST, "2m"),
        new Objective(ObjectiveEnum.TEMPO, TempoEnum.NORMAL),
        new Objective(ObjectiveEnum.INTENSITY, IntensityEnum.HIGH)
      ];
      break;
    case ExerciseEnum.SIDE_RAISES.name:
      exer.objectives = [
        new Objective(ObjectiveEnum.NOTES, ObjectiveEnum.NOTES),
        new Objective(ObjectiveEnum.REST, "1m"),
        new Objective(ObjectiveEnum.TEMPO, TempoEnum.NORMAL),
        new Objective(ObjectiveEnum.INTENSITY, IntensityEnum.HIGH)
      ];
      break;
    case ExerciseEnum.FRONT_RAISES.name:
      exer.objectives = [
        new Objective(ObjectiveEnum.NOTES, ObjectiveEnum.NOTES),
        new Objective(ObjectiveEnum.REST, "1m"),
        new Objective(ObjectiveEnum.TEMPO, TempoEnum.NORMAL),
        new Objective(ObjectiveEnum.INTENSITY, IntensityEnum.HIGH)
      ];
      break;
    case ExerciseEnum.SHOULDER_PRESS_MACHINE.name:
      exer.objectives = [
        new Objective(ObjectiveEnum.NOTES, ObjectiveEnum.NOTES),
        new Objective(ObjectiveEnum.REST, "2m"),
        new Objective(ObjectiveEnum.TEMPO, TempoEnum.NORMAL),
        new Objective(ObjectiveEnum.INTENSITY, IntensityEnum.HIGH)
      ];
      break;
    case ExerciseEnum.LEG_PRESS_MACHINE.name:
      exer.objectives = [
        new Objective(ObjectiveEnum.NOTES, ObjectiveEnum.NOTES),
        new Objective(ObjectiveEnum.REST, "1m"),
        new Objective(ObjectiveEnum.TEMPO, TempoEnum.NORMAL),
        new Objective(ObjectiveEnum.INTENSITY, IntensityEnum.HIGH)
      ];
      break;
    case ExerciseEnum.LEG_EXTENSION_MACHINE.name:
      exer.objectives = [
        new Objective(ObjectiveEnum.NOTES, ObjectiveEnum.NOTES),
        new Objective(ObjectiveEnum.REST, "1m"),
        new Objective(ObjectiveEnum.TEMPO, TempoEnum.NORMAL),
        new Objective(ObjectiveEnum.INTENSITY, IntensityEnum.HIGH)
      ];
      break;
    case ExerciseEnum.LEG_CURL_MACHINE.name:
      exer.objectives = [
        new Objective(ObjectiveEnum.NOTES, ObjectiveEnum.NOTES),
        new Objective(ObjectiveEnum.REST, "1m"),
        new Objective(ObjectiveEnum.TEMPO, TempoEnum.NORMAL),
        new Objective(ObjectiveEnum.INTENSITY, IntensityEnum.HIGH)
      ];
      break;
    case ExerciseEnum.CALF_EXTENSION_MACHINE.name:
      exer.objectives = [
        new Objective(ObjectiveEnum.NOTES, ObjectiveEnum.NOTES),
        new Objective(ObjectiveEnum.REST, "1m"),
        new Objective(ObjectiveEnum.TEMPO, TempoEnum.NORMAL),
        new Objective(ObjectiveEnum.INTENSITY, IntensityEnum.HIGH)
      ];
      break;
    case ExerciseEnum.STANDING_GLUTE_MACHINE.name:
      exer.objectives = [
        new Objective(ObjectiveEnum.NOTES, ObjectiveEnum.NOTES),
        new Objective(ObjectiveEnum.REST, "1m"),
        new Objective(ObjectiveEnum.TEMPO, TempoEnum.NORMAL),
        new Objective(ObjectiveEnum.INTENSITY, IntensityEnum.HIGH)
      ];
      break;
    case ExerciseEnum.HIP_ABDUCTION_MACHINE.name:
      exer.objectives = [
        new Objective(ObjectiveEnum.NOTES, ObjectiveEnum.NOTES),
        new Objective(ObjectiveEnum.REST, "1m"),
        new Objective(ObjectiveEnum.TEMPO, TempoEnum.NORMAL),
        new Objective(ObjectiveEnum.INTENSITY, IntensityEnum.HIGH)
      ];
      break;
    case ExerciseEnum.HIP_ADDUCTION_MACHINE.name:
      exer.objectives = [
        new Objective(ObjectiveEnum.NOTES, ObjectiveEnum.NOTES),
        new Objective(ObjectiveEnum.REST, "1m"),
        new Objective(ObjectiveEnum.TEMPO, TempoEnum.NORMAL),
        new Objective(ObjectiveEnum.INTENSITY, IntensityEnum.HIGH)
      ];
      break;
    case ExerciseEnum.ABDOMINAL_CRUNCH_MACHINE.name:
      exer.objectives = [
        new Objective(ObjectiveEnum.NOTES, ObjectiveEnum.NOTES),
        new Objective(ObjectiveEnum.REST, "2m"),
        new Objective(ObjectiveEnum.TEMPO, TempoEnum.NORMAL),
        new Objective(ObjectiveEnum.INTENSITY, IntensityEnum.HIGH)
      ];
      break;
    case ExerciseEnum.OBLIQUE_SIDE_BEND.name:
      exer.objectives = [
        new Objective(ObjectiveEnum.NOTES, ObjectiveEnum.NOTES),
        new Objective(ObjectiveEnum.REST, "1m"),
        new Objective(ObjectiveEnum.TEMPO, TempoEnum.NORMAL),
        new Objective(ObjectiveEnum.INTENSITY, IntensityEnum.HIGH)
      ];
      break;
    default:
      exer.objectives = [];
      break;
  }
});

// Building EXERCISES - records
fitness_data.exercises.forEach( exer => {
  switch (exer.name) {
    case ExerciseEnum.ELLIPTICAL_WARMUP.name:
      exer.exerciseRecords = [
        new ExerciseRecord([
          new OneSet(420, new DistanceUnits(UnitPrefEnum.IMPERIAL, 0.5), null, null)
        ])
      ];
      break;
    case ExerciseEnum.ELLIPTICAL_INTERVAL.name:
      exer.exerciseRecords = [
        new ExerciseRecord([
          new OneSet(1440, new DistanceUnits(UnitPrefEnum.IMPERIAL, 2), null, null)
        ])
      ];
      break;
    case ExerciseEnum.STEPPER.name:
      exer.exerciseRecords = [
        new ExerciseRecord([
          new OneSet(600, null, null, null)
        ])
      ];
      break;
    case ExerciseEnum.STRETCHING.name:
      exer.exerciseRecords = [
        new ExerciseRecord([
          new OneSet(540, null, null, null)
        ])
      ];
      break;
    case ExerciseEnum.FLAT_BENCH_PRESS.name:
      exer.exerciseRecords = [
        new ExerciseRecord([
          new OneSet(null, null, new WeightUnits(UnitPrefEnum.IMPERIAL, 130), 10),
          new OneSet(null, null, new WeightUnits(UnitPrefEnum.IMPERIAL, 130), 10),
          new OneSet(null, null, new WeightUnits(UnitPrefEnum.IMPERIAL, 130), 10),
          new OneSet(null, null, new WeightUnits(UnitPrefEnum.IMPERIAL, 130), 10)
        ])
      ];
      break;
    case ExerciseEnum.INCLINE_BENCH_PRESS.name:
      exer.exerciseRecords = [
        new ExerciseRecord([
          new OneSet(null, null, new WeightUnits(UnitPrefEnum.IMPERIAL, 75), 10),
          new OneSet(null, null, new WeightUnits(UnitPrefEnum.IMPERIAL, 75), 10),
          new OneSet(null, null, new WeightUnits(UnitPrefEnum.IMPERIAL, 75), 10),
          new OneSet(null, null, new WeightUnits(UnitPrefEnum.IMPERIAL, 75), 10)
        ])
      ];
      break;
    case ExerciseEnum.DECLINE_BENCH_PRESS.name:
      exer.exerciseRecords = [
        new ExerciseRecord([
          new OneSet(null, null, new WeightUnits(UnitPrefEnum.IMPERIAL, 130), 10),
          new OneSet(null, null, new WeightUnits(UnitPrefEnum.IMPERIAL, 130), 10),
          new OneSet(null, null, new WeightUnits(UnitPrefEnum.IMPERIAL, 130), 10),
          new OneSet(null, null, new WeightUnits(UnitPrefEnum.IMPERIAL, 130), 10)
        ])
      ];
      break;
    case ExerciseEnum.FLY_MACHINE_CHEST.name:
      exer.exerciseRecords = [
        new ExerciseRecord([
          new OneSet(null, null, new WeightUnits(UnitPrefEnum.IMPERIAL, 120), 10),
          new OneSet(null, null, new WeightUnits(UnitPrefEnum.IMPERIAL, 120), 10),
          new OneSet(null, null, new WeightUnits(UnitPrefEnum.IMPERIAL, 120), 10)
        ])
      ];
      break;
    case ExerciseEnum.SKULL_CRUSHERS.name:
      exer.exerciseRecords = [
        new ExerciseRecord([
          new OneSet(null, null, new WeightUnits(UnitPrefEnum.IMPERIAL, 40), 10),
          new OneSet(null, null, new WeightUnits(UnitPrefEnum.IMPERIAL, 40), 10),
          new OneSet(null, null, new WeightUnits(UnitPrefEnum.IMPERIAL, 40), 10)
        ])
      ];
      break;
    case ExerciseEnum.CABLE_TRICEP_PULLDOWNS.name:
      exer.exerciseRecords = [
        new ExerciseRecord([
          new OneSet(null, null, new WeightUnits(UnitPrefEnum.IMPERIAL, 42.5), 10),
          new OneSet(null, null, new WeightUnits(UnitPrefEnum.IMPERIAL, 42.5), 10),
          new OneSet(null, null, new WeightUnits(UnitPrefEnum.IMPERIAL, 42.5), 10)
        ])
      ];
      break;
    case ExerciseEnum.TRICEP_PRESS_MACHINE.name:
      exer.exerciseRecords = [
        new ExerciseRecord([
          new OneSet(null, null, new WeightUnits(UnitPrefEnum.IMPERIAL, 190), 10),
          new OneSet(null, null, new WeightUnits(UnitPrefEnum.IMPERIAL, 190), 10),
          new OneSet(null, null, new WeightUnits(UnitPrefEnum.IMPERIAL, 190), 10)
        ])
      ];
      break;
    case ExerciseEnum.BENT_OVER_ROWS.name:
      exer.exerciseRecords = [
        new ExerciseRecord([
          new OneSet(null, null, new WeightUnits(UnitPrefEnum.IMPERIAL, 120), 10),
          new OneSet(null, null, new WeightUnits(UnitPrefEnum.IMPERIAL, 120), 10),
          new OneSet(null, null, new WeightUnits(UnitPrefEnum.IMPERIAL, 120), 10),
          new OneSet(null, null, new WeightUnits(UnitPrefEnum.IMPERIAL, 120), 10)
        ])
      ];
      break;
    case ExerciseEnum.SHRUGS.name:
      exer.exerciseRecords = [
        new ExerciseRecord([
          new OneSet(null, null, new WeightUnits(UnitPrefEnum.IMPERIAL, 190), 10),
          new OneSet(null, null, new WeightUnits(UnitPrefEnum.IMPERIAL, 190), 10),
          new OneSet(null, null, new WeightUnits(UnitPrefEnum.IMPERIAL, 190), 10),
          new OneSet(null, null, new WeightUnits(UnitPrefEnum.IMPERIAL, 190), 10)
        ])
      ];
      break;
    case ExerciseEnum.STIFF_LEG_DEADLIFTS.name:
      exer.exerciseRecords = [
        new ExerciseRecord([
          new OneSet(null, null, new WeightUnits(UnitPrefEnum.IMPERIAL, 120), 10),
          new OneSet(null, null, new WeightUnits(UnitPrefEnum.IMPERIAL, 120), 10),
          new OneSet(null, null, new WeightUnits(UnitPrefEnum.IMPERIAL, 120), 10),
          new OneSet(null, null, new WeightUnits(UnitPrefEnum.IMPERIAL, 120), 10)
        ])
      ];
      break;
    case ExerciseEnum.ASSISTED_PULL_UPS.name:
      exer.exerciseRecords = [
        new ExerciseRecord([
          new OneSet(null, null, new WeightUnits(UnitPrefEnum.IMPERIAL, -25), 10),
          new OneSet(null, null, new WeightUnits(UnitPrefEnum.IMPERIAL, -25), 10),
          new OneSet(null, null, new WeightUnits(UnitPrefEnum.IMPERIAL, -25), 10)
        ])
      ];
      break;
    case ExerciseEnum.OVERHAND_CURLS.name:
      exer.exerciseRecords = [
        new ExerciseRecord([
          new OneSet(null, null, new WeightUnits(UnitPrefEnum.IMPERIAL, 15), 10),
          new OneSet(null, null, new WeightUnits(UnitPrefEnum.IMPERIAL, 15), 10),
          new OneSet(null, null, new WeightUnits(UnitPrefEnum.IMPERIAL, 15), 10)
        ])
      ];
      break;
    case ExerciseEnum.UNDERHAND_CURLS.name:
      exer.exerciseRecords = [
        new ExerciseRecord([
          new OneSet(null, null, new WeightUnits(UnitPrefEnum.IMPERIAL, 30), 10),
          new OneSet(null, null, new WeightUnits(UnitPrefEnum.IMPERIAL, 30), 10),
          new OneSet(null, null, new WeightUnits(UnitPrefEnum.IMPERIAL, 30), 10)
        ])
      ];
      break;
    case ExerciseEnum.HAMMER_CURLS.name:
      exer.exerciseRecords = [
        new ExerciseRecord([
          new OneSet(null, null, new WeightUnits(UnitPrefEnum.IMPERIAL, 30), 10),
          new OneSet(null, null, new WeightUnits(UnitPrefEnum.IMPERIAL, 30), 10),
          new OneSet(null, null, new WeightUnits(UnitPrefEnum.IMPERIAL, 30), 10)
        ])
      ];
      break;
    case ExerciseEnum.SIDE_RAISES.name:
      exer.exerciseRecords = [
        new ExerciseRecord([
          new OneSet(null, null, new WeightUnits(UnitPrefEnum.IMPERIAL, 10), 10),
          new OneSet(null, null, new WeightUnits(UnitPrefEnum.IMPERIAL, 10), 10),
          new OneSet(null, null, new WeightUnits(UnitPrefEnum.IMPERIAL, 10), 10)
        ])
      ];
      break;
    case ExerciseEnum.FRONT_RAISES.name:
      exer.exerciseRecords = [
        new ExerciseRecord([
          new OneSet(null, null, new WeightUnits(UnitPrefEnum.IMPERIAL, 10), 10),
          new OneSet(null, null, new WeightUnits(UnitPrefEnum.IMPERIAL, 10), 10),
          new OneSet(null, null, new WeightUnits(UnitPrefEnum.IMPERIAL, 10), 10)
        ])
      ];
      break;
    case ExerciseEnum.SHOULDER_PRESS_MACHINE.name:
      exer.exerciseRecords = [
        new ExerciseRecord([
          new OneSet(null, null, new WeightUnits(UnitPrefEnum.IMPERIAL, 60), 10),
          new OneSet(null, null, new WeightUnits(UnitPrefEnum.IMPERIAL, 60), 10),
          new OneSet(null, null, new WeightUnits(UnitPrefEnum.IMPERIAL, 60), 10)
        ])
      ];
      break;
    case ExerciseEnum.LEG_PRESS_MACHINE.name:
      exer.exerciseRecords = [
        new ExerciseRecord([
          new OneSet(null, null, new WeightUnits(UnitPrefEnum.IMPERIAL, 175), 10),
          new OneSet(null, null, new WeightUnits(UnitPrefEnum.IMPERIAL, 175), 10),
          new OneSet(null, null, new WeightUnits(UnitPrefEnum.IMPERIAL, 175), 10)
        ])
      ];
      break;
    case ExerciseEnum.LEG_EXTENSION_MACHINE.name:
      exer.exerciseRecords = [
        new ExerciseRecord([
          new OneSet(null, null, new WeightUnits(UnitPrefEnum.IMPERIAL, 90), 10),
          new OneSet(null, null, new WeightUnits(UnitPrefEnum.IMPERIAL, 90), 10),
          new OneSet(null, null, new WeightUnits(UnitPrefEnum.IMPERIAL, 90), 10)
        ])
      ];
      break;
    case ExerciseEnum.LEG_CURL_MACHINE.name:
      exer.exerciseRecords = [
        new ExerciseRecord([
          new OneSet(null, null, new WeightUnits(UnitPrefEnum.IMPERIAL, 90), 10),
          new OneSet(null, null, new WeightUnits(UnitPrefEnum.IMPERIAL, 90), 10),
          new OneSet(null, null, new WeightUnits(UnitPrefEnum.IMPERIAL, 90), 10)
        ])
      ];
      break;
    case ExerciseEnum.CALF_EXTENSION_MACHINE.name:
      exer.exerciseRecords = [
        new ExerciseRecord([
          new OneSet(null, null, new WeightUnits(UnitPrefEnum.IMPERIAL, 175), 10),
          new OneSet(null, null, new WeightUnits(UnitPrefEnum.IMPERIAL, 175), 10),
          new OneSet(null, null, new WeightUnits(UnitPrefEnum.IMPERIAL, 175), 10)
        ])
      ];
      break;
    case ExerciseEnum.STANDING_GLUTE_MACHINE.name:
      exer.exerciseRecords = [
        new ExerciseRecord([
          new OneSet(null, null, new WeightUnits(UnitPrefEnum.IMPERIAL, 125), 10),
          new OneSet(null, null, new WeightUnits(UnitPrefEnum.IMPERIAL, 125), 10),
          new OneSet(null, null, new WeightUnits(UnitPrefEnum.IMPERIAL, 125), 10)
        ])
      ];
      break;
    case ExerciseEnum.HIP_ABDUCTION_MACHINE.name:
      exer.exerciseRecords = [
        new ExerciseRecord([
          new OneSet(null, null, new WeightUnits(UnitPrefEnum.IMPERIAL, 200), 10),
          new OneSet(null, null, new WeightUnits(UnitPrefEnum.IMPERIAL, 200), 10),
          new OneSet(null, null, new WeightUnits(UnitPrefEnum.IMPERIAL, 200), 10)
        ])
      ];
      break;
    case ExerciseEnum.HIP_ADDUCTION_MACHINE.name:
      exer.exerciseRecords = [
        new ExerciseRecord([
          new OneSet(null, null, new WeightUnits(UnitPrefEnum.IMPERIAL, 165), 10),
          new OneSet(null, null, new WeightUnits(UnitPrefEnum.IMPERIAL, 165), 10),
          new OneSet(null, null, new WeightUnits(UnitPrefEnum.IMPERIAL, 165), 10)
        ])
      ];
      break;
    case ExerciseEnum.ABDOMINAL_CRUNCH_MACHINE.name:
      exer.exerciseRecords = [
        new ExerciseRecord([
          new OneSet(null, null, new WeightUnits(UnitPrefEnum.IMPERIAL, 35), 25),
          new OneSet(null, null, new WeightUnits(UnitPrefEnum.IMPERIAL, 35), 25),
          new OneSet(null, null, new WeightUnits(UnitPrefEnum.IMPERIAL, 35), 25),
          new OneSet(null, null, new WeightUnits(UnitPrefEnum.IMPERIAL, 35), 25)
        ])
      ];
      break;
    case ExerciseEnum.OBLIQUE_SIDE_BEND.name:
      exer.exerciseRecords = [
        new ExerciseRecord([
          new OneSet(null, null, new WeightUnits(UnitPrefEnum.IMPERIAL, 45), 25),
          new OneSet(null, null, new WeightUnits(UnitPrefEnum.IMPERIAL, 45), 25),
          new OneSet(null, null, new WeightUnits(UnitPrefEnum.IMPERIAL, 45), 25),
          new OneSet(null, null, new WeightUnits(UnitPrefEnum.IMPERIAL, 45), 25)
        ])
      ];
      break;
    default:
      exer.exerciseRecords = [];
      break;
  }
});

// Build ROUTINES
fitness_data.routines.push(
  new Routine("Chest and Triceps", [
    getExerciseIdByName(ExerciseEnum.ELLIPTICAL_WARMUP.name),
    getExerciseIdByName(ExerciseEnum.FLAT_BENCH_PRESS.name),
    getExerciseIdByName(ExerciseEnum.INCLINE_BENCH_PRESS.name),
    getExerciseIdByName(ExerciseEnum.DECLINE_BENCH_PRESS.name),
    getExerciseIdByName(ExerciseEnum.FLY_MACHINE_CHEST.name),
    getExerciseIdByName(ExerciseEnum.CABLE_TRICEP_PULLDOWNS.name),
    getExerciseIdByName(ExerciseEnum.TRICEP_PRESS_MACHINE.name),
    getExerciseIdByName(ExerciseEnum.STRETCHING.name)
  ]
));

fitness_data.routines.push(
  new Routine("Back and Biceps", [
    getExerciseIdByName(ExerciseEnum.ELLIPTICAL_WARMUP.name),
    getExerciseIdByName(ExerciseEnum.BENT_OVER_ROWS.name),
    getExerciseIdByName(ExerciseEnum.SHRUGS.name),
    getExerciseIdByName(ExerciseEnum.STIFF_LEG_DEADLIFTS.name),
    getExerciseIdByName(ExerciseEnum.ASSISTED_PULL_UPS.name),
    getExerciseIdByName(ExerciseEnum.OVERHAND_CURLS.name),
    getExerciseIdByName(ExerciseEnum.UNDERHAND_CURLS.name),
    getExerciseIdByName(ExerciseEnum.HAMMER_CURLS.name),
    getExerciseIdByName(ExerciseEnum.STRETCHING.name)
  ]
));

fitness_data.routines.push(
  new Routine("Legs, Shoulders, and Core", [
    getExerciseIdByName(ExerciseEnum.ELLIPTICAL_WARMUP.name),
    getExerciseIdByName(ExerciseEnum.SIDE_RAISES.name),
    getExerciseIdByName(ExerciseEnum.FRONT_RAISES.name),
    getExerciseIdByName(ExerciseEnum.SHOULDER_PRESS_MACHINE.name),
    getExerciseIdByName(ExerciseEnum.LEG_PRESS_MACHINE.name),
    getExerciseIdByName(ExerciseEnum.LEG_EXTENSION_MACHINE.name),
    getExerciseIdByName(ExerciseEnum.LEG_CURL_MACHINE.name),
    getExerciseIdByName(ExerciseEnum.CALF_EXTENSION_MACHINE.name),
    getExerciseIdByName(ExerciseEnum.STANDING_GLUTE_MACHINE.name),
    getExerciseIdByName(ExerciseEnum.HIP_ABDUCTION_MACHINE.name),
    getExerciseIdByName(ExerciseEnum.HIP_ADDUCTION_MACHINE.name),
    getExerciseIdByName(ExerciseEnum.ABDOMINAL_CRUNCH_MACHINE.name),
    getExerciseIdByName(ExerciseEnum.OBLIQUE_SIDE_BEND.name),
    getExerciseIdByName(ExerciseEnum.STRETCHING.name)
  ]
));

fitness_data.routines.push(
  new Routine("Chest Only", [
    getExerciseIdByName(ExerciseEnum.ELLIPTICAL_WARMUP.name),
    getExerciseIdByName(ExerciseEnum.FLAT_BENCH_PRESS.name),
    getExerciseIdByName(ExerciseEnum.INCLINE_BENCH_PRESS.name),
    getExerciseIdByName(ExerciseEnum.DECLINE_BENCH_PRESS.name),
    getExerciseIdByName(ExerciseEnum.FLY_MACHINE_CHEST.name),
    getExerciseIdByName(ExerciseEnum.STRETCHING.name)
  ]
));

fitness_data.routines.push(
  new Routine("Back Only", [
    getExerciseIdByName(ExerciseEnum.ELLIPTICAL_WARMUP.name),
    getExerciseIdByName(ExerciseEnum.BENT_OVER_ROWS.name),
    getExerciseIdByName(ExerciseEnum.SHRUGS.name),
    getExerciseIdByName(ExerciseEnum.STIFF_LEG_DEADLIFTS.name),
    getExerciseIdByName(ExerciseEnum.ASSISTED_PULL_UPS.name),
    getExerciseIdByName(ExerciseEnum.STRETCHING.name)
  ]
));

fitness_data.routines.push(
  new Routine("Legs Only", [
    getExerciseIdByName(ExerciseEnum.ELLIPTICAL_WARMUP.name),
    getExerciseIdByName(ExerciseEnum.LEG_PRESS_MACHINE.name),
    getExerciseIdByName(ExerciseEnum.LEG_EXTENSION_MACHINE.name),
    getExerciseIdByName(ExerciseEnum.LEG_CURL_MACHINE.name),
    getExerciseIdByName(ExerciseEnum.CALF_EXTENSION_MACHINE.name),
    getExerciseIdByName(ExerciseEnum.STANDING_GLUTE_MACHINE.name),
    getExerciseIdByName(ExerciseEnum.HIP_ABDUCTION_MACHINE.name),
    getExerciseIdByName(ExerciseEnum.HIP_ADDUCTION_MACHINE.name),
    getExerciseIdByName(ExerciseEnum.STRETCHING.name)
  ]
));

fitness_data.routines.push(
  new Routine("Arms and Core", [
    getExerciseIdByName(ExerciseEnum.ELLIPTICAL_WARMUP.name),
    getExerciseIdByName(ExerciseEnum.SIDE_RAISES.name),
    getExerciseIdByName(ExerciseEnum.FRONT_RAISES.name),
    getExerciseIdByName(ExerciseEnum.SHOULDER_PRESS_MACHINE.name),
    getExerciseIdByName(ExerciseEnum.OVERHAND_CURLS.name),
    getExerciseIdByName(ExerciseEnum.CABLE_TRICEP_PULLDOWNS.name),
    getExerciseIdByName(ExerciseEnum.UNDERHAND_CURLS.name),
    getExerciseIdByName(ExerciseEnum.SKULL_CRUSHERS.name),
    getExerciseIdByName(ExerciseEnum.TRICEP_PRESS_MACHINE.name),
    getExerciseIdByName(ExerciseEnum.HAMMER_CURLS.name),
    getExerciseIdByName(ExerciseEnum.ABDOMINAL_CRUNCH_MACHINE.name),
    getExerciseIdByName(ExerciseEnum.OBLIQUE_SIDE_BEND.name),
    getExerciseIdByName(ExerciseEnum.STRETCHING.name)
  ]
));

fitness_data.routines.push(
  new Routine("Cardio Day", [
    getExerciseIdByName(ExerciseEnum.ELLIPTICAL_INTERVAL.name),
    getExerciseIdByName(ExerciseEnum.STEPPER.name),
    getExerciseIdByName(ExerciseEnum.STRETCHING.name)
  ]
));

// OUTPUT FOR JSON #############################################################
console.log( JSON.stringify(fitness_data) );
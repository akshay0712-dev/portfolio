import mongoose, { Schema } from "mongoose";

/* ------------------ Experience Schema ------------------ */
const experienceSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    icon: {
      type: String, // store emoji or icon name
      required: true,
    },
  },
  { _id: false }
);

/* ------------------ Skill Item Schema ------------------ */
const skillItemSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    icon: {
      type: String, // store icon name like "SiCplusplus"
      required: true,
    },
    tip: {
      type: String,
      required: true,
    },
  },
  { _id: false }
);

/* ------------------ Skill Category Schema ------------------ */
const skillCategorySchema = new Schema(
  {
    topic: {
      type: String,
      required: true,
    },
    icon: {
      type: String, // category icon name
      required: true,
    },
    skills: {
      type: [skillItemSchema],
      default: [],
    },
  },
  { _id: false }
);

/* ------------------ Portfolio Schema ------------------ */
const portfolioSchema = new Schema(
  {
    experience: {
      type: [experienceSchema],
      default: [],
    },
    skill: {
      type: [skillCategorySchema],
      default: [],
    },
  },
  { timestamps: true }
);

export const Portfolio = mongoose.model("Portfolio", portfolioSchema);
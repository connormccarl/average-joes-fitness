import client from "./client";

const endpoint = "/workouts";

const getWorkouts = () => client.get(endpoint);

export default {
  getWorkouts,
};

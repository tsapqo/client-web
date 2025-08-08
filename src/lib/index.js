// export const saveProgress = (topic, questionId, userId) => {
//   const progress = window.localStorage.getItem("progress");
//   if (progress && progress.includes(topic)) {
//     window.localStorage.removeItem("progress");
//   }
//   window.localStorage.setItem(
//     "progress",
//     JSON.stringify([...progress, { topic, questionId, userId }])
//   );
// };

// export const getProgress = () => {
//   const progress = window.localStorage.getItem("progress");
//   if (progress) {
//     return JSON.parse(progress);
//   }
//   return null;
// };

// ## todo: Find a way to save the progress of the user in each topic

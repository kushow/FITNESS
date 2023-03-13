const toggleBtn = document.querySelector("#toggle-schedule");
const scheduleList = document.querySelector("#schedule-list");

toggleBtn.addEventListener("click", () => {
  if (scheduleList.style.display === "none") {
    scheduleList.style.display = "block";
  } else {
    scheduleList.style.display = "none";
  }
});

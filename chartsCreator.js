const additionsColour = "#84cc166F";
const additionsBorderColour = "#4d7c0f";

const deletionsColour = "#ef44446F";
const deletionsBorderColour = "#b91c1c";

const commitsColour = "#6366f16F";
const commitsBorderColour = "#4338ca";

const getData = (contributions) => {
  const data = {
    labels: contributions.map((person) => person.name),
    datasets: [
      {
        label: "Additions",
        data: contributions.map((person) => person.addittions),
        borderWidth: 1,
        backgroundColor: additionsColour,
        borderColor: additionsBorderColour,
      },
      {
        label: "Deletions",
        data: contributions.map((person) => person.deletions),
        borderWidth: 1,
        backgroundColor: deletionsColour,
        borderColor: deletionsBorderColour,
      },
      {
        label: "Commits",
        data: contributions.map((person) => person.commits),
        borderWidth: 1,
        backgroundColor: commitsColour,
        borderColor: commitsBorderColour,
      },
    ],
  };

  return data;
};

const createChart = (canvas, contributions) => {
  if (canvas) {
    new Chart(canvas, {
      type: "bar",
      data: getData(contributions),
      options: {
        scales: {
          y: {
            display: true,
            type: "logarithmic",
            grid: {
              display: false,
            },
          },
        },
      },
    });
  }
};

window.addEventListener("load", () => {
  const container = document.getElementById("chartsContainer");

  if (container) {
    const contributions = JSON.parse(container.dataset.contributions);
    const penelopeSpike = document.getElementById("penelopeSpike");
    createChart(penelopeSpike, contributions.penelopeSpike);

    const penelope = document.getElementById("penelope");
    createChart(penelope, contributions.penelope);

    const androidSpike = document.getElementById("androidSpike");
    createChart(androidSpike, contributions.androidSpike);

    const android = document.getElementById("android");
    createChart(android, contributions.android);

    const icarius = document.getElementById("icarius");
    createChart(icarius, contributions.icarius);
  }
});

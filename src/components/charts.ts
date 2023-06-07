import { Chart } from "chart.js/auto";

type Contributions = {
  name: string;
  commits: number;
  addittions: number;
  deletions: number;
}[];

const additionsColour = "#84cc166F";
const additionsBorderColour = "#4d7c0f";

const deletionsColour = "#ef44446F";
const deletionsBorderColour = "#b91c1c";

const commitsColour = "#6366f16F";
const commitsBorderColour = "#4338ca";

const getData = (contributions: Contributions) => {
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

const createChart = (
  canvas: HTMLCanvasElement | null,
  contributions: Contributions
) => {
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
export { createChart };

import { FC } from 'react';
import { FoodRatingT } from 'Types';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar as RadarChart } from 'react-chartjs-2';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

export type RadarT = {
  reviews: FoodRatingT;
};

export const Radar: FC<RadarT> = ({ reviews }) => {
  const labels = ['Taste', 'Quality', 'Presentation', 'Creativity', 'Memorability'];
  const dataset = [
    reviews.taste || 0,
    reviews.ingredientQuality || 0,
    reviews.presentation || 0,
    reviews.creativity || 0,
    reviews.memorability || 0,
  ];

  console.log({
    labels,
    datasets: [
      {
        label: `Overall: ${dataset.reduce((a, b) => a + b, 0) / dataset.length}`,
        data: dataset,
        backgroundColor: 'rgba(87,195,97,0.69)',
        borderColor: 'rgba(87,195,97)',
      },
    ],
  });
  return (
    <RadarChart
      data={{
        labels,
        datasets: [
          {
            data: dataset,
            backgroundColor: 'rgba(87,195,97,0.69)',
            borderColor: 'rgba(87,195,97)',
          },
        ],
      }}
      options={{
        plugins: {
          legend: {
            display: false,
          },
        },
        elements: {
          line: { borderWidth: 3 },
        },
        spanGaps: false,
        scales: {
          r: {
            pointLabels: {
              color: '#949494',
              font: {
                size: 16,
              },
            },
            grid: {
              circular: true,
              color: '#515151',
            },
            angleLines: {
              color: '#515151',
            },
            ticks: {
              display: false,
              stepSize: 20,
            },
          },
        },
      }}
    />
  );
};

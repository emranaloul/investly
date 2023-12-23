import { Children } from "react";
import ChartCard from "../components/ChartCard";
import SVGComponent from "../components/SVGComponent";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import staticData from "../data";
import FavoriteCard from "../components/FavoriteCard";
ChartJS.register(ArcElement, Tooltip, Legend);

export const Projects = () => {
  const data = {
    // labels: ['Red', 'Blue'],
    datasets: [
      {
        // label: '# of Votes',
        data: [25, 75],
        backgroundColor: ["#E6FBD9", "#44C13C"],
        borderColor: ["#E6FBD9", "#44C13C"],
        borderWidth: 1,
      },
    ],
  };
  const data2 = {
    // labels: ['Red', 'Blue'],
    datasets: [
      {
        // label: '# of Votes',
        data: [25, 75],
        backgroundColor: ["#E6FBD9", "#4040F2"],
        borderColor: ["#E6FBD9", "#4040F2"],
        borderWidth: 1,
      },
    ],
  };
  const data3 = {
    // labels: ['Red', 'Blue'],
    datasets: [
      {
        // label: '# of Votes',
        data: [50, 50],
        backgroundColor: ["#E6FBD9", "#FF513A"].reverse(),
        borderColor: ["#E6FBD9", "#FF513A"].reverse(),
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className=" flex flex-col">
      <div className=" w-full flex justify-between h-[86px] items-center px-9">
        <h1 className=" text-gray-800 font-semibold  text-[28px] w-fit">
          Your dashboard
        </h1>
        <div>
          <button className=" border-gray-200  rounded-[32px] border p-3">
            <SVGComponent id="bell" className="w-4 h-4" />
          </button>
          <button className="border-gray-200  rounded-[32px] border p-3 ml-3">
            <SVGComponent id="search" className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className=" w-full flex justify-center gap-6 flex-wrap items-center">
        <ChartCard
          title="Todays sales"
          count={"2,456"}
          chart={
            <Doughnut
              options={{
                responsive: true,
                maintainAspectRatio: true,
                aspectRatio: 1.5,
                cutout: 45,
              }}
              data={data}
            />
          }
          chartIcon="trending-up"
        />
        <ChartCard
          title="New Products"
          count={"221"}
          chart={
            <Doughnut
              options={{
                responsive: true,
                maintainAspectRatio: true,
                aspectRatio: 1.5,
                cutout: 45,
              }}
              data={data2}
            />
          }
          chartIcon="trending-flat"
        />
        <ChartCard
          title="Inventory"
          count={"1,425"}
          chart={
            <Doughnut
              options={{
                responsive: true,
                maintainAspectRatio: true,
                aspectRatio: 1.5,
                cutout: 45,
              }}
              data={data3}
            />
          }
          chartIcon="trending-down"
        />
      </div>
      <div className=" w-full flex justify-between h-[86px] items-center px-9">
        <h3 className=" text-2xl font-semibold text-gray-700">
          Your favorites
        </h3>
        <div className=" w-60 h-10 relative">
          <input
            type="text"
            placeholder="try 'Miami beachhouse'"
            className=" my-auto placeholder w-full h-full py-3 px-4 border border-gray-200 rounded-[32px]"
          />
          <SVGComponent
            id="input-search-icon"
            className=" w-4 h-4 absolute end-2 text-gray-600 top-3"
          />
        </div>
      </div>
      <div className=" flex flex-wrap justify-center gap-6 bg-[#FFFFFF]">
        {Children.toArray(
          staticData.favorites.map((item) => <FavoriteCard {...item} />)
        )}
      </div>
    </div>
  );
};

export default Projects;

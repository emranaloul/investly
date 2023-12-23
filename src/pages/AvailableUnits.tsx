import { Children } from "react";
import SVGComponent from "../components/SVGComponent";
import Button from "../components/Button";
import SearchInput from "../components/SearchInput";
import AvatarGroup from "../components/AvatarGroup";
import IconButton from "../components/IconButton";
import { useSelector } from "react-redux";
import { RootState } from "../store";
const AvailableUnits = () => {
  const projects = useSelector((state: RootState) => state.projects);
  const columns = [
    {
      header: "Project name",
      label: "name",
      headerElement: (
        <div className=" flex gap-2 ">
          <span className=" text-[12px] text-gray-600">Project name</span>
          <div className="flex">
            <SVGComponent id="arrow-up " className="w-4 h-4" />
          </div>
        </div>
      ),
      bodyElement: (rowData: (typeof projects)[0]) => (
        <div className=" flex gap-2">
          <SVGComponent id="folder-shared" className=" w-4 h-4" />
          <span className=" text-sm font-normal text-[#000000]">
            {rowData.name}
          </span>
        </div>
      ),
    },
    {
      header: "Project Status",
      label: "status",
      bodyElement: (rowData: (typeof projects)[0]) => (
        <span
          className={`${rowData.status.color} px-[10px] pb-[7px] pt-[5px] text-blue-50 rounded-xl text-[12px] font-normal `}
        >
          {rowData.status.name}
        </span>
      ),
    },
    {
      header: "Brand",
      label: "brand",
      bodyElement: (rowData: (typeof projects)[0]) => (
        <div className=" flex gap-2">
          <div className=" flex bg-gray-700 text-center w-8 h-8 justify-center items-center rounded-[80px]">
            <SVGComponent id={rowData.brand.logo} className="w-6 h-6" />
          </div>
          <span>{rowData.brand.name}</span>
        </div>
      ),
    },
    {
      header: "Contributors",
      label: "contributors",
      bodyElement: (rowData: (typeof projects)[0]) => (
        <AvatarGroup avatars={rowData.contributors} />
      ),
    },
    {
      header: "Project type",
      label: "type",
      bodyElement: (rowData: (typeof projects)[0]) => (
        <span
          className={` ${rowData.type.bgColor} ${rowData.type.textColor} px-[10px] pb-[7px] pt-[5px] rounded-xl text-[12px] font-normal`}
        >
          {rowData.type.name}
        </span>
      ),
    },
    {
      header: "Due date",
      label: "dueDate",
      bodyElement: (rowData: (typeof projects)[0]) => (
        <div className=" flex gap-2 ">
          <SVGComponent id="calendar" className=" w-4 h-4" />
          <span className=" text-sm">{rowData.dueDate}</span>
        </div>
      ),
    },
    {
      header: "Actions",
      label: "action",
      bodyElement: () => <SVGComponent id="actions" className=" w-6 h-6" />,
    },
  ];
  return (
    <div className=" flex flex-col ">
      <div className="h-[86px] flex justify-between px-9 items-center ">
        <div className=" flex gap-2">
          <h2 className=" my-auto w-fit text-[28px] font-semibold text-gray-700">
            Current projects
          </h2>
          <SVGComponent id="arrow-dropdown" className=" w-4 cursor-pointer  " />
        </div>
        <div className=" flex gap-3">
          <button className=" bg-[#4040F2] h-10 text-[14px] gap-2 text-[#FFFFFF] flex p-3 rounded-[32px] items-center">
            New project
            <div>
              <SVGComponent id="plus" className=" w-4 h-4" />
            </div>
          </button>
          <IconButton icon="bell" />
          <IconButton icon="search" />
        </div>
      </div>
      <div className=" flex px-9 justify-between h-[72px]">
        <div className=" flex gap-4">
          <Button btnTitle="Filter projects" svgId="filter-list" />
          <Button btnTitle="Sort projects" svgId="sort" />
          <SearchInput />
        </div>
        <div className=" flex gap-2">
          <Button btnTitle="Refresh" svgId="refresh" />
          <Button btnTitle="Customize" svgId="settings-icon" />
          <Button svgId="more-vert" />
        </div>
      </div>
      <div className="px-9">
        <table className=" w-full">
          <thead className=" bg-gray-50 h-10">
            <tr>
              <th className="w-[70px]">
                <input type="checkbox" />
              </th>
              {Children.toArray(
                columns.map(({ header, headerElement: Header }) => (
                  <th className=" text-[12px] font-semibold text-gray-600 text-left pl-6">
                    {Header ? Header : header}
                  </th>
                ))
              )}
            </tr>
          </thead>
          <tbody>
            {Children.toArray(
              projects.map((project) => (
                <tr className=" h-[60]">
                  <td className=" flex h-[60px]  m-auto">
                    <input type="checkbox" className=" m-auto" />
                  </td>
                  {Children.toArray(
                    columns.map(({ bodyElement: Body, label }) => (
                      <td className="pl-6">
                        {Body ? (
                          <Body {...project} />
                        ) : (
                          (project[label as keyof typeof project] as string)
                        )}{" "}
                      </td>
                    ))
                  )}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AvailableUnits;

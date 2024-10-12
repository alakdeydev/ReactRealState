
import { propertyData } from "./data";

import Propertysvgone from "./Propertysvgone";
import Propertysvgtwo from "./Propertysvgtwo";



export default function PropertyItem(){


    const listItems = propertyData.map((propertyitem) => (
      <div
        className="p-4 bg-white rounded-lg border border-gray-600/10"
        key={propertyitem.id}
      >
        <img src={propertyitem.imageUrl} alt="property" />

        <div className="p-6">
          <h4 className="text-2xl font-bold cursor-pointer">
            {propertyitem.title}
          </h4>

          <div className="mt-2">
            <span className="text-xl font-extrabold text-blue-600">
              ${propertyitem.prize}
            </span>{" "}
            /M
          </div>
        </div>
        <div className="flex justify-between p-4 text-gray-700 border-t border-gray-300">
          <div className="flex items-center">
            <Propertysvgone />

            <p>
              <span className="font-bold text-gray-900">
                {propertyitem.mataData.totalBedrooms}
              </span>{" "}
              {propertyitem.mataData.roomItemOne}
            </p>
          </div>
          <div className="flex items-center">
            <Propertysvgtwo />
            <p>
              <span className="font-bold text-gray-900">
                {propertyitem.mataData.totalBathrooms}
              </span>{" "}
              {propertyitem.mataData.roomItemTwo}
            </p>
          </div>
        </div>
      </div>
    ));




    return <>{listItems}</>;
}
import React, { useState, useEffect } from "react";

const Analytics = () => {
  const [analytics, setanalytics] = useState(null);
  useEffect(() => {
    getanalytics();
  }, []);
  const getanalytics = () => {
    fetch("http://go-dev.greedygame.com/v3/dummy/report?startDate=2021-05-01&endDate=2021-05-03").then((res) => {
      res.json().then((data) => {
        console.log(data.data);
        if (data.data.length > 0) {
          var temp = "";
          data.data.forEach((itemData) => {
            temp += "<tr>";
            temp += "<td>" + itemData.date + "</td>";
            temp += "<td>" + itemData.app_id + "</td>";
            
            temp += "<td>" + itemData.requests + "</td>";
            temp += "<td>" + itemData.responses+ "</td>";
            temp += "<td>" + itemData.clicks+ "</td>";
            temp += "<td>" + itemData.revenue+ "</td>";
            temp += "<td>" + itemData.impressions + "</td></tr>";
          });
          document.getElementById("data").innerHTML = temp;
        }
      });
    });
  };
  return (
    <>
    <div className="ml-5">
      <h2 className="text-xl font-semibold mb-5 pt-10">Analytics</h2>
      <div class="container">
        <table class="table-auto p-10">
          <thead>
            <tr className="text-slate-500 text-center">
            <th className="p-4">Date</th>
              <th className="p-4">App</th>
              <th className="p-4">Clicks</th>
              <th className="p-4">Requests</th>
              <th className="p-4">Revenue</th>
              <th className="p-4">Responses</th>
              <th className="p-4">Impressions</th>
            </tr>
          </thead>
          <tbody id="data" className="text-slate-900 text-center pl-7"></tbody>
        </table>
      </div></div>
      </>
  );
};
export default Analytics;

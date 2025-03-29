import ForecastResponse from "@/types/forecastResponse";

export const forecastResponse1: ForecastResponse = {
  success: "true",
  result: {
    resource_id: "F-C0032-001",
    fields: [
      {
        id: "datasetDescription",
        type: "String",
      },
      {
        id: "locationName",
        type: "String",
      },
      {
        id: "parameterName",
        type: "String",
      },
      {
        id: "parameterValue",
        type: "String",
      },
      {
        id: "parameterUnit",
        type: "String",
      },
      {
        id: "startTime",
        type: "Timestamp",
      },
      {
        id: "endTime",
        type: "Timestamp",
      },
    ],
  },
  records: {
    datasetDescription: "三十六小時天氣預報",
    location: [
      {
        locationName: "臺北市",
        weatherElement: [
          // 天氣現象
          {
            elementName: "Wx",
            time: [
              {
                startTime: "2025-03-28 00:00:00",
                endTime: "2025-03-28 06:00:00",
                parameter: {
                  parameterName: "晴時多雲",
                  parameterValue: "2",
                },
              },
              {
                startTime: "2025-03-28 06:00:00",
                endTime: "2025-03-28 18:00:00",
                parameter: {
                  parameterName: "陰短暫陣雨",
                  parameterValue: "11",
                },
              },
              {
                startTime: "2025-03-28 18:00:00",
                endTime: "2025-03-29 06:00:00",
                parameter: {
                  parameterName: "陰短暫陣雨",
                  parameterValue: "11",
                },
              },
            ],
          },
          // 降雨機率
          {
            elementName: "PoP",
            time: [
              {
                startTime: "2025-03-28 00:00:00",
                endTime: "2025-03-28 06:00:00",
                parameter: {
                  parameterName: "20",
                  parameterUnit: "百分比",
                },
              },
              {
                startTime: "2025-03-28 06:00:00",
                endTime: "2025-03-28 18:00:00",
                parameter: {
                  parameterName: "50",
                  parameterUnit: "百分比",
                },
              },
              {
                startTime: "2025-03-28 18:00:00",
                endTime: "2025-03-29 06:00:00",
                parameter: {
                  parameterName: "30",
                  parameterUnit: "百分比",
                },
              },
            ],
          },
          // 最低溫度
          {
            elementName: "MinT",
            time: [
              {
                startTime: "2025-03-28 00:00:00",
                endTime: "2025-03-28 06:00:00",
                parameter: {
                  parameterName: "21",
                  parameterUnit: "C",
                },
              },
              {
                startTime: "2025-03-28 06:00:00",
                endTime: "2025-03-28 18:00:00",
                parameter: {
                  parameterName: "17",
                  parameterUnit: "C",
                },
              },
              {
                startTime: "2025-03-28 18:00:00",
                endTime: "2025-03-29 06:00:00",
                parameter: {
                  parameterName: "15",
                  parameterUnit: "C",
                },
              },
            ],
          },
          // 舒適度
          {
            elementName: "CI",
            time: [
              {
                startTime: "2025-03-28 00:00:00",
                endTime: "2025-03-28 06:00:00",
                parameter: {
                  parameterName: "舒適",
                },
              },
              {
                startTime: "2025-03-28 06:00:00",
                endTime: "2025-03-28 18:00:00",
                parameter: {
                  parameterName: "稍有寒意至舒適",
                },
              },
              {
                startTime: "2025-03-28 18:00:00",
                endTime: "2025-03-29 06:00:00",
                parameter: {
                  parameterName: "寒冷至稍有寒意",
                },
              },
            ],
          },
          // 最高溫度
          {
            elementName: "MaxT",
            time: [
              {
                startTime: "2025-03-28 00:00:00",
                endTime: "2025-03-28 06:00:00",
                parameter: {
                  parameterName: "24",
                  parameterUnit: "C",
                },
              },
              {
                startTime: "2025-03-28 06:00:00",
                endTime: "2025-03-28 18:00:00",
                parameter: {
                  parameterName: "21",
                  parameterUnit: "C",
                },
              },
              {
                startTime: "2025-03-28 18:00:00",
                endTime: "2025-03-29 06:00:00",
                parameter: {
                  parameterName: "17",
                  parameterUnit: "C",
                },
              },
            ],
          },
        ],
      },
    ],
  },
};

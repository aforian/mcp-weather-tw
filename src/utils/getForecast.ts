import ForecastResponse from "@/types/forecastResponse";

const NWS_API_BASE =
  "https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001";

async function makeNWSRequest<T>(url: string): Promise<T | null> {
  const headers = {
    // "User-Agent": USER_AGENT,
    // Accept: "application/geo+json",
  };

  try {
    const response = await fetch(url, { headers });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return (await response.json()) as T;
  } catch (error) {
    console.error("Error making NWS request:", error);
    return null;
  }
}

const getForecast = async ({
  locationName,
  apiKey,
}: {
  locationName: string;
  apiKey: string;
}) => {
  if (!apiKey) {
    return {
      content: [
        {
          type: "text",
          text: "OPEN DATA API key is required",
        },
      ],
    };
  }

  // Get grid point data
  const forecastUrl = `${NWS_API_BASE}?Authorization=${apiKey}&format=json&locationName=${locationName}`;
  const forecastData = await makeNWSRequest<ForecastResponse>(forecastUrl);

  if (!forecastData) {
    return {
      content: [
        {
          type: "text",
          text: `Failed to retrieve grid point data for location: ${locationName}. This location may not be supported by the NWS API (only TW locations are supported).`,
        },
      ],
    };
  }

  // Format forecast periods
  const formattedForecast = forecastData.records.location[0].weatherElement
    .map((element) => {
      const timeData = element.time[0];
      const startTime = new Date(timeData.startTime).toLocaleString("zh-TW");
      const endTime = new Date(timeData.endTime).toLocaleString("zh-TW");

      let formattedText = "";

      switch (element.elementName) {
        case "Wx":
          formattedText = `天氣狀況: ${timeData.parameter.parameterName}`;
          break;
        case "MaxT":
          formattedText = `最高溫度: ${timeData.parameter.parameterName}°C`;
          break;
        case "MinT":
          formattedText = `最低溫度: ${timeData.parameter.parameterName}°C`;
          break;
        case "PoP":
          formattedText = `降雨機率: ${timeData.parameter.parameterName}%`;
          break;
        default:
          formattedText = `${element.elementName}: ${timeData.parameter.parameterName}`;
      }

      return `${startTime} ~ ${endTime}\n${formattedText}`;
    })
    .join("\n\n");

  const forecastText = `天氣預報 - ${locationName}:\n\n${formattedForecast}`;

  return {
    content: [
      {
        type: "text",
        text: forecastText,
      },
    ],
  };
};

export default getForecast;

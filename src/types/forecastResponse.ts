export default interface ForecastResponse {
  success: string;
  result: {
    resource_id: string;
    fields: Array<{
      id: string;
      type: string;
    }>;
  };
  records: {
    datasetDescription: string;
    location: Array<{
      locationName: string;
      weatherElement: Array<{
        elementName: string;
        time: Array<{
          startTime: string;
          endTime: string;
          parameter: {
            parameterName: string;
            parameterValue?: string;
            parameterUnit?: string;
          };
        }>;
      }>;
    }>;
  };
}

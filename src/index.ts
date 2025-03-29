import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import getForecast from "./utils/getForecast";
import { CallToolResult } from "@modelcontextprotocol/sdk/types.js";
import { config } from "./config";
import { AVAILABLE_LOCATIONS } from "./constants/locations";

// Create server instance
const server = new McpServer({
  name: "weather",
  version: "1.0.0",
  capabilities: {
    resources: {},
    tools: {},
  },
});

server.tool(
  "get-forecast",
  "取得台灣地區天氣預報",
  {
    locationName: z
      .string()
      .describe("地區名稱，可用值：" + AVAILABLE_LOCATIONS.join(", ")),
  },
  async ({ locationName }) => {
    const forecast = await getForecast({
      locationName,
      apiKey: config.CWA_OPEN_DATA_API_KEY,
    });
    return forecast as CallToolResult;
  }
);

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("Weather MCP Server running on stdio");
}

main().catch((error) => {
  console.error("Fatal error in main():", error);
  process.exit(1);
});

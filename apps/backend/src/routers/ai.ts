import { initializeAgentExecutorWithOptions } from "langchain/agents";
import { RequestsGetTool, RequestsPostTool } from "langchain/tools";
import { publicProcedure, createTRPCRouter } from "~/trpc";
import { llm } from "~/utils/aiHelper";
import { klookPlugin } from "~/utils/klookPlugin";

export const aiRouter = createTRPCRouter({
  world: publicProcedure.query(async () => {
    const tools = [new RequestsGetTool(), new RequestsPostTool()];

    const executor = await initializeAgentExecutorWithOptions(tools, llm, {
      agentType: "chat-zero-shot-react-description",
      verbose: true,
    });

    //Inject klook plugin into executor
    const result = await executor.invoke({
      input: `${JSON.stringify(
        klookPlugin,
      )}Plan a trip to japan list of things to do in japan in JSON format e.g. {
        name: 'TeamLab Planets TOKYO Ticket',
        price: '2500 or $198'}`,
    });

    console.log({ result });

    return result;
  }),
});

import { createClient } from "@connectrpc/connect";
import { createConnectTransport } from "@connectrpc/connect-web";
import { AmortizationService } from "../gen/amortization/v1/amortization_pb";

const transport = createConnectTransport({
  baseUrl: "https://api.bradley-mader.com",
});

export const amortizationClient = createClient(AmortizationService, transport);

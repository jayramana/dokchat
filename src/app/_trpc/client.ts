import { AppRouter } from "@/trpc";
import { createTRPCReact } from "@trpc/react-query";

export const client = createTRPCReact<AppRouter>({});

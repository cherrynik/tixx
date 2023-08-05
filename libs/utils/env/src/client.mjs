import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";
 
export const clientEnv = createEnv({
  client: {
    NEXT_PUBLIC_TEST: z.string().min(3)
  },
  runtimeEnv: {
    NEXT_PUBLIC_TEST: process.env.NEXT_PUBLIC_TEST
  },
});

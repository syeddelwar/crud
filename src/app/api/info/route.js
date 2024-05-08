import { createEdgeRouter } from "next-connect";
import { postInfo } from "@/app/controlloers/info.cont";


const router = createEdgeRouter();

router.post(postInfo);

export async function GET(request, ctx) {
  return router.run(request, ctx);
}

export async function PUT(request, ctx) {
  return router.run(request, ctx);
}

export async function POST(request, ctx) {
  return router.run(request, ctx);
}

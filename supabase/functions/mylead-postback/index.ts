Deno.serve(async (req) => {
  if (req.method !== "GET" && req.method !== "POST") {
    return new Response("Method not allowed", {
      status: 405,
      headers: { "Allow": "GET, POST" },
    });
  }

  return Response.json(
    {
      ok: true,
      service: "AdReward MyLead Postback",
      message: "Endpoint is running. No rewards have been credited.",
    },
    { status: 200 },
  );
});
